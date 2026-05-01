"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-[#0b0f19] min-h-screen text-white selection:bg-blue-500/30 overflow-hidden">
      
      <motion.section
        className="max-w-6xl mx-auto px-6 py-32 md:py-48"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >

        {/* Heading Section - স্লাইড হবে উপর থেকে ধীরে */}
        <motion.div
          className="text-center mb-20"
          variants={{
            hidden: { opacity: 0, y: -50 },
            show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } }
          }}
        >
          <h1 className="text-4xl md:text-7xl font-extrabold mb-4 tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h1>
          <motion.div
            className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            variants={{
              hidden: { width: 0 },
              show: { width: 96, transition: { duration: 2, delay: 0.5 } }
            }}
          />
        </motion.div>

        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">

          {/* Left Side: Image with Glow - স্লাইড হবে বাম থেকে */}
          <motion.div
            className="relative group flex-shrink-0"
            variants={{
              hidden: { opacity: 0, x: -100 },
              show: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 2, ease: [0.22, 1, 0.36, 1] } 
              }
            }}
          >
            {/* Animated Glow behind the image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-10 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">
              <motion.img
                src="/final.jpg"
                alt="Abdul Alim"
                className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Right Side: Text & Stats - একটার পর একটা স্লাইড হবে নিচ থেকে */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-8"
            variants={{
              hidden: { opacity: 0 },
              show: { 
                opacity: 1, 
                transition: { 
                  staggerChildren: 0.7, // প্রতিটি প্যারার মাঝে গ্যাপ
                  delayChildren: 0.3 
                } 
              }
            }}
          >
            {/* Intro Text */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 1.5 } }
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
                Who am I?
              </h2>
              <p className="text-gray-200 text-xl md:text-2xl font-medium leading-relaxed">
                Hello! I’m <span className="text-white border-b-2 border-blue-600/30">Abdul Alim</span>, a dedicated <br className="hidden md:block" />
                <span className="text-blue-500">MERN Stack Web Developer</span>.
              </p>
            </motion.div>

            {/* Tech Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 1.8 } }
              }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl hover:text-gray-300 transition-colors"
            >
              I specialize in building responsive, modern, and high-performance applications using React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and TypeScript.
            </motion.p>

            {/* Stats Cards with Hover Effect */}
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1, transition: { duration: 1.5 } }
              }}
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all duration-500 group shadow-lg cursor-default">
                <h4 className="text-blue-500 font-black text-2xl md:text-3xl group-hover:scale-105 transition-transform">4th Year</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">CSE Student</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all duration-500 group shadow-lg cursor-default">
                <h4 className="text-blue-500 font-black text-2xl md:text-3xl group-hover:scale-105 transition-transform">MERN</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Full Stack Focus</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;