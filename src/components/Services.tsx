import { motion } from "framer-motion";
import { Code2, Sparkles, LayoutDashboard, ShieldCheck, Rocket, Network, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end MERN applications from MVP to production-ready architecture.",
    icon: Code2,
    color: "#2A9FD6"
  },
  {
    title: "AI Automation",
    description: "Integrating intelligent LLMs, prompt engineering, and conversational AI workflows.",
    icon: Sparkles,
    color: "#2A9FD6"
  },
  {
    title: "SaaS Product Build",
    description: "Complete scalable SaaS products with auth, dashboard interfaces, and billing architecture.",
    icon: LayoutDashboard,
    color: "#2A9FD6"
  },
  {
    title: "UX Audit & QA",
    description: "In-depth UX reviews, bug tracking, and detailed competitor benchmarking.",
    icon: ShieldCheck,
    color: "#2A9FD6"
  },
  {
    title: "Landing Pages",
    description: "High-converting, premium animated landing pages with Framer Motion and modern UI.",
    icon: Rocket,
    color: "#2A9FD6"
  },
  {
    title: "API Integration",
    description: "Seamless third-party webhook integrations, payment gateways, and data syncing.",
    icon: Network,
    color: "#2A9FD6"
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-[#050505] py-24 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2A9FD6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 text-white">
            Services I Offer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Clean, scalable, and business-focused digital solutions.
          </p>
          <div className="w-16 h-1 bg-[#2A9FD6] rounded-full mx-auto" />
        </motion.div>

        {/* Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-[#2A9FD6]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                
                {/* Glowing Icon Container (only animate icon on hover) */}
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#2A9FD6]/10 flex items-center justify-center border border-white/5 transition-colors duration-300 group-hover:bg-[#2A9FD6]/20">
                  <service.icon className="w-6 h-6 text-[#2A9FD6] transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(42,159,214,0.8)]" />
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 font-sora">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* CTA */}
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-sm font-semibold text-[#2A9FD6] transition-colors duration-300 group-hover:text-white"
                  >
                    Let's Build 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
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
