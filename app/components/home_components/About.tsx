import { User, TrendingUp, Target } from "lucide-react"; // Import icons from lucide-react
import { FiMail, FiSettings, FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";

export default function AboutBAC() {
const features = [
  {
    icon: <FiUsers size={40} />,
    title: "Leads Generation & Nurturing",
    description:
      "Boosting user acquisition and managing the MQL to SQL pipeline with email marketing, SMS, in-app messaging, etc",
  },
  {
    icon: <FiMail size={40} />,
    title: "Customer Lifecycle Management",
    description:
      "Nurturing, upselling & cross-selling to build longer-standing repeat clients",
  },
  {
    icon: <FiTarget size={40} />,
    title: "CRM Campaign Management",
    description:
      "Leveraging Braze, HubSpot, Salesforce, etc to engage and move leads through the Lead > MQL > SQL > Opp funnel",
  },
  {
    icon: <FiTrendingUp size={40} />,
    title: "Revenue Operations",
    description:
      "Designing, documenting and optimising sales processes with deal mapping and customised dashboards for tracking",
  },
  {
    icon: <FiSettings size={40} />,
    title: "Sales Process Optimisation / Automation",
    description:
      "Collaborating with marketing, sales, CS and finance to build high-intent automated processes and impact dashboards",
  },
];

  return (
    <section className=" ">
      <div className="mx-auto max-w-7xl ">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <span className="text-sm font-semibold tracking-widest text-gray-500">
              ABOUT ME
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              I&apos;m a multi-skilled CRM manager, endorsed as a global talent.
            </h2>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              I drive retention, engagement, and pipeline growth for high-growth
              companies with CRM campaign management, marketing operations,
              lifecycle marketing, workflow automation, MQL → SQL → SQO mapping,
              and overall sales/marketing funnel optimisation.
            </p>
          </div>

          {/* Right features */}
          <div className="space-y-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center  text-orange-200">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-gray-600">
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
