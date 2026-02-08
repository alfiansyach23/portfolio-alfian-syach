import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 bg-white p-5 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")}
          className="cursor-pointer p-1 rounded-md transition-colors hover:bg-white-100 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512" 
            className="w-7 h-7 text-black-600 fill-current"
          >
            <path
              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 26.46a48 48 0 0 0-60.92 0L4.41 251.47a12 12 0 0 0-1.7 16.9l25.5 31.13a12 12 0 0 0 16.9 1.7L288 103.5l242.9 200.7a12 12 0 0 0 16.9-1.7l25.5-31.13a12 12 0 0 0-1.7-16.9z"
            />
          </svg>
        </motion.div>

        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li key={section} className="group" whileHover={{ scale: 1.1 }}>
              <button onClick={() => scrollToSection(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* RESUME DESKTOP */}
          <motion.a
            href="https://drive.google.com/file/d/1IY5xJFIqgBzD70q6F1tXmBd5pVGDI8vi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden relative lg:inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
              Resume <TbDownload size={16} />
            </span>
          </motion.a>

          {/* RESUME MOBILE */}
          <motion.a
            href="https://drive.google.com/file/d/1IY5xJFIqgBzD70q6F1tXmBd5pVGDI8vi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden p-2 border-2 border-black rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <TbDownload size={20} />
          </motion.a>

          {/* HAMBURGER */}
          <motion.button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.2 }}
          >
            {isOpen ? <HiX /> : <HiOutlineMenu />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-full w-full bg-white z-[60]"
          >
            <button className="absolute top-5 right-5 text-2xl" onClick={() => setIsOpen(false)}>
              <HiX />
            </button>
            <ul className="flex flex-col items-start ml-16 mt-28 h-full gap-y-6 font-semibold text-lg">
              {["about", "skills", "projects", "contact"].map((section) => (
                <li key={section} className="border-b w-4/5 pb-2">
                  <button onClick={() => scrollToSection(section)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

