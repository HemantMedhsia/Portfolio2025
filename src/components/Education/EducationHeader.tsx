import { motion } from 'framer-motion';
import schollarHat from "../../assets/Images/Education/schollarHat.png";
import LazyMotionImage from '../LazyImage/LazyMotionImage';

const EducationHeader: React.FC = () => {
    return (
        <motion.header
            className="mt-40 w-full text-center py-16 px-6 bg-[#000] relative"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {/* <motion.img
                src={schollarHat} // Replace with your actual path
                alt="Scholar Hat"
                className="rotate-10 absolute -top-22 left-1/3  md:top-[30px] md:left-20 w-40 h-40 md:w-80 md:h-80"
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            /> */}

            <LazyMotionImage animation={{ y: [0, -15, 0] }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }} src={schollarHat} alt='Scholar Hat' className='rotate-10 absolute -top-22 left-1/3  md:top-[30px] md:left-20 w-40 h-40 md:w-80 md:h-80' />

            {/* Main Education Heading */}
            <motion.h1
                className="w-full md:w-2xl mx-auto text-center md:text-5xl text-4xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                My Educational Odyssey: From Chalkboards to Code
            </motion.h1>

            {/* Education Journey Short Note */}
            <motion.p
                className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto text-justify leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                From the nervous days of 10th boards to late-night MCA coding marathons — this journey is more than just degrees. Every subject, every challenge, every "try again" shaped the developer I am becoming. 📚✨
            </motion.p>

            {/* Inspiring Highlight */}
            <motion.p
                className="animated-gradient-text text-white text-xl font-semibold mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                Keep scrolling… the milestones await below ⬇️
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

            {/* Social Emojis (optional or can be replaced later) */}
            <div className="hidden md:flex justify-end gap-4 text-xl md:text-sm text-gray-500 mt-4">
                <span className="hover:text-teal-400 cursor-pointer">👨‍🎓 GH</span>
                <span className="hover:text-teal-400 cursor-pointer">📧 EM</span>
                <span className="hover:text-teal-400 cursor-pointer">📘 FB</span>
                <span className="hover:text-teal-400 cursor-pointer">📸 IN</span>
            </div>
        </motion.header>
    );
};

export default EducationHeader;
