"use client";

import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaGithub, 
  FaLinkedin 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-300 py-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

        {/* About Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
            Abdul Alim
          </h3>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            MERN Stack Web Developer specializing in building high-performance 
            web applications with React, Next.js, and Node.js.
          </p>
        </div>

        {/* Quick Links - Optimized with Next.js Link */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
            </li>
            <li>
              <Link href="/skills" className="hover:text-blue-500 transition-colors">Skills</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-4">Connect with me</h3>
          <div className="flex gap-5 text-2xl">
            <a 
              href="https://github.com/ALIM23700" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-transform hover:-translate-y-1"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/your-linkedin/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition-transform hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://www.facebook.com/share/18KJNnkBvf/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition-transform hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-500 transition-transform hover:-translate-y-1"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://wa.me/01791723700" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-green-500 transition-transform hover:-translate-y-1"
            >
              <FaWhatsapp />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500 italic">
            Let's build something amazing together.
          </p>
        </div>

      </div>

     
      <div className="mt-12 border-t border-gray-800/50 pt-8 text-center">
        <p className="text-gray-500 text-sm tracking-wide">
          &copy; {new Date().getFullYear()} <span className="text-gray-400 font-medium">Abdul Alim</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;