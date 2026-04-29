import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

const badgeStyles: Record<string, string> = {
  Featured: "bg-primary/20 text-primary border border-primary/40",
  Freelance: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  Product: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
  "E-commerce": "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
};
const getBadgeStyle = (badge: string) =>
  badgeStyles[badge] ?? "bg-teal-500/20 text-teal-400 border border-teal-500/30";

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-sora font-bold mb-4">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of real products, freelance work, and production-focused platforms I built or improved.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {projects.map((project: any, i: number) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`group glass rounded-2xl overflow-hidden gradient-border flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } ${
                  project.featured
                    ? "ring-1 ring-primary/40 shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]"
                    : "hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
                } transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-secondary/30">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    {project.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${getBadgeStyle(project.badge)}`}>
                        {project.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-sora font-bold text-foreground mb-4">
                    {project.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Points */}
                  {project.impact && project.impact.length > 0 && (
                    <ul className="mb-8 space-y-2">
                      {project.impact.map((point: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t: string) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary/80 text-secondary-foreground border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 mt-auto flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github ?? personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
