'use client'

import { motion } from "framer-motion";

//skills
export const skills = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "SQL",
  "Power BI",
  "Streamlit",
  "LangChain",
  "JavaScript",
  "TypeScript",
  "ETL",
  "Data Visualization",
  "Experimentation",
  "Model Evaluation",
  "Responsible AI",
  "Documentation",
];

// motion
export const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};




export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 ">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <p className=" leading-relaxed mb-8">
        I’m a data & AI professional with a special interest in{" "}
        <span className="font-semibold">responsible AI</span> in terms of
        robustness, fairness, transparency, and governance. I work with Python,
        Scikit-Learn, Streamlit, LangChain, Pandas, SQL, and Power BI, and
        translate complex ideas into clear, actionable writing.
      </p>

      {/* Skills */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 text-sm rounded-full border border-gray-200 
                       bg-white text-gray-700 shadow-sm cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
