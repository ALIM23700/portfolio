"use client";

import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaLaptopCode, FaGlobe, FaBrain, FaGitAlt, FaJava, FaPython
} from "react-icons/fa";

import {
  SiNextdotjs, SiTypescript, SiExpress, SiPostman,
  SiCplusplus, SiTailwindcss, SiMongodb
} from "react-icons/si";

import { motion } from "framer-motion";

const SkillPage = () => {
  const skillCards = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-blue-300" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      ],
      accent: "border-blue-500/50",
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "REST APIs", icon: <FaLaptopCode className="text-purple-400" /> },
      ],
      accent: "border-green-500/50",
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "C / C++", icon: <SiCplusplus className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-400" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      ],
      accent: "border-orange-500/50",
    },
    {
      title: "Soft Skills & Others",
      skills: [
        { name: "Problem Solving", icon: <FaBrain className="text-pink-400" /> },
        { name: "Communication", icon: <FaGlobe className="text-blue-400" /> },
        { name: "English", icon: <FaGlobe className="text-white" /> },
        { name: "Bangla", icon: <FaGlobe className="text-green-500" /> },
      ],
      accent: "border-purple-500/50",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-900 pt-32 pb-20 px-6 text-white">

      <section className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Technical <span className="text-blue-500">Skills</span>
          </h1>

          <motion.div
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
            Technologies I use to build modern web apps.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {skillCards.map((group, idx) => (
            <motion.div
              key={idx}
              className={`p-8 rounded-3xl bg-white/5 border ${group.accent} backdrop-blur-sm shadow-xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.0,
                delay: idx * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.03 }}
            >

              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                {group.title}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                {group.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-3 bg-gray-800/40 p-5 rounded-2xl border border-white/5"
                    whileHover={{
                      scale: 1.06,
                      y: -6
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                  >
                    <div className="text-4xl">
                      {skill.icon}
                    </div>

                    <span className="text-sm font-semibold text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </section>
    </main>
  );
};

export default SkillPage;