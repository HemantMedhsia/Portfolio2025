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
        <section className="">
            <div className="min-h-screen w-full py-20 md:px-0 px-3  md:my-20 flex flex-col items-center justify-center relative overflow-hidden ">
                <IntroHeading scrollYProgress={scrollYProgress} />

                <div className="hidden lg:flex flex-col items-center absolute top-20 right-8">
                                    <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                                        ABOUT ME
                                    </span>
                                    <span className="h-36 w-[2px] bg-[#1a1443]"></span>
                                </div>

                <motion.h2
                    className="text-5xl w-full max-w-5xl text-center md:text-left md:text-7xl font-bold mb-16 z-10 "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Let me flex😁 <span className="text-[#7A5AF8] text-2xl animated-gradient-text">for a sec </span><span className="md:text-8xl animated-gradient-text">!</span>
                </motion.h2>

                <motion.div
                    className="w-full md:border-0 border-2 border-dashed border-[#2A2B37] rounded-3xl backdrop-blur-xl p-2 md:p-10 flex flex-col lg:flex-row items-center justify-center gap-10 bg-black/10"
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

