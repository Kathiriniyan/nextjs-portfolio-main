import Image from "next/image";
import React from "react";

const educations = [
  {
    year: "2024–2025",
    title: "Higher National Diploma in Software Engineering",
    school: "Cardiff Metropolitan University - UK",
    logo: "/images/cardif.png",
  },
  {
    year: "2023",
    title: "Diploma in English and IT",
    school: "ICBT",
    logo: "/images/icbt.png",
  },
  {
    year: "2012–2021",
    title: "Grade 06 to Advanced Level",
    school: "Jaffna Hindu College",
    logo: "/images/jhc.png",
  },
];

const AboutSection = () => {
  return (
    <section className="py-10 px-2 sm:px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-white text-center">
        My Education
      </h2>
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 sm:left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400/60 to-yellow-400/0 rounded-full pointer-events-none" />
        <div className="flex flex-col gap-8 sm:gap-12">
          {educations.map((edu, idx) => (
            <div key={idx} className="relative flex items-start group">
              {/* Dot */}
              <div className="z-10 flex flex-col items-center pt-1">
                <span
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-4 border-yellow-400
                  group-hover:scale-125 group-hover:bg-yellow-400 transition-all duration-300 shadow-lg`}
                ></span>
              </div>
              {/* Card */}
              <div className="ml-6 sm:ml-8 bg-[#1b1d24] rounded-2xl shadow-xl flex flex-col sm:flex-row items-center p-4 sm:p-6 flex-1 group transition-all duration-500 hover:scale-[1.03] hover:border-yellow-400/50 border border-transparent">
                <div className="flex items-center justify-center bg-[#21232b] rounded-xl w-14 h-14 sm:w-20 sm:h-20 min-w-[56px] min-h-[56px] sm:min-w-[80px] sm:min-h-[80px] shadow-lg overflow-hidden">
                  <Image src={edu.logo} alt={edu.school} width={50} height={50} className="object-contain" />
                </div>
                <div className="sm:ml-6 mt-2 sm:mt-0 text-center sm:text-left">
                  <span className="bg-yellow-400/90 text-[#121212] text-xs font-bold px-2 sm:px-3 py-1 rounded-md mb-2 inline-block">
                    {edu.year}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">{edu.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300">{edu.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;