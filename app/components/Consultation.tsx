import { Calendar } from "lucide-react";

export default function Consultation() {
  const consultations = [
    {
      title: "Resume Review",
      duration: "45 minutes",
      features: [
        "Comprehensive CV analysis",
        "ATS optimization tips",
        "Industry-specific feedback",
        "Actionable improvement plan",
      ],
      popular: false,
    },
    {
      title: "Career Strategy Session",
      duration: "90 minutes",
      features: [
        "Career path mapping",
        "Skill gap analysis",
        "Job market insights",
        "Personalized action plan",
        "LinkedIn strategy",
      ],
      popular: true,
    },
    {
      title: "BA Mentorship Package",
      duration: "4 sessions",
      features: [
        "4 x 60-minute sessions",
        "Ongoing email support",
        "Resource library access",
        "Portfolio development",
        "Mock interviews",
        "Career roadmap",
      ],
      popular: false,
    },
  ];

  return (
    <section id="consultation" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Book Your Consultation</h2>
        <p className="text-gray-600 mt-3">
          Choose the coaching package that fits your career goals and let's accelerate your
          BA journey together
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {consultations.map((item) => (
            <div
              key={item.title}
              className={`relative flex flex-col border rounded-2xl p-8 shadow-sm transition hover:shadow-md ${
                item.popular ? "border-[#fabb54]" : "border-gray-200"
              }`}
            >
              {/* Most popular badge */}
              {item.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fabb54] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}

              {/* Header bar */}
              <div className="h-3 bg-gradient-to-r from-[#fbbb53] to-[#fbcc82] rounded-md mb-6"></div>

              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.duration}</p>

              {/* Features */}
              <ul className="mt-6 space-y-3 text-left">
                {item.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#fabb54]">✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-8 flex items-center justify-center gap-2 border rounded-lg py-3 text-sm font-medium transition ${
                  item.popular
                    ? "bg-gradient-to-r from-[#fbbb53] to-[#fbcc82] text-white hover:opacity-90"
                    : "border-gray-300 text-gray-800 hover:bg-gray-50"
                }`}
              >
                <Calendar size={16} />
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
