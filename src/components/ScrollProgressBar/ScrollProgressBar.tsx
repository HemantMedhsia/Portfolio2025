import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgressBar: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-[4px] z-50 bg-gradient-to-r from-[#14b8a6] via-[#8b5cf6] to-[#ec4899] shadow-lg"
      style={{ width: `${scroll}%` }}
      initial={{ width: 0 }}
      animate={{ width: scroll + "%" }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    />
  );
};

export default ScrollProgressBar;
