"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Contactpage = () => {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-900 text-white">

      <motion.section
        className="max-w-4xl mx-auto px-6 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h1>

          <motion.div
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Info Box */}
          <motion.div
            className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >

            <h3 className="text-2xl font-bold">Contact Information</h3>

            {/* Email */}
            <motion.div
              className="flex items-center gap-4 p-3 rounded-xl"
              whileHover={{
                scale: 1.04,
                y: -3,
                backgroundColor: "rgba(59,130,246,0.1)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <FaEnvelope className="text-blue-500 text-xl" />
              <p className="text-sm break-all">alim.210125@s.pust.ac.bd</p>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-center gap-4 p-3 rounded-xl"
              whileHover={{
                scale: 1.04,
                y: -3,
                backgroundColor: "rgba(34,197,94,0.1)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <FaPhoneAlt className="text-green-500 text-xl" />
              <p>01791723700</p>
            </motion.div>

            {/* Social */}
            <div className="pt-4">
              <p className="text-gray-400 text-sm mb-3">Follow Me</p>

              <div className="flex gap-4 text-2xl">

                <motion.a
                  href="https://github.com/ALIM23700"
                  target="_blank"
                  whileHover={{ scale: 1.25, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.25, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaLinkedin />
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.25, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaFacebookF />
                </motion.a>

                <motion.a
                  href="https://wa.me/01791723700"
                  whileHover={{ scale: 1.25, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaWhatsapp />
                </motion.a>

              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-5"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >

            <motion.input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-white/10 outline-none"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            <motion.input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-white/10 outline-none"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            <motion.textarea
              rows={4}
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-white/10 outline-none"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            <motion.button
              type="submit"
              className="w-full bg-blue-600 py-4 rounded-lg font-bold"
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 10px 25px rgba(59,130,246,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              Send Message
            </motion.button>

          </motion.form>

        </div>
      </motion.section>
    </main>
  );
};

export default Contactpage;