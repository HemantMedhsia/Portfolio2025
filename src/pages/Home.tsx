import React from "react";
import { motion } from "motion/react"
import leftHand from "../assets/Images/hand-left.webp"
import rightHand from "../assets/Images/hand-right.webp"

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
                <h1 className="lg:text-7xl mb-7 w-5xl text-left sm:text-5xl font-bold text-white">
                    Hi, I'm Hemant —
                </h1>
                <h1 className="lg:text-7xl w-5xl text-left sm:text-5xl font-bold text-white">
                    I build web <span className="text-7xl">experiences</span> that leave an <span className="text-9xl animated-gradient-text">impact.</span>
                </h1>
                <p className="mt-4 text-lg text-left text-gray-400">
                    Explore my projects and skills.
                </p>
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
        </div>
    );
};

export default Home;
