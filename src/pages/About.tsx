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
            <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center relative overflow-hidden">
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
                    className="flex flex-col lg:flex-row items-center max-w-6xl gap-16 z-10"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <ProfileSection />
                </motion.div>
            </div>
            {/* <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-sm tracking-widest uppercase"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                scroll to explore ↧
            </motion.div> */}
        </section>
    );
};

export default About;

