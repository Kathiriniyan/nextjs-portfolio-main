"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SPOTLIGHT_RADIUS = 100; 

const HeroSection = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 }); 

  
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = "0101010101010101".split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouseMove);
    section?.addEventListener("mouseleave", () => setMouse({ x: -9999, y: -9999 }));

    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
      section?.removeEventListener("mouseleave", () => setMouse({ x: -9999, y: -9999 }));
    };
  }, []);

  
  const maskStyle = {
    WebkitMaskImage: `radial-gradient(${SPOTLIGHT_RADIUS}px at ${mouse.x}px ${mouse.y}px, white 70%, transparent 100%)`,
    maskImage: `radial-gradient(${SPOTLIGHT_RADIUS}px at ${mouse.x}px ${mouse.y}px, white 70%, transparent 100%)`,
    transition: "mask-image 0.15s, -webkit-mask-image 0.15s",
    pointerEvents: "none"
  };

  return (
    <section
      className="relative lg:py-16 overflow-hidden"
      ref={sectionRef}
      style={{ background: "#121212" }}
    >
      
      <canvas
        ref={canvasRef}
        width={typeof window !== "undefined" ? window.innerWidth : 1920}
        height={typeof window !== "undefined" ? window.innerHeight : 1080}
        style={{
          ...maskStyle,
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-12 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left"
        >
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
            Hello there!
          </p>

          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-white">{`{ "I'm" : `}</span>
            <span className="text-yellow-400">{`Kathir }` }</span>
            <br />
            <span className="text-yellow-400 text-4xl sm:text-5xl">a </span>
            <TypeAnimation
              sequence={[
                "Web Developer!",
                1000,
                "Mobile Developer!",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </h1>

          <p className="text-[#ADB7BE] text-sm sm:text-base mb-6 leading-relaxed max-w-xl">
            A passionate Software Engineer who strives for clean code and elegant
            design. Experienced in Web and Mobile development, and passionate
            about building impactful software.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="/#contact"
              className="px-6 py-3 rounded-md bg-gradient-to-br from-yellow-500 to-yellow-300 text-white hover:opacity-80"
            >
              Hire Me
            </a>
            <a
              href="/Kathiriniyan.pdf"
              className="px-1 py-1 rounded-md bg-gradient-to-br from-yellow-500 to-yellow-300 hover:bg-yellow-400 text-white"
            >
              <span className="block bg-[#121212] rounded-md px-5 py-2">
                Download CV
              </span>
            </a>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/kathiriniyan-balendran-5b79831b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Kathiriniyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 text-2xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-10 sm:mt-0 flex justify-center"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-md overflow-hidden shadow-lg flex items-center justify-center">
          
          <div className="absolute inset-0 z-0 rounded-md pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(251,191,36,0.28) 0%, rgba(18,18,18,0.02) 70%)",
              filter: "blur(8px)"
            }}
          />
          <Image
            src="/images/hero-image.png"
            alt="hero image"
            fill
            className="object-cover z-10"
          />
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
