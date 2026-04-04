"use client";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"; 
import Link from "next/link"; 

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-900 text-white selection:bg-blue-500/30">

      <section className="flex flex-col items-center justify-center text-center pt-28 pb-32 px-4 animate-in fade-in duration-1000">
        
        {/* Status Badge */}
        <div className="mb-6 px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
          Available for Opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Abdul Alim
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
          <span className="text-white">Full-Stack Developer</span> specializing in 
          high-performance web applications using the <span className="text-blue-400">MERN Stack</span> & Next.js.
        </p>

        {/* Social Links - Facebook Back Again */}
        <div className="flex gap-8 mb-12 text-3xl">
          <a href="https://github.com/ALIM23700" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-1" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-actual-link" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-blue-500 transition-all transform hover:-translate-y-1" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/share/18KJNnkBvf/" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-blue-600 transition-all transform hover:-translate-y-1" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5">
          <Link href="/projects" 
            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all rounded-lg text-white font-semibold">
            View My Work
          </Link>
          <Link href="/contact" 
            className="px-10 py-4 border border-gray-600 hover:border-white hover:bg-white/5 transition-all rounded-lg text-white font-semibold">
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Page;