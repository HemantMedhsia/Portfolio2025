import React from "react";
import { motion } from "motion/react"
import leftHand from "../assets/Images/hand-left.webp"
import rightHand from "../assets/Images/hand-right.webp"
import ScrollHint from "../Ui/ScrollHint/ScrollHint";

const Home: React.FC = () => {
    return (
        <div className="relative  w-full h-screen flex items-center justify-center overflow-hidden">

            {/* 👈 Left Hand Animated */}
            <motion.img
                src={leftHand}
                alt="Left Hand"
                className="absolute left-0 top-10 w-32 sm:w-40 lg:w-62"
                initial={{ x: -200, opacity: 0, rotate: -30 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1 }}
                whileHover={{ scale: 1.1, rotate: -10 }}
            />

            {/* ✨ Center Content */}
            <motion.div
                className="text-center px-4 space-y-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="px-4 sm:px-6 lg:px-60 md:pt-60">
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

                {/* <motion.div
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-sm tracking-widest uppercase md:hidden"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    scroll to explore ↧
                </motion.div> */}

                <ScrollHint />

            </motion.div>

            {/* 👉 Right Hand Animated */}
            <motion.img
                src={rightHand}
                alt="Right Hand"
                className="absolute right-0 bottom-0 w-32 sm:w-40 lg:w-52"
                initial={{ x: 200, opacity: 0, rotate: 30 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
            />

            {/* Gradient Circles */}
        </div>
    );
};

export default Home;
