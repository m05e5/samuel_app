import Link from "next/link";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    period: "2025 - Present",
    role: "Data Scientist",
    company: "Syno International",
    detail:
      "Building ETL workflows, AI-powered internal tools, Power BI outputs, and statistical models for survey, brand, and pricing analytics.",
  },
  {
    period: "2024 - 2025",
    role: "Data Analyst",
    company: "Syno International",
    detail:
      "Delivered dashboards, SQL models, pricing studies, brand equity analysis, and client-ready insight workflows across multiple markets.",
  },
  {
    period: "2024 - 2025",
    role: "Technical Writer",
    company: "DataCamp",
    detail:
      "Published peer-reviewed tutorials on Python, SQL, Excel, statistics, machine learning, and practical data concepts.",
  },
  {
    period: "2023 - 2024",
    role: "Data Science Instructor",
    company: "GOMYCODE",
    detail:
      "Taught and mentored 40+ students through Python, SQL, machine learning, visualization, and end-to-end data projects.",
  },
  {
    period: "2020 - 2024",
    role: "BI Specialist / Data Scientist",
    company: "Freelance",
    detail:
      "Built dashboards, ETL processes, documentation, and analytical solutions for clients across energy, finance, and edtech.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-pad border-t border-white/10">
      <div className="container-max px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="kicker">Experience</div>
            <h2 className="section-title mt-5">A career built around data work that ships.</h2>
          </div>

          <Link href="/experience" className="button-secondary w-full sm:w-auto">
            Full experience
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12">
          {experiences.map((item, index) => (
            <article
              key={`${item.company}-${item.role}-${item.period}`}
              className="grid gap-4 border-t border-white/10 py-7 md:grid-cols-[180px_1fr]"
            >
              <div className="text-sm font-bold text-[var(--teal)]">{item.period}</div>
              <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.company}</p>
                </div>
                <p className="copy text-sm">{item.detail}</p>
              </div>
              {index === experiences.length - 1 ? <div className="hidden" /> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
