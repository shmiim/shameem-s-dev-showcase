import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(to bottom, hsl(197, 66%, 49%), transparent)" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2.5 md:left-6.5 top-6 w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: exp.isWhatsApp ? "hsl(142, 70%, 49%)" : "hsl(197, 66%, 49%)",
                    background: exp.isWhatsApp ? "hsl(142, 70%, 49%)" : "hsl(197, 66%, 49%)",
                  }}
                />

                <div
                  className={`glass rounded-xl p-6 card-shadow gradient-border ${
                    exp.isWhatsApp ? "border-l-2" : ""
                  }`}
                  style={exp.isWhatsApp ? { borderLeftColor: "hsl(142, 70%, 49%)" } : {}}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-sora font-bold text-lg text-foreground">{exp.company}</h3>
                    {exp.isWhatsApp && (
                      <FaWhatsapp className="text-green-400" />
                    )}
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-400 border border-teal-500/30">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-primary text-sm font-medium">{exp.role}</p>
                  <p className="text-muted-foreground text-xs mb-4">{exp.duration}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
