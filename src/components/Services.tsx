import { motion } from "framer-motion";
import { Code2, Bot, AppWindow, Search, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end MERN apps — React frontends, Node/Express APIs, MongoDB databases. From MVP to production-ready.",
    icon: Code2,
  },
  {
    title: "AI-Powered Feature Integration",
    description: "Integrating LLMs, prompt engineering, and AI workflows into your product. Experience with Anthropic API and conversational UIs.",
    icon: Bot,
  },
  {
    title: "SaaS Product Development",
    description: "Building scalable SaaS products with auth, dashboards, billing-ready architecture — fast and clean.",
    icon: AppWindow,
  },
  {
    title: "UX Audit & QA",
    description: "In-depth UX reviews, bug reports, and competitor benchmarking to sharpen your product's edge.",
    icon: Search,
  }
];

const Services = () => {
  return (
    <section id="services" className="relative bg-[#0a0a0a] section-padding overflow-hidden">
      {/* Animated Background Blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2A9FD6]/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-3xl font-bold font-sora mb-4">
            What I Bring to the Table
          </h2>
          <div className="w-20 h-1 bg-[#2A9FD6] mx-auto rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-2xl relative group overflow-hidden border border-white/5 hover:border-[#2A9FD6]/50 transition-all duration-300 card-shadow hover:shadow-[0_8px_32px_rgba(42,159,214,0.2)]"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2A9FD6]/0 to-transparent group-hover:via-[#2A9FD6]/50 transition-all duration-500" />
              
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-[#2A9FD6]/10 flex items-center justify-center mb-6 text-[#2A9FD6] group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-sora">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 flex-grow line-clamp-3">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-flex items-center text-sm font-medium text-[#2A9FD6] group-hover:text-white transition-colors duration-300">
                    Let's build <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
