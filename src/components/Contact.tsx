import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { icon: <Mail size={22} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Linkedin size={22} />, label: "LinkedIn", href: personalInfo.linkedin },
    { icon: <Github size={22} />, label: "GitHub", href: personalInfo.github },
  ];

  return (
    <section id="contact" className="section-padding relative">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-12 mx-auto" />
        </motion.div>

        <div className="space-y-4 mb-10">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-4 glass rounded-xl p-4 card-shadow hover:card-shadow-hover transition-all justify-center"
            >
              <span className="text-primary">{link.icon}</span>
              <span className="text-foreground font-medium text-sm md:text-base">{link.label}</span>
            </motion.a>
          ))}
        </div>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity card-shadow-hover"
        >
          <Send size={16} />
          Let's Connect
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
