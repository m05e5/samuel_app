import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const experiences = [
  {
    company: "Syno International",
    context: "Market research and analytics",
    role: "Data Scientist",
    period: "Jul 2025 - Present",
    bullets: [
      "Build Python, SQL, and AWS-based ETL pipelines for ingestion, validation, transformation, and downstream analytics.",
      "Apply statistical and ML methods including Gabor-Granger, CVI/CBI, brand perception modeling, and key driver analysis.",
      "Develop Streamlit and LangChain-powered internal tools that reduce manual operations work and accelerate insight delivery.",
      "Document pipeline architecture, orchestration dependencies, and implementation decisions for review and knowledge transfer.",
    ],
  },
  {
    company: "Syno International",
    context: "Brand tracking and insight delivery",
    role: "Data Analyst",
    period: "Sep 2024 - Jun 2025",
    bullets: [
      "Built and maintained Power BI dashboards connected to SQL workflows for global client reporting.",
      "Delivered MaxDiff and Van Westendorp pricing analysis, mood score modeling, SWOT analysis, and brand equity work.",
      "Wrote SQL logic for CVI/CBI modeling and campaign analysis, supporting high-accuracy client deliverables.",
      "Translated business requirements into analysis outputs, documentation, and stakeholder-ready recommendations.",
    ],
  },
  {
    company: "DataCamp",
    context: "Technical education",
    role: "Technical Writer",
    period: "Apr 2024 - Jul 2025",
    bullets: [
      "Published 18+ peer-reviewed tutorials and explainers on Python, SQL, pandas, statistics, Excel, and data science concepts.",
      "Collaborated with editors and subject-matter experts to improve technical accuracy, clarity, and teaching value.",
    ],
  },
  {
    company: "GOMYCODE",
    context: "Data science instruction",
    role: "Data Science Instructor",
    period: "Aug 2023 - Feb 2024",
    bullets: [
      "Taught and mentored 40+ students across Python, SQL, data analysis, visualization, machine learning, and statistical modeling.",
      "Led hands-on projects that helped learners build end-to-end data solutions and explain outputs to non-technical audiences.",
    ],
  },
  {
    company: "Freelance",
    context: "Energy, finance, and edtech clients",
    role: "Business Intelligence Specialist / Data Scientist",
    period: "Nov 2020 - Aug 2024",
    bullets: [
      "Designed data solutions, Power BI dashboards, and automated ETL workflows using SSIS, SQL, and reporting tools.",
      "Created client-facing documentation and how-to guides that improved analytics adoption and project turnaround.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="light-page pt-32">
        <section className="section-pad border-b border-white/10">
          <div className="container-max px-4 sm:px-6">
            <div className="kicker">Experience</div>
            <h1 className="section-title mt-5 max-w-5xl">
              Data work across engineering, modeling, analytics, and education.
            </h1>
            <p className="subhead mt-6 max-w-3xl">
              Selected roles that show how I move between building the data
              foundation, analyzing the problem, and communicating the answer.
            </p>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-max px-4 sm:px-6">
            <div className="space-y-4">
              {experiences.map((item) => (
                <article key={`${item.company}-${item.role}`} className="card p-7">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{item.company}</h2>
                      <p className="mt-2 text-sm font-medium text-[var(--muted)]">
                        {item.role} | {item.context}
                      </p>
                    </div>

                    <span className="text-sm font-bold text-[var(--teal)]">
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="border-l-2 border-[var(--teal)] pl-4 text-sm leading-7 text-[var(--muted-strong)]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
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
