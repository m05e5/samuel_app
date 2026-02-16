
import { Users, MessageSquare, Briefcase, BookOpen, Linkedin } from "lucide-react";

export default function JoinCircle() {
  const stats = [
    { label: "Active Members" },
    { label: "Countries" },
    { label: "Monthly Events" },
    { label: "Community Support" },
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-[#fabb54]" />,
      title: "Global Network",
      description: "Connect with BAs from around the world and expand your professional circle",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#fabb54]" />,
      title: "Peer Support",
      description:
        "Get help, share experiences, and learn from fellow business analysts",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#fabb54]" />,
      title: "Job Opportunities",
      description:
        "Access exclusive job postings and career opportunities shared within the community",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#fabb54]" />,
      title: "Exclusive Insights",
      description:
        "Regular updates on industry trends, tools, and best practices",
    },
  ];

  return (
    <section id="circle" className="py-20 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900">
          Join The Business Analysis Circle
        </h2>
        <div className="w-16 h-1 bg-[#fabb54] mx-auto mt-3 rounded"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Become part of a thriving global community of business analysts committed
          to excellence and growth
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-xl py-6 px-4 shadow-sm hover:shadow-md transition"
            >
              <div className="w-24 h-4 bg-gradient-to-r from-[#fbbb53] to-[#fbcc82] mx-auto rounded"></div>
              <p className="mt-3 font-semibold text-gray-800">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
            >
              <div>{b.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{b.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#7a3052] to-[#5e2640] text-white rounded-2xl p-10 shadow-sm max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold">Ready to Join the Circle?</h3>
          <p className="text-white/90 mt-2">
            Connect with us on LinkedIn, join our WhatsApp group, or join our Slack
            workspace for daily discussions
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-[#7a3052] font-medium px-6 py-3 rounded-lg hover:opacity-90 transition">
              <Linkedin className="w-4 h-4" /> Join on LinkedIn
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/20 text-white font-medium px-6 py-3 rounded-lg opacity-60 cursor-not-allowed">
              Join WhatsApp Group
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
