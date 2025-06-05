import { motion } from "framer-motion";

const TechStackMarqueeHeader: React.FC = () => {
    return (
        <motion.header
            className=" mt-40 w-full text-center py-16 px-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            <motion.h1
                className="w-full md:w-2xl md:mx-40 lg:mx-40 text-left text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-teal-200 via-purple-200 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                From Quiet Nights to Bright Ideas — This Stack Builds It All
            </motion.h1>


            <motion.p
                className="text-gray-400 text-sm mt-6 max-w-md md:mx-46 text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                In the silence of the night, when the world slept, I was building dreams one line at a time.
                These tools stood by me — through bugs, breakdowns, and breakthroughs. 💡💡💡<br />
                What you see here isn’t just a stack — it’s the foundation of my journey.
            </motion.p>
        </motion.header>
    )
}

export default TechStackMarqueeHeader;