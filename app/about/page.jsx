"use client";

import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-slate-900 min-h-screen text-white selection:bg-blue-500/30">
      <section className="max-w-6xl mx-auto px-6 py-32 animate-in fade-in duration-1000">
        
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            About <span className="text-blue-500 text-glow">Me</span>
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Profile & Summary */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
          
          {/* Profile Image with modern shadow/border */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img
                src="/final.jpg"
                alt="Abdul Alim"
                className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-2 border-white/10 shadow-2xl transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>

          {/* Summary Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400">
              Who am I?
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Hello! I’m <span className="font-semibold text-white">Abdul Alim</span>, a dedicated 
              <span className="text-white"> MERN Stack Web Developer</span> with a passion for building 
              responsive and modern web applications. 
            </p>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              I specialize in creating high-performance, scalable web solutions using 
              <span className="text-blue-400/80"> React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, </span> 
              and <span className="text-blue-400/80">TypeScript</span>. I focus on writing clean, 
              maintainable code while delivering seamless user experiences.
            </p>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              I enjoy transforming complex ideas into functional applications and am constantly 
              exploring new technologies to stay at the forefront of development. My goal is to 
              contribute to projects that solve real-world problems.
            </p>

            {/* Quick Stats/Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-blue-500 font-bold text-xl">4th Year</h4>
                <p className="text-sm text-gray-500">CSE Student</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-blue-500 font-bold text-xl">MERN</h4>
                <p className="text-sm text-gray-500">Full Stack Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;