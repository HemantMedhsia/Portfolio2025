import { motion } from "framer-motion";

const ProjectHeader: React.FC = () => {
    return (
        <motion.header
            className="w-full text-center py-16 px-6 bg-[#000]"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            id="projects"
        >
            

            {/* Main Intro */}
            <motion.h1
                className="w-full md:mx-40 lg:mx-40 text-left text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-teal-200 via-purple-200 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                Turning Ideas into Impact
            </motion.h1>


            {/* Short Story */}
            <motion.p
                className="text-gray-400 text-sm mt-6 max-w-md md:mx-46 text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                Hey, I’m Hemant 👋 A backend engineer who loves building tools that solve real-world problems. I believe code isn't just logic — it’s storytelling, and every project I build tells a story of purpose, precision, and passion.
            </motion.p>

            {/* Highlight Line */}
            <motion.p
                className="text-white text-xl font-semibold mt-10 animated-gradient-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                Every line of code counts. Every project is personal.
            </motion.p>

            {/* Down cue */}
            <motion.div
                className="text-teal-400 mt-8 text-2xl animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
            >
                ↓
            </motion.div>

            {/* Emoji Social Shortcuts */}
            <div className="hidden md:flex lg:flex justify-end gap-4 text-xl md:text-sm text-gray-500 mb-1">
                <span className="hover:text-teal-400 cursor-pointer">👨‍💻 GH</span>
                <span className="hover:text-teal-400 cursor-pointer">✉️ EM</span>
                <span className="hover:text-teal-400 cursor-pointer">🧠 FB</span>
                <span className="hover:text-teal-400 cursor-pointer">📸 IN</span>
            </div>
        </motion.header>
    );
};

export default ProjectHeader;
