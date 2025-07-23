"use client";
import React, { useEffect, useState } from "react";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

// Adjust the order to match your actual page section order!
const navLinks = [
  { title: "Home", path: "#home", icon: <FaHome /> },
  { title: "Skills", path: "#skills", icon: <FaCode /> },
  { title: "About", path: "#about", icon: <FaUser /> },
  { title: "Projects", path: "#projects", icon: <FaProjectDiagram /> },
  { title: "Contact", path: "#contact", icon: <FaEnvelope /> },
];

const sectionIds = ["home", "skills", "about", "projects", "contact"]; // Order must match!

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // You can tweak 120 to match your navbar height!
          if (rect.top <= 120) {
            current = sectionIds[i];
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(path.replace("#", ""));
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-2 py-1 shadow flex justify-around items-center">
      {navLinks.map((link) => (
        <a
          key={link.title}
          href={link.path}
          onClick={(e) => handleNavClick(e, link.path)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all
            ${
              active === link.path.replace("#", "")
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#121212] shadow"
                : "text-white hover:text-yellow-300"
            }`}
        >
          <span className="text-[15px]">{link.icon}</span>
          <span className="hidden sm:inline">{link.title}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
