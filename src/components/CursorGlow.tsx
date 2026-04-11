import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]"
        style={{ background: "hsl(197, 66%, 49%)" }}
        animate={{ x: pos.x - 8, y: pos.y - 8 }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998]"
        style={{
          background: "radial-gradient(circle, hsla(197, 66%, 49%, 0.3) 0%, transparent 70%)",
        }}
        animate={{ x: pos.x - 16, y: pos.y - 16 }}
        transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.8 }}
      />
    </>
  );
};

export default CursorGlow;
