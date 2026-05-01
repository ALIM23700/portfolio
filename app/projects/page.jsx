"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Think Mirror",
    description:
      "Ai Based website where you can review your thoughts and decisions",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Gemini Api","JWT AUTH"],
    github: "https://github.com/ALIM23700/Fullstack_ThinkMirror",
    live: "https://think-mirror-frontend.vercel.app/",
    image: "think.png",
  },
  {
    name: "Fullstack E-Commerce",
    description:
      "A full MERN stack e-commerce app with user authentication, cart, checkout, and admin panel.",
    tech: ["React", "Tailwind CSS", "Express","MongoDb","JWT auth","SSL Commerz"],
    github: "https://github.com/ALIM23700/fullstack-ecommerce",
    live: "https://fullstack-ecommers-frontend.vercel.app/",
    image: "ecom.png",
  },
  {
    name: "University Assistant",
    description:
      "A Next.js app for university students to manage notes, assignments, and tasks efficiently.",
    tech: ["React", "Tailwind CSS", "Express","MongoDb","JWT auth"],
    github: "https://github.com/ALIM23700/University-Assistant-Fullstack",
    live: "https://fullstack-university-assistant-fron.vercel.app/",
    image: "Home.png",
  },
  {
    name: "Social Media App",
    description:
      "A MERN social media platform with posts, comments, likes, and authentication.",
    tech: ["React","Express", "MongoDB","socket.io","Tailwind css","Jwt auth"],
    github: "https://github.com/ALIM23700/social-media-fullstack",
    live: "https://social-media-frontend-sigma-rosy.vercel.app/",
    image: "social.png",
  },
];

const ProjectPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-900 pt-32 pb-20 px-6 text-white">

      <section className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h1>

          <motion.div
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
            >

              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-gray-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col flex-grow">

                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h2>

                <p className="text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="bg-blue-600/10 text-blue-400 border border-blue-500/20 text-xs px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4">

                  <motion.a
                    href={project.github}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <FaGithub /> GitHub
                  </motion.a>

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 rounded-lg"
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        boxShadow: "0px 10px 25px rgba(59,130,246,0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live
                    </motion.a>
                  )}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>
    </main>
  );
};

export default ProjectPage;