import Link from "next/link";
import { BarChart3, PenSquare, BrainCircuit } from "lucide-react";

const focusAreas = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Data Science & Analytics",
    description:
      "Building analytical workflows, experiments, dashboards, and machine learning solutions that support decision-making.",
  },
  {
    icon: <PenSquare className="h-6 w-6" />,
    title: "Technical Writing",
    description:
      "Writing practical tutorials and explainers on Python, SQL, Excel, statistics, and machine learning.",
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "Applied Problem Solving",
    description:
      "Turning technical complexity into usable outputs, from insights and models to documentation and educational content.",
  },
];

export default function About() {
  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold tracking-widest text-gray-500">
              ABOUT
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Data Scientist and Technical Writer with a passion for making
              complex ideas practical.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              I work across data science, analytics, experimentation, and
              technical communication. My goal is simple: build useful
              data-driven solutions and explain technical concepts clearly enough
              for people to apply them with confidence.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
              My work includes analytics and modeling in industry, educational
              writing for DataCamp, and independent publishing across data and
              technology topics.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center rounded-md border border-black px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                Read Full Bio
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            {focusAreas.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff4e2] text-[#d9992e]">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}