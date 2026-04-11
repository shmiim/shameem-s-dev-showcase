import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/lib/data";
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPhp, SiMongodb, SiMysql,
  SiGit, SiGithub, SiVercel
} from "react-icons/si";
import { FaWhatsapp, FaRobot, FaLink, FaRocket } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  "PHP": <SiPhp />,
  "MongoDB": <SiMongodb />,
  "MySQL": <SiMysql />,
  "Git": <SiGit />,
  "GitHub": <SiGithub />,
  "CI/CD": <FaRocket />,
  "Vercel": <SiVercel />,
  "WhatsApp Business API": <FaWhatsapp />,
  "Chatbot Flow Design": <FaRobot />,
  "Webhook Integration": <FaLink />,
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass rounded-xl p-6 card-shadow"
              style={{ borderLeft: `3px solid ${cat.color}` }}
            >
              <h3 className="font-sora font-semibold text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.1 + skillIdx * 0.03,
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-light text-sm font-medium text-foreground hover:text-primary transition-colors cursor-none"
                  >
                    <span className="text-primary">{iconMap[skill]}</span>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
