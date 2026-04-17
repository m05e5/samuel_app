"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "Power BI",
  "Excel",
  "ETL",
  "Data Visualization",
  "Experimentation",
  "Machine Learning",
  "Statistics",
  "Technical Writing",
  "Documentation",
  "JavaScript",
  "TypeScript",
  "Streamlit",
  "LangChain",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section className="mx-auto max-w-4xl py-16 px-6">
      <h2 className="mb-6 text-3xl font-bold">Skills</h2>

      <p className="mb-8 text-lg leading-8 text-gray-300">
        My toolkit spans data science, analytics, experimentation, technical
        writing, and educational content. I work with Python, SQL, Power BI,
        Excel, machine learning libraries, and modern developer tools to solve
        problems and communicate ideas clearly.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="cursor-default rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}