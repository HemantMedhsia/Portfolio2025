import { motion } from "framer-motion";

const ExperienceHeader: React.FC = () => {
    return (
        <motion.header
            className="mt-16 md:mt-40 w-full text-center py-16 px-6 bg-[#000]"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            {/* Main Intro */}
            <motion.h1
                className="w-full md:w-2xl md:mx-40 text-center md:text-left text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-teal-200 via-purple-200 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                From Chaos to Clean Code: My Experience Trail
            </motion.h1>


            {/* Short Story */}
            <motion.p
                className="text-gray-400 text-sm mt-6 max-w-md md:mx-46 text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                Nothing came easy — but every tough task taught me something powerful. These roles weren’t just jobs, they were coding classrooms. And I? I was the full-stack sponge. 🧽💡
            </motion.p>

            {/* Highlight Line */}
            <motion.p
                className="text-white text-xl font-semibold mt-10 animated-gradient-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                Keep going… the code stories are waiting below ⬇️📜
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

            <div className="hidden md:flex justify-end gap-4 text-xl md:text-sm text-gray-500 mb-1">
                <span className="hover:text-teal-400 cursor-pointer">👨‍💻 GH</span>
                <span className="hover:text-teal-400 cursor-pointer">✉️ EM</span>
                <span className="hover:text-teal-400 cursor-pointer">🧠 FB</span>
                <span className="hover:text-teal-400 cursor-pointer">📸 IN</span>
            </div>
        </motion.header>
    );
}

export default ExperienceHeader;