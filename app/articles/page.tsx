import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { featuredArticles } from "@/app/lib/articles";
import { ExternalLink } from "lucide-react";

export default function ArticlesPage() {
  return (
    <>
      <Navbar />

      <main className="light-page pt-32">
        <section className="section-pad border-b border-white/10">
          <div className="container-max px-4 sm:px-6">
            <div className="kicker">Writing</div>
            <h1 className="section-title mt-5 max-w-5xl">
              Tutorials, newsletters, and essays for people doing the work.
            </h1>
            <p className="subhead mt-6 max-w-3xl">
              Selected public writing across DataCamp, Substack, and Medium,
              covering Python, SQL, Excel, statistics, machine learning, data
              workflows, and responsible AI.
            </p>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-max px-4 sm:px-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => (
                <article key={article.id} className="card p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">{article.category}</span>
                    <span className="tag">{article.platform}</span>
                  </div>

                  <h2 className="mt-6 text-2xl font-bold leading-tight text-white">
                    {article.title}
                  </h2>

                  <p className="copy mt-4 text-sm">{article.summary}</p>

                  <a
                    href={article.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--teal)] transition hover:text-white"
                  >
                    Read
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
