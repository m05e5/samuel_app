import { CalendarDays, Clock } from "lucide-react";

export default function LatestInsights() {
  const articles = [
    {
      id: 1,
      category: "Career Tips",
      date: "March 15, 2024",
      readTime: "5 min read",
      title: "10 Essential Skills Every Business Analyst Needs in 2025",
      excerpt:
        "Stay ahead of the curve with these critical competencies for modern business analysts...",
    },
    {
      id: 2,
      category: "Interview Prep",
      date: "March 12, 2024",
      readTime: "8 min read",
      title: "How to Ace Your Next BA Interview: A Complete Guide",
      excerpt:
        "Expert tips and strategies to help you stand out and land your dream BA role...",
    },
    {
      id: 3,
      category: "Tools & Tech",
      date: "March 10, 2024",
      readTime: "6 min read",
      title: "Top BA Tools and Technologies You Should Master",
      excerpt:
        "From requirements management to process modeling, explore the tools that matter...",
    },
    {
      id: 4,
      category: "Career Change",
      date: "March 8, 2024",
      readTime: "10 min read",
      title: "Transitioning to Business Analysis: A Step-by-Step Roadmap",
      excerpt:
        "Making a career switch? Here's everything you need to know to successfully transition into BA...",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Latest Insights & Articles</h2>
          <p className="text-gray-600 mt-3 text-lg">
            Stay updated with the latest trends, tips, and best practices in business analysis
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition border border-gray-100"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="bg-orange-100 text-[#fabb54] px-2 py-1 rounded-full text-xs font-semibold">
                  {article.category}
                </span>
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
              <p className="text-gray-600 mt-2">{article.excerpt}</p>

              <a
                href="#"
                className="text-[#fabb54] font-medium mt-4 inline-flex items-center gap-1 hover:underline"
              >
                Read More <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-[#fbbb53] to-[#fbcc82]  text-white font-medium py-3 px-6 rounded-lg transition"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
