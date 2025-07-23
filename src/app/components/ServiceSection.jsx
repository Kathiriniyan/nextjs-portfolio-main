import { FaLaptopCode, FaMobileAlt, FaChartLine, FaObjectGroup } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-3xl mb-4" />,
    desc: "Build extremely responsive web apps with the latest technologies.",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt className="text-3xl mb-4" />,
    desc: "Develops well designed, user-friendly and interactive mobile apps for Android.",
  },
  {
    title: "Business Strategy",
    icon: <FaChartLine className="text-3xl mb-4" />,
    desc: "Develops business strategies and plans to achieve the desired results via digital.",
  },
  {
    title: "UI/UX Design",
    icon: <FaObjectGroup className="text-3xl mb-4" />,
    desc: "Understanding user empathy and creates designs that gives meaningful experiences.",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-12 px-4">
      <p className="text-yellow-400 font-semibold mb-2 tracking-widest uppercase text-sm">Services</p>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">What I do</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className={`
              group cursor-pointer bg-white/5 backdrop-blur-sm text-white rounded-2xl p-7
              flex flex-col items-start border border-white/10 shadow
              transition-all duration-700
              hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500
              hover:text-[#121212] hover:shadow-lg hover:border-yellow-400/60
              hover:scale-105
            `}
            style={{ transitionProperty: "all, background, color, border, transform" }}
          >
            <span className={`
              transition-colors duration-700
              group-hover:text-[#121212] text-yellow-400
            `}>
              {service.icon}
            </span>
            <h3 className="font-bold text-xl mb-2 mt-2">{service.title}</h3>
            <p className="text-sm opacity-80">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
