import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFileExcel } from "react-icons/fa6";
import { FaDatabase, FaPython } from "react-icons/fa";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { SiTableau } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Microsoft Excel", icon: <FaFileExcel size={50} /> },
    { id: 2, name: "Python", icon: <FaPython size={50} /> },
    { id: 3, name: "SQL", icon: <FaDatabase size={50} /> },
    { id: 4, name: "Power BI", icon: <BsFillBarChartLineFill size={50} /> },
    { id: 5, name: "Tableau", icon: <SiTableau size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "GRAB Indonesia",
      role: "Omnicommerce Support",
      period: "Jul 2024 - Present",
      description:
        "Managed GrabFood Dine Out operations and merchant onboarding while streamlining escalation workflows through automation. Developed data queries to analyze transaction trends and reduce manual tasks, driving scalable, data-driven reporting and continuous process improvement.",
      logo: "public/assets/images/grab-logo.svg",
    },
    {
      id: 2,
      company: "PT FKS Pangan Nusantara",
      role: "Data Analyst Intern",
      period: "Apr 2024 - Jul 2024",
      description:
        "Managed sales performance analysis across multiple products, delivering weekly and monthly reports for strategic reviews. Ensured high data reliability by validating and cleaning datasets from 184 sub-distributors, proactively resolving anomalies to maintain end-to-end data quality.",
      logo: "public/assets/images/icon-company.png",
    },
    {
      id: 3,
      company: "PT Abhimata Citra Abadi",
      role: "Data Analyst Intern",
      period: "Aug 2023 - Dec 2023",
      description:
        "Analyzed AR/AP trends and cash flow to ensure financial sustainability throughout project lifecycles. Audited sales invoice practices against SOPs to close process gaps, significantly improving collection efficiency, cycle times, and cash flow predictability through structured data management.",
      logo: "public/assets/images/icon-company.png",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

