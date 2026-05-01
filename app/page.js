"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaGithub, FaLinkedin, FaFacebook, FaHtml5, FaCss3Alt, 
  FaJsSquare, FaReact, FaNodeJs, FaLaptopCode, FaGlobe, 
  FaBrain, FaGitAlt, FaJava, FaPython, FaExternalLinkAlt ,FaEnvelope,FaPhoneAlt,FaFacebookF,FaWhatsapp
} from "react-icons/fa";

import { 
  SiNextdotjs, SiTypescript, SiExpress, SiPostman, 
  SiCplusplus, SiTailwindcss, SiMongodb 
} from "react-icons/si";

// Projects data array
const projects = [
  {
    name: "Think Mirror",
    description: "AI-based platform where users can review thoughts and decisions with Gemini API integration.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Gemini API"],
    image: "/think.png", 
    github: "https://github.com/ALIM23700/Fullstack_ThinkMirror",
    live: "https://think-mirror-frontend.vercel.app/"
  },
  {
    name: "Fullstack E-Commerce",
    description: "Comprehensive MERN application featuring SSL Commerz, JWT auth, and a dedicated admin panel.",
    tech: ["React", "Express", "MongoDB", "SSL Commerz", "Tailwind"],
    image: "/ecom.png",
    github: "https://github.com/ALIM23700/fullstack-ecommerce",
    live: "https://fullstack-ecommers-frontend.vercel.app/"
  },
  {
    name: "University Assistant",
    description: "Management system for students to handle notes, assignments, and daily academic tasks.",
    tech: ["Next.js", "Express", "MongoDB", "JWT Auth"],
    image: "/Home.png",
    github: "https://github.com/ALIM23700/University-Assistant-Fullstack",
    live: "https://fullstack-university-assistant-fron.vercel.app/"
  },
  {
    name: "Social Media App",
    description: "Real-time social networking platform with messaging, post likes, and socket integration.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    image: "/social.png",
    github: "https://github.com/ALIM23700/social-media-fullstack",
    live: "https://social-media-frontend-sigma-rosy.vercel.app/"
  }
];

export default function Page() {
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
    <main className="bg-[#0b0f19] text-white scroll-smooth h-screen overflow-y-scroll snap-y snap-mandatory">
      
     {/* ================= HOME SECTION ================= */}
<section
  id="home"
  className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 snap-start overflow-hidden"
>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>

  {/* Top Badge Animation */}
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-4 md:mb-6 px-4 py-1 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm rounded-full hover:bg-blue-500/20 hover:border-blue-500/60 transition-all duration-300 cursor-default shadow-[0_0_15px_rgba(59,130,246,0.1)]"
  >
    <span className="relative flex h-2 w-2 inline-block mr-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
    </span>
    Available for Opportunities
  </motion.div>

  {/* Name with Letter Spacing Animation */}
  <motion.h1 
    initial={{ opacity: 0, letterSpacing: "-5px" }}
    animate={{ opacity: 1, letterSpacing: "0px" }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="text-4xl md:text-8xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-200 to-gray-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default"
  >
    Abdul Alim
  </motion.h1>

  {/* Typing or Fade-up Subtitle */}
  <motion.p 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="text-gray-400 text-lg md:text-3xl max-w-2xl mb-8 md:mb-12 font-light tracking-wide px-2"
  >
    Building the future with <span className="text-blue-500 font-medium">MERN</span> & <span className="text-cyan-400 font-medium">Next.js</span>
  </motion.p>

  {/* Social Icons with staggered animation */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
    className="flex gap-8 md:gap-10 text-2xl md:text-4xl mb-12"
  >
    {[
      { icon: <FaGithub />, link: "https://github.com/ALIM23700", color: "hover:text-white" },
      { icon: <FaLinkedin />, link: "#", color: "hover:text-blue-500" },
      { icon: <FaFacebook />, link: "#", color: "hover:text-blue-600" }
    ].map((item, index) => (
      <motion.a
        key={index}
        href={item.link}
        target="_blank"
        whileHover={{ y: -8, scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className={`text-gray-500 transition-all duration-300 ${item.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]`}
      >
        {item.icon}
      </motion.a>
    ))}
  </motion.div>

  {/* Buttons with Shine and Hover Effect */}
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.2 }}
    className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-6 md:px-0"
  >
    <Link
      href="#skills"
      className="group relative px-10 py-4 bg-blue-600 overflow-hidden rounded-xl font-bold text-lg hover:bg-blue-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 text-center"
    >
      <span className="relative z-10">View My Skills</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </Link>
    
    <Link
      href="#about"
      className="px-10 py-4 border border-white/10 bg-white/5 rounded-xl font-bold text-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1 text-center backdrop-blur-sm"
    >
      About Me
    </Link>
  </motion.div>

  {/* Scroll Down Indicator */}
  <motion.div 
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
  >
    <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
      <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
    </div>
  </motion.div>
</section>

{/* ================= ABOUT SECTION ================= */}
<section
  id="about"
  className="relative min-h-screen flex items-center justify-center px-6 py-20 md:py-0 snap-start overflow-hidden bg-[#0b0f19]"
>
  <motion.div
    className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20"
    initial="hidden"
    whileInView="show"
    // প্রতিবার স্ক্রল করলে এনিমেশন হবে (once: false)
    viewport={{ once: false, amount: 0.2 }} 
  >
    
    {/* Left Side: Image স্লাইড হবে বাম থেকে */}
    <motion.div
      className="relative group cursor-pointer"
      variants={{
        hidden: { opacity: 0, x: -120 },
        show: { 
          opacity: 1, 
          x: 0, 
          transition: { 
            duration: 2.5, 
            ease: [0.22, 1, 0.36, 1] 
          } 
        }
      }}
    >
      {/* Background Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full opacity-10 group-hover:opacity-50 blur-2xl transition duration-700"></div>
      
      {/* Profile Image Wrapper */}
      <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full p-1.5 bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
        <img
          src="/final.jpg"
          alt="Abdul Alim"
          className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
      </div>
    </motion.div>

    {/* Right Side: Content স্লাইড হবে নিচ থেকে এবং একটির পর একটি (Stagger) */}
    <motion.div 
      className="flex-1 space-y-8 text-center md:text-left"
      variants={{
        hidden: { opacity: 0 },
        show: { 
          opacity: 1, 
          transition: { 
            staggerChildren: 0.8, // প্রতিটি লাইনের মাঝে গ্যাপ
            delayChildren: 0.5    // শুরু হওয়ার আগে ওয়েট
          } 
        }
      }}
    >
      {/* Title */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0, transition: { duration: 1.8, ease: "easeOut" } }
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:text-blue-400 transition-colors duration-500 cursor-default">
          About <span className="text-blue-500">Me</span>
        </h2>
      </motion.div>
      
      {/* Description */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } }
        }}
        className="space-y-5"
      >
        <p className="text-gray-200 text-xl md:text-2xl font-medium leading-tight">
          Hello! I’m <span className="text-blue-400">Abdul Alim</span>, a dedicated <br className="hidden md:block" />
          <span className="text-white underline decoration-blue-500/30">MERN Stack Web Developer</span>.
        </p>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl hover:text-gray-300 transition-colors duration-500">
          I specialize in building responsive, modern, and high-performance web applications using React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and TypeScript.
        </p>
      </motion.div>

      {/* Info Grid Boxes */}
      <motion.div 
        className="grid grid-cols-2 gap-4 pt-4"
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 2.2, ease: "easeOut" } }
        }}
      >
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:scale-105 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 group cursor-default shadow-lg">
          <h3 className="text-blue-500 font-black text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-500">4th Year</h3>
          <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest">CSE Student</p>
        </div>
        
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:scale-105 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 group cursor-default shadow-lg">
          <h3 className="text-blue-500 font-black text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-500">MERN</h3>
          <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest">Full Stack Dev</p>
        </div>
      </motion.div>

    </motion.div>
  </motion.div>
</section>
      {/* ================= SKILLS SECTION ================= */}
      <section
        id="skills"
        className="min-h-screen py-20 px-4 md:px-6 snap-start flex items-center justify-center bg-gradient-to-b from-[#0b0f19] to-black"
      >
        <div className="max-w-6xl w-full">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Technical <span className="text-blue-500">Skills</span>
            </h2>
            <div className="h-1 w-16 md:w-20 bg-blue-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-xl mx-auto text-sm md:text-lg px-4">
              Technologies I use to build modern web apps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {skillCards.map((group, idx) => (
              <motion.div
                key={idx}
                className={`p-6 md:p-8 rounded-3xl bg-white/5 border ${group.accent} backdrop-blur-sm shadow-xl`}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              >
                <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-6 md:h-8 bg-blue-600 rounded-full"></span>
                  {group.title}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {group.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center gap-2 md:gap-3 bg-gray-800/40 p-4 md:p-5 rounded-2xl border border-white/5"
                      whileHover={{ scale: 1.05, y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
                    >
                      <div className="text-2xl md:text-4xl">{skill.icon}</div>
                      <span className="text-[10px] md:text-sm font-semibold text-gray-300 text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* ================= PROJECTS SECTION ================= */}
<section
  id="projects"
  className="min-h-screen py-20 px-4 md:px-6 snap-start flex items-center justify-center bg-[#0b0f19]"
>
  <div className="max-w-6xl w-full">
    <motion.div
      className="text-center mb-10 md:mb-16"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-3xl md:text-6xl font-extrabold mb-4">
        Featured <span className="text-blue-500">Projects</span>
      </h2>
      <div className="h-1 w-16 md:w-20 bg-blue-600 mx-auto rounded-full" />
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          className="group bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }} // হোভার করলে কার্ডটি একটু উপরে উঠবে
          transition={{ duration: 0.5 }}
        >
          {/* Project Image Wrapper */}
          <div className="relative overflow-hidden aspect-video bg-gray-800">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            
            {/* Hover Badge (Optional) */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                View Details
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-blue-400 transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-gray-400 mb-4 md:mb-6 flex-grow leading-relaxed text-xs md:text-base group-hover:text-gray-300 transition-colors">
              {project.description}
            </p>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-600/10 text-blue-400 border border-blue-500/20 text-[8px] md:text-[10px] uppercase tracking-wider font-bold px-2 md:px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                className="flex items-center justify-center gap-2 px-3 py-2 md:py-3 bg-white/5 border border-white/10 rounded-xl font-medium text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-lg" /> Code
              </motion.a>
              
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-3 py-2 md:py-3 bg-blue-600 rounded-xl font-bold text-white shadow-lg text-xs md:text-sm hover:bg-blue-500 hover:shadow-blue-500/40 transition-all duration-300"
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
  </div>
</section>
     {/* ================= CONTACT SECTION ================= */}
<section id="contact" className="min-h-screen py-20 px-4 md:px-6 snap-start flex items-center justify-center bg-[#0b0f19]">
  <div className="max-w-6xl w-full">
    
    <motion.div
      className="text-center mb-10 md:mb-16"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-3xl md:text-6xl font-extrabold mb-4 text-white">
        Get In <span className="text-blue-500">Touch</span>
      </h2>
      <div className="h-1.5 w-16 md:w-24 bg-blue-600 mx-auto rounded-full" />
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
      
      {/* Info Card with Hover Effect */}
      <motion.div
        className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-3xl space-y-6 md:space-y-8 backdrop-blur-sm flex flex-col h-full hover:border-blue-500/50 transition-all duration-500 group"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="flex-grow">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">Let's Talk</h3>
          <p className="text-gray-400 mb-6 md:mb-8 font-medium text-sm md:text-base">Feel free to reach out!</p>

          <div className="space-y-4">
            {/* Email Box */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/40 border border-white/5 hover:bg-gray-800/70 hover:scale-[1.02] transition-all duration-300">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-500/20 rounded-full text-blue-500 text-lg">
                <FaEnvelope />
              </div>
              <div className="overflow-hidden">
                <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                <p className="text-xs md:text-sm font-semibold text-gray-200 truncate">alim.210125@s.pust.ac.bd</p>
              </div>
            </div>

            {/* Phone Box */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/40 border border-white/5 hover:bg-gray-800/70 hover:scale-[1.02] transition-all duration-300">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-green-500/20 rounded-full text-green-500 text-lg">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Call Me</p>
                <p className="text-xs md:text-sm font-semibold text-gray-200">+880 1791 723700</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-6 border-t border-white/10 mt-auto">
          <p className="text-gray-500 text-[10px] mb-4 uppercase tracking-[3px] font-black">Find Me On</p>
          <div className="flex gap-3 md:gap-4">
            {[
              { icon: <FaGithub />, link: "https://github.com/ALIM23700", color: "hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]" },
              { icon: <FaLinkedin />, link: "#", color: "hover:bg-blue-600 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]" },
              { icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-700 hover:text-white hover:shadow-[0_0_15px_rgba(29,78,216,0.5)]" },
              { icon: <FaWhatsapp />, link: "https://wa.me/01791723700", color: "hover:bg-green-500 hover:text-white hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg md:text-xl transition-all duration-300 ${social.color}`}
                whileHover={{ y: -8, scale: 1.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Form with Hover/Focus Effects */}
      <motion.form
        className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-3xl backdrop-blur-sm h-full flex flex-col hover:border-blue-500/30 transition-all duration-500"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="space-y-4 md:space-y-5 flex-grow">
          <div className="group space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-blue-500 transition-colors">Full Name</label>
            <input
              type="text"
              placeholder="Abdul Alim"
              className="w-full p-3 md:p-4 rounded-xl bg-gray-900/60 border border-white/10 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm text-gray-200"
            />
          </div>
          <div className="group space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-blue-500 transition-colors">Email Address</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full p-3 md:p-4 rounded-xl bg-gray-900/60 border border-white/10 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm text-gray-200"
            />
          </div>
          <div className="group space-y-1 flex-grow flex flex-col">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-blue-500 transition-colors">Your Message</label>
            <textarea
              rows={4} 
              placeholder="Tell me about your project..."
              className="w-full p-3 md:p-4 rounded-xl bg-gray-900/60 border border-white/10 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-sm text-gray-200 flex-grow"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          className="w-full mt-6 bg-blue-600 hover:bg-blue-500 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg shadow-xl shadow-blue-900/20 text-white relative overflow-hidden group"
          whileHover={{ y: -3, shadow: "0px 10px 20px rgba(37, 99, 235, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Send Message</span>
          {/* Button Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </motion.button>
      </motion.form>

    </div>
  </div>
</section>
    </main>
  );
}