import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, typingRoles, codeSnippet } from "@/lib/data";
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

const CodeBlock = () => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < codeSnippet.length) {
        setDisplayed(codeSnippet.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-xl p-5 card-shadow font-mono text-xs md:text-sm leading-relaxed overflow-hidden">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
      </div>
      <pre className="text-muted-foreground whitespace-pre-wrap">
        {displayed}
        {!done && <span className="animate-typing-cursor text-primary">|</span>}
      </pre>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-72 h-72 rounded-full animate-float-1 opacity-[0.35]"
          style={{
            background: "radial-gradient(circle, hsl(197, 66%, 49%), transparent)",
            filter: "blur(80px)",
            top: "10%",
            left: "15%",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full animate-float-2 opacity-[0.25]"
          style={{
            background: "radial-gradient(circle, hsl(180, 60%, 40%), transparent)",
            filter: "blur(80px)",
            top: "50%",
            right: "10%",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full animate-float-3 opacity-[0.20]"
          style={{
            background: "radial-gradient(circle, hsl(270, 50%, 50%), transparent)",
            filter: "blur(80px)",
            bottom: "10%",
            left: "40%",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        {/* Left */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-muted-foreground text-sm md:text-base mb-4"
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
            className="text-xl md:text-2xl font-jakarta font-medium mb-8 h-8"
          >
            <TypingSubtitle />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity cursor-none"
            >
              <ArrowDown size={16} />
              View Projects
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors cursor-none"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right - Code block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block"
        >
          <CodeBlock />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
