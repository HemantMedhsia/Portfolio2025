import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
];

const WORD_HEIGHT = 50; // px

const Loader: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center z-[99999] text-3xl font-medium font-poppins text-white bg-black p-10 rounded-xl mx-auto h-screen w-full">
            <div className="flex items-center gap-4 relative h-[50px] overflow-hidden">
                <p className="hidden md:block footer-gradient-border animated-gradient-text font-thin text-lg">Loading...</p>

                <div className="relative h-[50px] w-[270px] overflow-hidden text-justify items-center">
                    <motion.div
                        className="flex flex-col w-full"
                        animate={{ y: -currentIndex * WORD_HEIGHT }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {words.map((word, index) => (
                            <div
                                key={index}
                                className="h-[50px] flex items-center justify-center text-justify pl-2 text-4xl animated-gradient-text"
                            >
                                {word}
                            </div>
                        ))}
                    </motion.div>

                    {/* Optional: Gradient Overlay */}
                    <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
                </div>
            </div>
        </div>
    );
};

export default Loader;