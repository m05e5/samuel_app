import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { featuredArticles } from "@/app/lib/articles";

export default function ArticlesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-28">
        <section className="border-b border-black/5 bg-neutral-50 py-16">
          <div className="container-max px-6">
            <span className="text-sm font-semibold tracking-widest text-gray-500">
              ARTICLES
            </span>
            <h1 className="mt-4 text-5xl font-bold text-gray-900">
              Writing and Publications
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              A growing collection of technical tutorials, explainers, and
              articles covering Python, SQL, Excel, statistics, and machine
              learning.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-max px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => (
                <article
                  key={article.id}
                  className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#fff4e2] px-3 py-1 text-xs font-semibold text-[#a96a0f]">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.platform}
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                    {article.title}
                  </h2>

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
      </main>

      <Footer />
    </>
  );
}