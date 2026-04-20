import { useRef, useState, MouseEvent } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/data";

const TiltCard = ({
  children,
  isWhatsApp,
  className,
}: {
  children: React.ReactNode;
  isWhatsApp?: boolean;
  className?: string;
}) => {
  const [transform, setTransform] = useState("");
  const [shadow, setShadow] = useState("card-shadow");

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(600px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`);
    setShadow(isWhatsApp ? "card-shadow-whatsapp" : "card-shadow-hover");
  };

  const handleLeave = () => {
    setTransform("");
    setShadow("card-shadow");
  };

  return (
    <div
      className={`transition-all duration-300 ${shadow} ${className}`}
      style={{ transform }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
};

const badgeStyles: Record<string, string> = {
  Featured: "bg-primary/20 text-primary border border-primary/40",
  Freelance: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  Product: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
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
        >
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <TiltCard
                isWhatsApp={(project as any).isWhatsApp}
                className={`flex flex-col glass rounded-xl overflow-hidden gradient-border h-full ${
                  (project as any).isWhatsApp ? "border-l-2" : ""
                } ${
                  (project as any).featured
                    ? "ring-1 ring-primary/30 shadow-[0_0_24px_4px_rgba(56,189,248,0.12)]"
                    : ""
                }`}
              >
                {/* @ts-ignore */}
                {(project as any).image && (
                  <div className="w-full shrink-0 h-48 sm:h-52 overflow-hidden relative bg-secondary/30 mt-px border-b border-white/5">
                    <img 
                      src={(project as any).image} 
                      alt={project.name}
                      className="absolute left-0 w-full object-cover object-top h-[125%] -top-[12%]"
                    />
                  </div>
                )}
                <div
                  className="p-6 flex flex-col flex-1"
                  style={(project as any).isWhatsApp ? { borderLeft: "2px solid hsl(142, 70%, 49%)" } : {}}
                >
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <h3 className="font-sora font-bold text-foreground">{project.name}</h3>
                    {project.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${getBadgeStyle(project.badge)}`}>
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-secondary text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 flex-wrap">
                    {(project as any).link && (
                      <a
                        href={(project as any).link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={(project as any).github ?? personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm transition-colors ${
                        (project as any).link
                          ? "text-muted-foreground hover:text-primary"
                          : "text-primary hover:underline"
                      }`}
                    >
                      <ExternalLink size={14} />
                      GitHub
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
