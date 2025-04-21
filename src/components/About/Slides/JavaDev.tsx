import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react"; // optional icon
import javaImg from "../../../assets/Images/h-logo.jpg"; // apna image yaha daalna

const JavaDev: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="bg-[#1F1F2E] p-6 rounded-2xl shadow-xl max-w-xl mx-auto text-white flex flex-col gap-4 items-center"
        >
            <motion.img
                src={javaImg}
                alt="Java Developer"
                className="w-32 h-32 rounded-full border-4 border-[#F05454] object-cover shadow-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 120 }}
            />

            <motion.h3
                className="text-3xl font-bold text-center text-[#F05454]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <Code className="inline mr-2" />
                The Backend Magician
            </motion.h3>

            <motion.p
                className="text-gray-300 text-lg text-center leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                They say code has no soul.
                <br /> But when I write Java, it speaks to the system.
                <br /> Secure. Scalable. Sharp.
            </motion.p>

            <motion.div
                className="bg-[#2C2C3A] px-4 py-2 rounded-full mt-4 text-sm tracking-wide"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
            >
                Spring Boot | Hibernate | REST APIs | Clean Architecture
            </motion.div>

            <motion.p
                className="text-gray-400 text-sm italic mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                “Java isn’t just a language. For me, it’s the logic behind the magic.”
            </motion.p>
        </motion.div>
    );
};

export default JavaDev;
