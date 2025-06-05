import React, { useEffect } from "react";
import { motion } from "motion/react"
import leftHand from "../assets/Images/HelperImgs/hand-left.webp"
import rightHand from "../assets/Images/HelperImgs/hand-right.webp";
import bgimg from "../assets/Images/HelperImgs/wwwhirl.svg";
import ScrollHint from "../components/ScrollHint/ScrollHint";

const Home: React.FC = () => {

    useEffect(() => {
        const loadPages = async () => {
            await Promise.all([
                import("../pages/Experience"),
                import("../pages/Education")
            ]);
        };
        loadPages();
    }, []);

    useEffect(() => {
        const shouldScroll = localStorage.getItem("scrollToProjects");
        if (shouldScroll === "true") {
            const el = document.getElementById("projects");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                localStorage.removeItem("scrollToProjects");
            }
        }
    }, []);

    return (
        <div className="relative  w-full h-screen flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 z-1">
                <img
                    src={bgimg}
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            <motion.img
                src={leftHand}
                alt="Left Hand"
                className="absolute left-0 top-10 w-32 sm:w-40 lg:w-62 z-2"
                initial={{ x: -200, opacity: 0, rotate: -30 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1 }}
                whileHover={{ scale: 1.1, rotate: -10 }}
            />

            <motion.div
                className="text-center px-4 space-y-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className=" relative z-2 px-4 sm:px-6 lg:px-60 md:pt-60">
                    <h1 className="text-left font-bold text-white text-4xl sm:text-5xl lg:text-7xl md:mb-4">
                        Hi, I'm Hemant —
                    </h1>
                    <h1 className="text-left font-bold text-white text-4xl sm:text-5xl lg:text-7xl">
                        I build web <span className="text-blue-400">experiences</span> that leave an <br className="hidden sm:block" />
                        <span className="text-7xl sm:text-7xl lg:text-9xl animated-gradient-text block sm:inline">impact.</span>
                    </h1>
                    <p onClick={() => {
                        const el = document.getElementById("projects");
                        el?.scrollIntoView({ behavior: "smooth" });
                    }} className="mt-6 text-base sm:text-lg text-left text-gray-400 cursor-pointer hover:text-blue-400">
                        Scroll to see my projects and skills.
                    </p>
                </div>
                <ScrollHint />

            </motion.div>

            <motion.img
                src={rightHand}
                alt="Right Hand"
                className="absolute right-0 bottom-0 w-32 sm:w-40 lg:w-52 z-2"
                initial={{ x: 200, opacity: 0, rotate: 30 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
            />
        </div>
    );
};

export default Home;
