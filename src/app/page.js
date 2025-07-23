import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ServiceSection from "./components/ServiceSection";
import MySkills from "./components/MySkills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <section id="home" className="scroll-mt-28"><HeroSection /></section>
        <AchievementsSection />
        <ServiceSection/>
        <section id="skills" className="scroll-mt-18"><MySkills /></section>
        <section id="about" className="scroll-mt-20"><AboutSection /></section>
        <section id="projects" className="scroll-mt-20"><ProjectsSection /></section>
        <section id="contact" className="scroll-mt-18"><EmailSection /></section>
      </div>
      <Footer />
    </main>
  );
}
