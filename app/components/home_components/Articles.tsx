import Link from "next/link";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import { featuredArticles } from "@/app/lib/articles";

const featuredWriting = featuredArticles.slice(0, 6);

export default function Articles() {
  return (
    <section id="articles" className="section-pad border-t border-white/10">
      <div className="container-max px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="kicker">Writing & publications</div>
            <h2 className="section-title mt-5">Technical writing is part of the work.</h2>
            <p className="subhead mt-5">
              I write tutorials, explainers, and newsletters that make data
              engineering, analytics, machine learning, and AI ethics easier to
              understand and apply.
            </p>
          </div>

          <Link href="/articles" className="button-secondary w-full sm:w-auto">
            View all writing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {featuredWriting.map((article, index) => (
            <article
              key={article.id}
              className={`card p-6 ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="tag">{article.category}</span>
                <span className="tag">{article.platform}</span>
                <span className="tag">
                  <Clock className="h-3.5 w-3.5" />
                  Practical read
                </span>
              </div>

              <h3 className={`${index === 0 ? "text-3xl" : "text-2xl"} mt-6 font-bold leading-tight text-white`}>
                {article.title}
              </h3>

              <p className="copy mt-4 text-sm">{article.summary}</p>

              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--teal)] transition hover:text-white"
              >
                Read article
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
