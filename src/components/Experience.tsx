import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2A9FD6]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-sora font-bold mb-4 text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A9FD6] to-teal-400">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-[#2A9FD6] rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Glowing Timeline Line */}
          <div
            className="absolute left-[38px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px]"
            style={{
              background: "linear-gradient(to bottom, transparent, #2A9FD6 15%, #2A9FD6 85%, transparent)",
              boxShadow: "0 0 10px rgba(42, 159, 214, 0.5)"
            }}
          />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node / Glowing Dot */}
                <div className="absolute left-[34px] md:left-1/2 md:-ml-[5px] top-8 md:top-10 w-[10px] h-[10px] bg-[#2A9FD6] rounded-full shadow-[0_0_15px_#2A9FD6] z-20 border-2 border-[#050505]" />

                {/* Content Card container */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-16" : "md:pl-16"
                }`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="group glass relative rounded-2xl p-6 md:p-8 border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl hover:border-[#2A9FD6]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(42,159,214,0.15)]"
                  >
                    {/* Inner top glow on hover */}
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#2A9FD6]/0 to-transparent group-hover:via-[#2A9FD6]/50 transition-all duration-500 rounded-t-2xl" />

                    <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
                      {/* Logo Box */}
                      {exp.logo ? (
                        <div className="w-16 h-16 shrink-0 rounded-xl bg-white flex items-center justify-center p-1 overflow-hidden border border-white/10 group-hover:border-[#2A9FD6]/50 group-hover:shadow-[0_0_15px_rgba(42,159,214,0.3)] transition-all duration-300">
                          <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 shrink-0 rounded-xl bg-gradient-to-br from-[#2A9FD6]/20 to-teal-400/20 flex items-center justify-center border border-white/10 group-hover:border-[#2A9FD6]/50 transition-all duration-300">
                          <span className="text-2xl font-bold text-white">{exp.company.charAt(0)}</span>
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="font-sora font-bold text-xl text-white">{exp.company}</h3>
                          {exp.isWhatsApp && (
                            <FaWhatsapp className="text-[#25D366] text-xl" />
                          )}
                        </div>
                        <p className="text-[#2A9FD6] font-medium text-base mb-2">{exp.role}</p>
                        <div className="flex items-center gap-3 text-xs font-semibold">
                          <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                            {exp.duration}
                          </span>
                          {exp.type && (
                            <span className="px-3 py-1 rounded-full bg-[#2A9FD6]/10 text-[#2A9FD6] border border-[#2A9FD6]/20">
                              {exp.type}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">Achievements & Impact</h4>
                      <ul className="space-y-3">
                        {exp.points.map((point, j) => (
                          <li key={j} className="text-gray-400 text-sm flex gap-3 leading-relaxed">
                            <span className="text-[#2A9FD6] mt-1 shrink-0">✦</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.tech && (
                      <div className="pt-5 border-t border-white/5">
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, j) => (
                            <span key={j} className="text-xs font-medium px-3 py-1.5 rounded-md bg-white/5 text-gray-300 border border-white/5 group-hover:border-white/10 transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
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
