"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaFileDownload } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-black/80 border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-black text-white hover:text-blue-500 transition-all tracking-tighter"
        >
          ABDUL <span className="text-blue-600">ALIM</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-[15px] font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative transition-colors duration-300 hover:text-blue-500 ${
                    pathname === link.href ? "text-blue-500" : "text-gray-300"
                  }`}
                >
                  {link.name}

                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CV Download (FIXED FROM YOUR ORIGINAL LINK) */}
          <a
            href="https://drive.google.com/uc?export=download&id=1Qy_L2P2W9hVaPNMoE9QHO9JbLqhc4D6g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full transition-all text-sm font-semibold shadow-lg shadow-blue-600/20 active:scale-95"
          >
            <FaFileDownload /> CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none active:scale-90"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-8 gap-6 text-lg font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathname === link.href ? "text-blue-500" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Mobile CV Download (FIXED) */}
          <li>
            <a
              href="https://drive.google.com/uc?export=download&id=1Qy_L2P2W9hVaPNMoE9QHO9JbLqhc4D6g"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-full text-sm font-bold"
              onClick={() => setIsOpen(false)}
            >
              <FaFileDownload /> Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;