import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2 max-w-md"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="public/assets/images/about-me.svg" alt="About Me Illustration" className="w-full h-auto"/>
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I’m a results-driven Data Analyst with a strong foundation in Python, SQL, and data visualization. I enjoy transforming raw data into clear, actionable insights that support smarter business decisions and operational efficiency.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My analytics journey began during my academic years and professional internships, where I worked extensively with sales performance, financial data, and operational reporting. Since then, I’ve continued to sharpen my skills by tackling real-world datasets and complex business problems.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Beyond analytics work, I enjoy exploring business insights, process improvements, and real-world case studies, while continuously learning from industry trends and practical projects. Feel free to explore my work through my portfolio or GitHub projects.
        </p>
      </motion.div>
    </div>
  );
}

