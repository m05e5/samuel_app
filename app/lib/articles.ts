export type Article = {
  id: number;
  title: string;
  category: string;
  platform: string;
  href: string;
  summary: string;
};

export const featuredArticles: Article[] = [
  {
    id: 1,
    title: "Python Circular Import: Causes, Fixes, and Best Practices",
    category: "Python",
    platform: "DataCamp",
    href: "https://www.datacamp.com/tutorial/python-circular-import",
    summary:
      "A practical breakdown of circular imports, why they happen, and how to restructure Python code cleanly.",
  },
  {
    id: 2,
    title: "Linear Regression in Python",
    category: "Machine Learning",
    platform: "DataCamp",
    href: "https://www.datacamp.com/tutorial/linear-regression-in-python",
    summary:
      "A hands-on guide to the core ideas behind linear regression and how to implement them in Python.",
  },
  {
    id: 3,
    title: "Normalization in SQL",
    category: "SQL",
    platform: "DataCamp",
    href: "https://www.datacamp.com/tutorial/normalization-in-sql",
    summary:
      "Explains database normalization from 1NF to 5NF with examples for cleaner and more reliable schemas.",
  },
  {
    id: 4,
    title: "All About Data & More",
    category: "Newsletter",
    platform: "Substack",
    href: "https://aaboutdata.substack.com/",
    summary:
      "A newsletter for aspiring data professionals, covering data analytics, machine learning, SQL, and job-ready workflows.",
  },
  {
    id: 5,
    title: "How to Make a Bar Graph in Excel",
    category: "Excel",
    platform: "DataCamp",
    href: "https://www.datacamp.com/tutorial/how-to-make-a-bar-graph-in-excel",
    summary:
      "A beginner-friendly guide to building clear Excel bar charts for reporting and analysis.",
  },
  {
    id: 6,
    title: "Python Inheritance: Best Practices for Reusable Code",
    category: "Python",
    platform: "DataCamp",
    href: "https://www.datacamp.com/tutorial/python-inheritance",
    summary:
      "Covers inheritance in Python with examples that make object-oriented programming easier to apply.",
  },
  {
    id: 7,
    title: "Mean vs. Median",
    category: "Statistics",
    platform: "DataCamp",
    href: "https://www.datacamp.com/tutorial/mean-vs-median",
    summary:
      "A clear explanation of when mean or median better represents a data distribution.",
  },
  {
    id: 8,
    title: "Normalization vs. Standardization",
    category: "Machine Learning",
    platform: "DataCamp",
    href: "https://www.datacamp.com/tutorial/normalization-vs-standardization",
    summary:
      "Compares two common preprocessing techniques and shows when each one is useful.",
  },
  {
    id: 9,
    title: "Python Garbage Collection",
    category: "Python",
    platform: "DataCamp",
    href: "https://www.datacamp.com/tutorial/python-garbage-collection",
    summary:
      "Introduces Python memory management and the key concepts behind garbage collection.",
  },
  {
    id: 10,
    title: "CSV vs. Excel",
    category: "Data Workflows",
    platform: "DataCamp",
    href: "https://www.datacamp.com/blog/csv-vs-excel",
    summary:
      "Breaks down the trade-offs between CSV and Excel for storage, analysis, and collaboration.",
  },
  {
    id: 11,
    title: "Understanding GitHub",
    category: "Developer Tools",
    platform: "DataCamp",
    href: "https://www.datacamp.com/blog/what-is-github",
    summary:
      "An introduction to GitHub, version control, and collaboration for technical professionals.",
  },
  {
    id: 12,
    title: "Medium Essays on SQL, ML, and AI Ethics",
    category: "Essays",
    platform: "Medium",
    href: "https://medium.com/@Samietex",
    summary:
      "A public archive of essays on SQL, database design, machine learning basics, energy-grid analytics, and ethical AI.",
  },
  {
    id: 13,
    title: "The Ethical AI Guy",
    category: "Responsible AI",
    platform: "Substack",
    href: "https://theethicalaiguy.substack.com/",
    summary:
      "Writing on practical AI ethics, model behavior, fairness, and responsible AI for builders and curious readers.",
  },
];
