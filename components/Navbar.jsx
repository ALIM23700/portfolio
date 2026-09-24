"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaFileDownload } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", id: "home" },
  { name: "About", href: "/about", id: "about" },
  { name: "Skills", href: "/skills", id: "skills" },
  { name: "Projects", href: "/projects", id: "projects" },
  { name: "Experience & Education", href: "/experience", id: "experience" },
  { name: "Contact", href: "/contact", id: "contact" },
];

const sections = navLinks.map((link) => link.id);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const pathname = usePathname();

  // Scroll detection (home page section highlight + navbar background)
  useEffect(() => {
    const update = (scrollTop) => {
      setScrolled(scrollTop > 20);

      if (pathname !== "/") {
        return;
      }

      let current = "home";
      let closest = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);

        if (!el) {
          return;
        }

        const distance = Math.abs(el.getBoundingClientRect().top);

        if (distance < closest) {
          closest = distance;
          current = id;
        }
      });

      setActiveSection(current);
    };

    const onScroll = (e) => {
      const target = e.target;

      if (target === document) {
        update(window.scrollY);
      } else if (
        target instanceof HTMLElement &&
        target.tagName === "MAIN"
      ) {
        update(target.scrollTop);
      }
    };

    document.addEventListener("scroll", onScroll, true);

    // Initial run
    const main = document.querySelector("main");
    update(Math.max(window.scrollY, main ? main.scrollTop : 0));

    return () => {
      document.removeEventListener("scroll", onScroll, true);
    };
  }, [pathname]);

  // Active link
  const isActive = (link) => {
    if (pathname === "/") {
      return activeSection === link.id;
    }

    return pathname === link.href || pathname.startsWith(link.href + "/");
  };

  // Home page e thakle click korle smooth scroll, onno page theke click korle normal navigation
  const handleNavClick = (e, link) => {
    setIsOpen(false);

    if (pathname === "/") {
      e.preventDefault();
      setActiveSection(link.id);

      document
        .getElementById(link.id)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f19]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, navLinks[0])}
            className="text-2xl font-bold text-white"
          >
            Abdul<span className="text-blue-500"> Alim</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(link)
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}

                {isActive(link) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}

            {/* CV Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1hwKiBwAX52Xv6E6_HEWk5r9NkLligIM7"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            >
              <FaFileDownload />
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0b0f19]/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="px-6 py-5 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block py-2 text-base font-medium transition-colors duration-300 ${
                    isActive(link)
                      ? "text-blue-500"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CV Button */}
              <a
                href="https://drive.google.com/uc?export=download&id=1n-Gl31N4_waCk7AsPaxftbyqsO1dc3Hi"
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
              >
                <FaFileDownload />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;