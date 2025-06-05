import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import profileImage from "../../assets/Images/HelperImgs/cropedProfile2.jpg";
import hoverEffect from "hover-effect";
import gProfile from "../../assets/Images/HelperImgs/gProfile1.png";
import overlayImg from "../../assets/Images/HelperImgs/overlay.png";


const ProfileSection: React.FC = () => {

    const imageRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!imageRef.current) return;

        try {
            new hoverEffect({
                parent: imageRef.current,
                intensity: 0.3,
                image1: profileImage,
                image2: gProfile,
                displacementImage: overlayImg,
            });
        } catch (error) {
            console.error("Hover effect failed to initialize:", error);
        }

        return () => {
            if (imageRef.current) {
                imageRef.current.innerHTML = "";
            }
        };
    }, []);


    return (
        <section className="flex justify-center items-center rounded-3xl md:px-4 md:border-0 border-2 border-dashed border-[#2A2B37]">
            <motion.div
                className="flex justify-center items-center bg-none flex-col lg:flex-row gap-10 w-full backdrop-blur-xl py-6 px-4 md:p-10 rounded-[2rem] transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                

                <motion.div
                    className="relative group w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-pink-600 cursor-pointer"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                >

                    <div ref={imageRef} className="w-full h-full rounded-full overflow-hidden" />
                </motion.div>

                <motion.div
                    className="space-y-6 text-gray-400 max-w-2xl"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h2 className="text-center md:text-left text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Hey, I'm <span className="bg-gradient-to-r from-[#7A5AF8] to-[#F472B6] text-transparent bg-clip-text">Hemant</span> 👋
                    </h2>

                    <p className="text-lg text-justify md:text-md leading-relaxed text-gray-400">
                        A passionate dev who <span className="text-white font-semibold">thrives in the playground of the web</span>.
                        Whether it's front-end sparkle or back-end depth — I love making ideas come alive.
                    </p>

                    <p className="text-lg text-justify md:text-md leading-relaxed text-gray-400">
                        I work with <span className="text-white">React</span>, <span className="text-white">Node.js</span>,
                        and I’m sharpening my skills in <span className="text-white">Java + Spring Boot</span> to level up my backend game.
                    </p>

                    <p className="text-lg text-justify md:text-md leading-relaxed text-gray-400">
                        Beyond coding, I design intuitive user experiences, explore new tech daily, fix bugs (and sometimes proudly break stuff 😅),
                        and write code that's as expressive as poetry.
                    </p>

                    <p className="text-xl text-justify font-semibold text-white">
                        Let’s build something magical — or break stuff trying! <span className="text-[#7A5AF8] text-2xl">🚀</span>
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ProfileSection;
