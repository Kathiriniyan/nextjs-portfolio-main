"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Hospital Management System",
    description: "A PHP-based platform for hospitals: online appointment booking, billing, and patient record management with secure roles.",
    details: "Built using PHP, MySQL, AJAX, and jQuery. Features real-time appointment management, billing automation, and a role-based access system for doctors, nurses, and patients. Enhanced with responsive UI for both staff and patients.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kathiriniyan/CareCompass-Hospital-Web.git",
    previewUrl: "/",
    tech: ["PHP", "MySQL", "AJAX", "jQuery"]
  },
  {
    id: 2,
    title: "Cycle Rental Application",
    description: "Android app for renting and tracking cycles in real time, with QR code booking and user profile management.",
    details: "Developed in Java (Android Studio) with SQLite backend. Users can search, reserve, and unlock bikes using QR codes. Rental history, pricing, and location integration included. Figma used for UI prototyping.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Kathiriniyan/CityCycleRental",
    previewUrl: "/", 
    tech: ["Java", "Android Studio", "SQLite", "Figma"]
  },
  {
    id: 3,
    title: "LifeLine – Medical Crowdfunding",
    description: "A MERN stack website for medical crowdfunding, with secure login, real-time payments, admin approval, and a modern UI.",
    details: "Full-featured web app built with MongoDB, Express.js, React, Node.js, and Tailwind CSS. Key features include Google login, campaign management, real-time fundraising progress, and email notifications. Built for Sri Lankan users.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kathiriniyan/life-line",
    previewUrl: "/",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"]
  },
  {
    id: 4,
    title: "NextJS Portfolio Website",
    description: "A personal portfolio built in Next.js with animated sections, responsive design, and elegant glassmorphism.",
    details: "Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations. Features include a custom hero section, dynamic skills and projects, responsive navbar, and theme toggling.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kathiriniyan/nextjs-portfolio-main.git",
    previewUrl: "/",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"]
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-20 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              imgUrl={project.image}  
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;