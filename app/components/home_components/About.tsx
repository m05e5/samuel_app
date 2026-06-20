import { BrainCircuit, DatabaseZap, PenLine } from "lucide-react";

const pillars = [
  {
    title: "Data Engineering",
    icon: DatabaseZap,
    summary:
      "I design pipelines that move, validate, transform, and serve data reliably for analytics and operations.",
    items: ["ETL pipelines", "Data validation", "AWS Glue", "S3 + Athena", "Step Functions", "Terraform"],
    accent: "text-[var(--teal)]",
  },
  {
    title: "Data Science",
    icon: BrainCircuit,
    summary:
      "I use statistical modeling and machine learning to answer business questions and make trade-offs visible.",
    items: ["Machine learning", "Pricing analysis", "Experimentation", "Forecasting", "Model evaluation", "Responsible AI"],
    accent: "text-[var(--blue)]",
  },
  {
    title: "Technical Writing",
    icon: PenLine,
    summary:
      "I turn technical systems into tutorials, documentation, and explanations people can actually use.",
    items: ["DataCamp tutorials", "API-style docs", "Newsletter writing", "Model cards", "Guides", "Developer education"],
    accent: "text-[var(--amber)]",
  },
];

export default function About() {
  return (
    <section id="work" className="section-pad border-t border-white/10">
      <div className="container-max px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="kicker">What I do</div>
          <h2 className="section-title mt-5">Three disciplines, one workflow.</h2>
          <p className="subhead mt-5">
            My best work happens where data engineering, data science, and
            communication overlap: build the system, analyze the signal, explain
            the result.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article key={pillar.title} className="card p-6">
                <div className={`mb-8 inline-flex rounded-lg border border-white/10 bg-white/5 p-3 ${pillar.accent}`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                <p className="copy mt-4 text-sm">{pillar.summary}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {pillar.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
