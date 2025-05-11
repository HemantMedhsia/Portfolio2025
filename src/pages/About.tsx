import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import IntroHeading from "../components/About/IntroHeading";
import ProfileSection from "../components/About/ProfileSection";

const About: React.FC = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    return (
        <section  className="bg-black text-white">
            <div className="min-h-screen px-2 py-20 flex flex-col items-center justify-center relative overflow-hidden">
                <IntroHeading scrollYProgress={scrollYProgress} />

                <motion.h2
                    className="text-5xl w-full max-w-5xl text-center md:text-left md:text-7xl font-bold mb-16 z-10 "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Let me flex😁 <span className="text-[#7A5AF8] text-2xl animated-gradient-text">for a sec </span><span className="md:text-8xl animated-gradient-text">!</span>
                </motion.h2>

                <motion.div
                    className="flex flex-col items-center justify-center w-full max-w-6xl border-2 border-dashed border-[#2A2B37] backdrop-blur-xl shadow-[0_20px_50px_rgba(122,90,248,0.2)] p-2 md:p-6 rounded-[2rem] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(122,90,248,0.3)] overflow-hidden"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <ProfileSection />
                </motion.div>
            </div>
            
        </section>
    );
};

export default About;

