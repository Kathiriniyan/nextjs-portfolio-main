"use client";
import React, { useState } from "react";
import { FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { title: "About", path: "#about", icon: <FaHome /> },
  { title: "Projects", path: "#projects", icon: <FaProjectDiagram /> },
  { title: "Contact", path: "#contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [active, setActive] = useState("About");

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-2 py-1 shadow flex justify-around items-center">
      {navLinks.map((link) => (
        <a
          key={link.title}
          href={link.path}
          onClick={() => setActive(link.title)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
            active === link.title
              ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#121212] shadow"
              : "text-white hover:text-yellow-300"
          }`}
        >
          <span className="text-[15px]">{link.icon}</span>
          <span>{link.title}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
