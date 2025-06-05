import { motion } from 'framer-motion';

const TestimonialMarqueeHeader: React.FC = () => {
    return (
        <motion.header
            className=" w-full text-center py-16 px-6 bg-[#000]"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            <motion.h1
                className="md:w-2xl md:mx-40 text-left text-4xl md:text-5xl font-extrabold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                💌 <span className='bg-gradient-to-r from-teal-200 via-purple-200 to-pink-400 bg-clip-text text-transparent'>Love Letters? Nah... Just Really Nice Feedback</span> 😄
            </motion.h1>

            <motion.p
                className="text-gray-400 text-sm mt-6 max-w-md md:mx-46 text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                💬 From fellow devs 👨‍💻 to internet strangers 🌍 — these are the sweet little messages 🍬 that fuel my motivation 🚀 (and my coffee addiction ☕). Wanna drop one too? Slide in like a smooth console.log() 🛷😉
            </motion.p>
        </motion.header>
    )
}

export default TestimonialMarqueeHeader;