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
      title: "How to Make a Bar Graph in Excel",
      category: "Excel",
      platform: "DataCamp",
      href: "https://www.datacamp.com/tutorial/how-to-make-a-bar-graph-in-excel",
      summary:
        "A practical guide to creating clear bar charts in Excel for reporting and analysis.",
    },
    {
      id: 2,
      title: "Python Circular Import",
      category: "Python",
      platform: "DataCamp",
      href: "https://www.datacamp.com/tutorial/python-circular-import",
      summary:
        "Explains what circular imports are in Python, why they happen, and how to resolve them cleanly.",
    },
    {
      id: 3,
      title: "Linear Regression in Python",
      category: "Machine Learning",
      platform: "DataCamp",
      href: "https://www.datacamp.com/tutorial/linear-regression-in-python",
      summary:
        "A beginner-friendly walkthrough of linear regression concepts and implementation in Python.",
    },
    {
      id: 4,
      title: "Python Inheritance",
      category: "Python",
      platform: "DataCamp",
      href: "https://www.datacamp.com/tutorial/python-inheritance",
      summary:
        "Covers inheritance in Python with examples that make object-oriented programming easier to understand.",
    },
    {
      id: 5,
      title: "Mean vs Median",
      category: "Statistics",
      platform: "DataCamp",
      href: "https://www.datacamp.com/tutorial/mean-vs-median",
      summary:
        "A clear explanation of when to use mean versus median when analyzing data distributions.",
    },
    {
      id: 6,
      title: "Normalization vs Standardization",
      category: "Machine Learning",
      platform: "DataCamp",
      href: "https://www.datacamp.com/tutorial/normalization-vs-standardization",
      summary:
        "Compares two important preprocessing techniques and when each one should be used.",
    },
    {
      id: 7,
      title: "Python Garbage Collection",
      category: "Python",
      platform: "DataCamp",
      href: "https://www.datacamp.com/tutorial/python-garbage-collection",
      summary:
        "Introduces how Python manages memory and what developers should know about garbage collection.",
    },
    {
      id: 8,
      title: "CSV vs Excel",
      category: "Data",
      platform: "DataCamp",
      href: "https://www.datacamp.com/blog/csv-vs-excel",
      summary:
        "Breaks down the differences between CSV and Excel formats for data storage and analysis workflows.",
    },
    {
      id: 9,
      title: "What Is GitHub?",
      category: "Developer Tools",
      platform: "DataCamp",
      href: "https://www.datacamp.com/blog/what-is-github",
      summary:
        "An introduction to GitHub, version control, and collaboration for technical professionals.",
    },
  ];