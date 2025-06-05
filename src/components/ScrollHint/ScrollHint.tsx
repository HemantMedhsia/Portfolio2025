import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollHint: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible ? (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-sm tracking-widest uppercase md:hidden"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      scroll to explore ↧
    </motion.div>
  ) : null;
};

export default ScrollHint;
