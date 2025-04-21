// components/About/IntroHeading.tsx
import { motion, useTransform } from "framer-motion";
import React from "react";

interface IntroHeadingProps {
    scrollYProgress: any;
}

const IntroHeading: React.FC<IntroHeadingProps> = ({ scrollYProgress }) => {
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <motion.h1
            className="absolute h-screen flex flex-col justify-center text-center items-center top-0 text-[30vw] text-white/6 font-extrabold tracking-widest z-0 select-none"
            style={{ y }}
        >
            WHO <span className="text-[20vw]"> AM I?</span>
        </motion.h1>
    );
};

export default IntroHeading;
