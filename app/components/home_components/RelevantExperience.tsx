const experiences = [
  {
    company: " Syno International",
    industry: "Fintech",
    role: "Data Scientist",
    period: "Jul 2025 – Present",
    description:
     `
      Responsible for advanced pricing and brand perception modeling, applying 
      machine learning and statistical methods to improve brand equity measurement,
       and developing AI-driven tools and ETL pipelines to automate operations and 
       accelerate insight delivery.
     `
  },
  {
    company: "Syno International",
    industry: "Fintech",
    role: "Data Analyst",
    period: "Sep 2024 – Jul 2025 ",
    description:
    `Focused on building brand tracking dashboards, 
    conducting brand equity and pricing analyses, and 
    delivering key driver and CVI/CBI insights to support
     data-driven marketing and strategic decisions.`
  },
  {
    company: "Freelance",
    industry: "",
    role: "Business Intelligence Specialist",
    period: "2022",
    description:
      "I am in charge of MQLs, engaging and converting them to SQLs, while automating CRM operations to sync with sales team. I focused on growth, product marketing, website analytics and CRM lifecycle management.",
  },
  {
    company: "Cowrywise",
    industry: "Fintech",
    role: "Growth Marketing Manager",
    period: "2020",
    description:
      "My main focus was on launching growth-focused campaigns, performance marketing, lead generation and nurturing, content marketing, and customer lifecycle management.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl ">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Left heading */}
          <div>
            <span className="text-sm font-semibold tracking-widest text-gray-500">
              WHERE I&apos;VE BEEN
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              A quick view of <br />
              selected{" "}
              <span className="text-orange-200">relevant experience</span>
            </h2>
          </div>

          {/* Experience grid */}
          <div className="lg:col-span-2">
            <div className="grid gap-12 sm:grid-cols-2">
              {experiences.map((item, index) => (
                <div key={index} className="relative">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.company}{" "}
                      <span className="font-normal text-gray-500">
                        ({item.industry})
                      </span>
                    </h3>

                    <span className="text-sm font-semibold text-orange-200">
                      {item.period}
                    </span>
                  </div>

                  {/* Role */}
                  <p className="mt-2 text-sm font-medium text-gray-600">
                    {item.role}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-gray-600">
                    {item.description}
                  </p>

                  {/* Accent line */}
                  <div className="mt-6 h-0.5 w-10 bg-orange-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
