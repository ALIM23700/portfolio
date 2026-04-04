"use client";

import { FaFacebookF, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contactpage = () => {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-900 text-white selection:bg-blue-500/30">
      <section className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in duration-1000">
        
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-lg mx-auto">
            Have a question or want to work together? Feel free to reach out. I'm always open to discussing new projects.
          </p>
        </div>

        {/* Contact Info & Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          
          {/* Direct Contact */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-6">
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-500">
                  <FaEnvelope />
                </div>
                <p className="text-sm md:text-base break-all">alim.210125@s.pust.ac.bd</p>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-green-600/20 p-3 rounded-lg text-green-500">
                  <FaPhoneAlt />
                </div>
                <p className="text-sm md:text-base">01791723700</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-gray-400 mb-4 font-medium text-sm uppercase tracking-widest">Follow Me</p>
              <div className="flex gap-4 text-2xl">
                <a href="https://github.com/ALIM23700" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-1">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-all transform hover:-translate-y-1">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/share/18KJNnkBvf/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-all transform hover:-translate-y-1">
                  <FaFacebookF />
                </a>
                <a href="https://wa.me/01791723700" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-500 transition-all transform hover:-translate-y-1">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col gap-5 shadow-2xl">
            <div>
              <label className="text-sm text-gray-400 mb-2 block font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            
            <div>
              <label className="text-sm text-gray-400 mb-2 block font-medium">Email Address</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block font-medium">Message</label>
              <textarea
                placeholder="How can I help you?"
                className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all rounded-lg py-4 font-bold text-white active:scale-95"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>
    </main>
  );
};

export default Contactpage;