import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";

const Counter = ({ value, inView }: { value: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = duration / value;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span className="text-3xl md:text-4xl font-sora font-bold text-primary">{count}</span>;
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">{personalInfo.bio}</p>
            <p className="text-muted-foreground mt-4">
              📍 {personalInfo.location}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-xl p-6 card-shadow text-center gradient-border"
              >
                <Counter value={stat.value} inView={inView} />
                <p className="text-muted-foreground text-xs mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
