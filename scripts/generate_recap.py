"""
Builds a rolling 30-day "what I've been up to" recap: GitHub commits/PRs
(scoped to the modern-data-engineering-lab org repos plus a few personal
tutorial repos) and writing activity from the Substack and Medium RSS feeds.
Requires RECAP_READ_TOKEN and GITHUB_USERNAME in a .env file.
"""

import json
import os
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

import feedparser
import requests
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("RECAP_READ_TOKEN")
USERNAME = os.getenv("GITHUB_USERNAME")

if not TOKEN or not USERNAME:
    sys.exit("Error: RECAP_READ_TOKEN and GITHUB_USERNAME must be set in .env")

HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
}

ORG = "modern-data-engineering-lab"
PERSONAL_REPOS = ["Python_Tutorial", "SQL_Tutorial", "Streamlit_Tutorial"]

SUBSTACK_FEED_URL = "https://aaboutdata.substack.com/feed"
MEDIUM_FEED_URL = "https://medium.com/feed/@Samietex"

SINCE = (datetime.now(timezone.utc) - timedelta(days=30)).strftime("%Y-%m-%dT%H:%M:%SZ")
UNTIL = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

OUTPUT_PATH = Path(__file__).resolve().parent.parent / "data" / "recap.json"


def paginate(url, params=None):
    """Yield all items from a paginated GitHub API endpoint (list or search response)."""
    params = params or {}
    params.setdefault("per_page", 100)
    while url:
        resp = requests.get(url, headers=HEADERS, params=params)
        resp.raise_for_status()
        data = resp.json()
        # Search API wraps results in {"items": [...]}; list endpoints return [...] directly
        yield from (data["items"] if isinstance(data, dict) else data)
        url = resp.links.get("next", {}).get("url")
        params = {}  # pagination cursor is baked into the next URL


def get_target_repos():
    """Return every repo in the org (discovered, not hardcoded) plus the named personal repos."""
    repos = []
    url = f"https://api.github.com/orgs/{ORG}/repos"
    for repo in paginate(url, {"type": "all"}):
        repos.append(repo["full_name"])
    for name in PERSONAL_REPOS:
        repos.append(f"{USERNAME}/{name}")
    return repos


def get_branches(repo_full_name):
    """Return all branch names for a repo."""
    url = f"https://api.github.com/repos/{repo_full_name}/branches"
    try:
        return [b["name"] for b in paginate(url)]
    except requests.HTTPError:
        return []


def get_commits_for_repo(repo_full_name):
    """Return commits by the user across all branches within the last 30 days.
    Deduplicates by SHA so commits shared between branches are counted once."""
    seen_shas = set()
    commits = []
    for branch in get_branches(repo_full_name):
        url = f"https://api.github.com/repos/{repo_full_name}/commits"
        params = {"sha": branch, "author": USERNAME, "since": SINCE, "until": UNTIL, "per_page": 100}
        try:
            for commit in paginate(url, params):
                sha = commit["sha"]
                if sha in seen_shas:
                    continue
                seen_shas.add(sha)
                c = commit["commit"]
                commits.append({
                    "sha": sha[:7],
                    "branch": branch,
                    "message": c["message"].split("\n")[0],
                    "date": c["author"]["date"],
                    "url": commit["html_url"],
                })
        except requests.HTTPError as exc:
            if exc.response.status_code == 409:
                pass  # empty repo
            else:
                raise
    return commits


def get_prs_opened(repos):
    """Return PRs opened by the user in the last 30 days, restricted to `repos`."""
    repo_set = set(repos)
    opened = []
    query = f"type:pr author:{USERNAME} created:>{SINCE[:10]}"
    url = "https://api.github.com/search/issues"
    params = {"q": query, "per_page": 100}
    for item in paginate(url, params):
        repo_name = item["repository_url"].split("/repos/", 1)[-1]
        if repo_name not in repo_set:
            continue
        opened.append({
            "repo": repo_name,
            "number": item["number"],
            "title": item["title"],
            "state": item["state"],
            "url": item["html_url"],
            "created_at": item["created_at"],
        })
    return opened


def get_feed_posts(feed_url):
    """Return title/link/published for RSS entries published in the last 30 days."""
    parsed = feedparser.parse(feed_url)
    posts = []
    for entry in parsed.entries:
        published = entry.get("published_parsed") or entry.get("updated_parsed")
        if not published:
            continue
        published_at = datetime(*published[:6], tzinfo=timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        if published_at < SINCE:
            continue
        posts.append({
            "title": entry.get("title", "").strip(),
            "link": entry.get("link", ""),
            "published": published_at,
        })
    return posts


def main():
    print(f"Building recap for {USERNAME} since {SINCE} ...", file=sys.stderr)

    repos = get_target_repos()

    commits_by_repo = {}
    for repo_name in repos:
        commits = get_commits_for_repo(repo_name)
        if commits:
            commits_by_repo[repo_name] = commits

    prs_opened = get_prs_opened(repos)

    substack_posts = get_feed_posts(SUBSTACK_FEED_URL)
    medium_posts = get_feed_posts(MEDIUM_FEED_URL)

    result = {
        "generated_at": UNTIL,
        "period": {"since": SINCE, "until": UNTIL},
        "writing": {
            "substack": substack_posts,
            "medium": medium_posts,
        },
        "building": {
            "repos_active": len(commits_by_repo),
            "total_commits": sum(len(v) for v in commits_by_repo.values()),
            "commits_by_repo": commits_by_repo,
            "prs_opened": prs_opened,
        },
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(result, indent=2), encoding="utf-8")
    print(f"Wrote recap to {OUTPUT_PATH}", file=sys.stderr)


if __name__ == "__main__":
    main()
