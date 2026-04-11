import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="grain-overlay">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="text-center py-8 text-muted-foreground text-xs">
        © 2025 Muhammed Shameem K. Built with passion.
      </footer>
    </div>
  );
};

export default Index;
