import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const strengths = [
  "I build Python and SQL data workflows that clean, validate, transform, and serve data for reporting and analytics.",
  "I apply statistical and ML methods to pricing, perception, brand tracking, and responsible AI problems.",
  "I write tutorials, documentation, newsletters, and stakeholder-facing explanations that make technical work easier to use.",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="light-page pt-32">
        <section className="section-pad">
          <div className="container-max px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:items-start">
              <div>
                <div className="card overflow-hidden">
                  <Image
                    src="/samuel_pic3.jpg"
                    alt="Samuel Shaibu portrait"
                    width={420}
                    height={540}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <p className="copy mt-4 text-sm">
                  Samuel Shaibu. Data engineer, data scientist, and technical
                  writer based in Vilnius.
                </p>
              </div>

              <div>
                <div className="kicker">About</div>
                <h1 className="section-title mt-5">
                  I build data systems and explain the decisions behind them.
                </h1>

                <div className="mt-8 space-y-6 text-base leading-8 text-[var(--muted-strong)]">
                  <p>
                    I am a data professional with 4+ years of experience across
                    data science, data engineering, analytics, business
                    intelligence, and technical education. I currently work on
                    ETL workflows, AI-assisted tools, cloud data pipelines,
                    dashboards, and statistical models at Syno International.
                  </p>

                  <p>
                    My background is intentionally hybrid. I can write Python and
                    SQL to make data reliable, use statistical and ML methods to
                    answer business questions, and explain the result clearly to
                    technical and non-technical audiences.
                  </p>

                  <p>
                    Outside industry work, I publish technical content on
                    DataCamp, Medium, and Substack. I have taught data science
                    students, mentored project work, and co-authored a
                    peer-reviewed review paper on machine learning for energy
                    grid efficiency.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {strengths.map((strength) => (
                    <div key={strength} className="card-muted p-5">
                      <p className="text-sm leading-6 text-[var(--muted-strong)]">
                        {strength}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
