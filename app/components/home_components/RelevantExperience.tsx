import Link from "next/link";

const experiences = [
  {
    company: "Syno International",
    industry: "Fintech",
    role: "Data Scientist",
    period: "Jul 2025 – Present",
    description:
      "Working on advanced pricing and brand perception modeling, applying machine learning and statistical methods to improve measurement frameworks, and building ETL and AI-driven tools that accelerate insight delivery.",
  },
  {
    company: "Syno International",
    industry: "Fintech",
    role: "Data Analyst",
    period: "Sep 2024 – Jul 2025",
    description:
      "Built brand tracking dashboards, ran pricing and brand equity analyses, and delivered insights to support data-driven marketing and strategic decision-making.",
  },
  {
    company: "Freelance",
    industry: "Consulting",
    role: "Business Intelligence Specialist",
    period: "2022",
    description:
      "Delivered analytical support across CRM operations, website analytics, dashboarding, and growth-focused reporting for business decision-making.",
  },
  {
    company: "Cowrywise",
    industry: "Fintech",
    role: "Growth Marketing Manager",
    period: "2020",
    description:
      "Led growth-focused campaigns, performance marketing initiatives, content marketing, and lifecycle work that supported user acquisition and retention.",
  },
];

export default function ExperienceSection() {
  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-3">
          <div>
            <span className="text-sm font-semibold tracking-widest text-gray-500">
              EXPERIENCE
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Selected work across data, analytics, and insight delivery.
            </h2>

            <p className="mt-6 max-w-sm text-lg leading-8 text-gray-600">
              A snapshot of roles that reflect my background in data science,
              analytics, business intelligence, and growth.
            </p>

            <div className="mt-8">
              <Link
                href="/experience"
                className="inline-flex items-center rounded-md border border-black px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                View Full Experience
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-12 sm:grid-cols-2">
              {experiences.map((item) => (
                <div key={`${item.company}-${item.role}`} className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.company}{" "}
                      <span className="font-normal text-gray-500">
                        ({item.industry})
                      </span>
                    </h3>

                    <span className="text-sm font-semibold text-[#f0bf7e]">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-gray-600">
                    {item.role}
                  </p>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-6 h-0.5 w-10 bg-[#f0bf7e]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}