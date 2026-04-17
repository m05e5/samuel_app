import Link from "next/link";
import { featuredArticles } from "@/app/lib/articles";

export default function Articles() {
  const previewArticles = featuredArticles.slice(0, 3);

  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-widest text-gray-500">
              WRITING
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Featured articles and technical writing
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              A selection of tutorials, explainers, and educational content
              across Python, SQL, Excel, statistics, and machine learning.
            </p>
          </div>

          <div>
            <Link
              href="/articles"
              className="inline-flex items-center rounded-md border border-black px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              See All Articles
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {previewArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#fff4e2] px-3 py-1 text-xs font-semibold text-[#a96a0f]">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.platform}</span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {article.summary}
              </p>

              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-semibold text-black underline underline-offset-4"
              >
                Read article
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}