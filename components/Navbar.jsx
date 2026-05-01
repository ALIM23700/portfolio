"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaFileDownload } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-black/80 border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-black text-white tracking-tighter"
        >
          ABDUL <span className="text-blue-600">ALIM</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">

          <ul className="flex items-center gap-8 text-[15px] font-medium">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className={`relative transition-colors duration-300 hover:text-blue-500 ${
                    pathname === link.href ? "text-blue-500" : "text-gray-300"
                  }`}
                >
                  {link.name}

                  {pathname === link.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CV Button */}
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1Qy_L2P2W9hVaPNMoE9QHO9JbLqhc4D6g"
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0px 10px 25px rgba(59,130,246,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload /> CV
          </motion.a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-8 gap-6 text-lg font-medium text-white">

              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      pathname === link.href ? "text-blue-500" : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}

              <motion.li whileHover={{ scale: 1.05 }}>
                <a
                  href="https://drive.google.com/uc?export=download&id=1Qy_L2P2W9hVaPNMoE9QHO9JbLqhc4D6g"
                  target="_blank"
                  className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-full text-sm font-bold"
                >
                  <FaFileDownload /> Download CV
                </a>
              </motion.li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;