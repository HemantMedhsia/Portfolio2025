import React from "react";
import { motion } from "framer-motion";
import schollarHat from "../../assets/Images/HelperImgs/envelop.png";

const ContactMeHeader: React.FC = () => {
    return (
        <motion.header
            className="mt-16 md:mt-40 w-full text-center py-16 px-6 bg-[#000] relative"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            <motion.img
                src={schollarHat} // Replace with your actual path
                alt="Scholar Hat"
                className="md:-rotate-20 absolute top-92 md:top-[30px] md:left-40 w-30 h-30 md:w-50 md:h-50 opacity-30 md:opacity-50"
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Main Education Heading */}
            <motion.h1
                className="w-full md:w-2xl mx-auto text-center md:text-5xl text-4xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                The Answers are just a Message Away: Let's Connect!
            </motion.h1>

            {/* Education Journey Short Note */}
            <motion.p
                className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto text-justify leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                Got questions or ideas? Send a message and find out what exciting answers and connections are waiting for you. 📚 ✨

            </motion.p>

            {/* Down Arrow */}
            <motion.div
                className="text-teal-400 mt-8 text-2xl animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
            >
                ↓
            </motion.div>
        </motion.header>
    )
}

export default ContactMeHeader;