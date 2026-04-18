import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, typingRoles } from "@/lib/data";
import { ArrowDown, Download } from "lucide-react";

const TypingSubtitle = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingRoles[roleIndex];
    const timeout = deleting ? 30 : 60;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % typingRoles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, timeout);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-primary">
      {typingRoles[roleIndex].slice(0, charIndex)}
      <span className="animate-typing-cursor">|</span>
    </span>
  );
};



const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Muhammed Shameem K - Background" 
          className="w-full h-full object-cover object-center lg:object-[20%_center]"
        />
        {/* Gradient Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 md:via-background/80 lg:via-background/50 to-transparent" />
        {/* Additional gradient for mobile legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent md:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-foreground/80 text-sm md:text-base mb-4 font-medium tracking-wide"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl font-jakarta font-medium mb-4 h-8 drop-shadow-xl"
          >
            <TypingSubtitle />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-foreground/80 text-sm md:text-base mb-8 max-w-lg leading-relaxed drop-shadow-xl"
          >
            I build modern, responsive, and user-focused web applications with React, Next.js, Node.js, and MongoDB.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <ArrowDown size={16} />
              View Projects
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors backdrop-blur-md bg-background/10"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
