"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Fullstack E-Commerce",
    description:
      "A full MERN stack e-commerce app with user authentication, cart, checkout, and admin panel.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ALIM23700/fullstack-ecommerce",
    live: "https://fullstack-ecommers-frontend.vercel.app/",
    image: "ecom.png",
  },
  {
    name: "University Assistant",
    description:
      "A Next.js app for university students to manage notes, assignments, and tasks efficiently.",
    tech: ["Next.js", "Tailwind CSS", "Firebase Auth"],
    github: "https://github.com/ALIM23700/University-Assistant-Fullstack",
    live: "https://fullstack-university-assistant-fron.vercel.app/",
    image: "Home.png",
  },
  {
    name: "Social Media App",
    description:
      "A MERN social media platform with posts, comments, likes, and authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ALIM23700/social-media-fullstack",
    live: "https://social-media-frontend-sigma-rosy.vercel.app/",
    image: "social.png",
  },
];

const ProjectPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-900 pt-32 pb-20 px-6 text-white">
      <section className="max-w-6xl mx-auto animate-in fade-in duration-1000">
        
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-white">
            Featured <span className="text-blue-500">Projects</span>
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
            A showcase of my full-stack development journey and technical expertise.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col"
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden aspect-video bg-gray-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h2>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/10 text-blue-400 border border-blue-500/20 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-medium transition-all"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 rounded-lg font-medium transition-all"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;