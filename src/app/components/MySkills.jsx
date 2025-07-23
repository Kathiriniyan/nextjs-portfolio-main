import {
  FaReact, FaNodeJs, FaFigma, FaGithub, FaJava,
} from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiExpress, SiMysql, SiAndroidstudio } from "react-icons/si";

const skills = [
  { label: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { label: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
  { label: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
  { label: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { label: "JavaScript", icon: <SiJavascript className="text-yellow-300 text-4xl" /> },
  { label: "Figma", icon: <FaFigma className="text-pink-400 text-4xl" /> },
  { label: "GitHub", icon: <FaGithub className="text-gray-300 text-4xl" /> },
  { label: "Java", icon: <FaJava className="text-red-400 text-4xl" /> },
  { label: "SQL", icon: <SiMysql className="text-blue-400 text-4xl" /> },
  { label: "Android Studio", icon: <SiAndroidstudio className="text-green-400 text-4xl" /> },
];

const MySkills = () => (
  <section className="py-16 px-4">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-white text-center">My Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
      {skills.map((skill) => (
        <div
          key={skill.label}
          className="bg-white/5 rounded-2xl flex flex-col items-center justify-center shadow-lg py-8 transition-all duration-500 hover:scale-110 hover:shadow-2xl group cursor-pointer"
        >
          {skill.icon}
          <span className="mt-4 text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors duration-500">{skill.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default MySkills;
