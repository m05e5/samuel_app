import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

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

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-28">
        <section className="border-b border-black/5 bg-neutral-50 py-16">
          <div className="container-max px-6">
            <span className="text-sm font-semibold tracking-widest text-gray-500">
              EXPERIENCE
            </span>
            <h1 className="mt-4 text-5xl font-bold text-gray-900">
              Professional Experience
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Selected roles across data science, analytics, business
              intelligence, and growth-focused work.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-max px-6">
            <div className="space-y-10">
              {experiences.map((item) => (
                <div
                  key={`${item.company}-${item.role}`}
                  className="rounded-2xl border border-gray-200 p-8 shadow-sm"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        {item.company}
                        <span className="ml-2 font-normal text-gray-500">
                          ({item.industry})
                        </span>
                      </h2>
                      <p className="mt-2 text-sm font-medium text-gray-600">
                        {item.role}
                      </p>
                    </div>

                    <span className="text-sm font-semibold text-[#c98a2d]">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl leading-8 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}