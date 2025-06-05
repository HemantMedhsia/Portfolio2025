import { motion } from "framer-motion";
import girlWithBulb from "../../assets/Images/HelperImgs/girlWithBulb.png"; // Adjust the path as necessary

const ResumeHeader: React.FC = () => {
    return (
        <motion.header
            className=" mt-16 md:mt-40 w-full text-center py-16 px-6 bg-[#000]"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            <motion.img
                src={girlWithBulb}
                alt="Scholar Hat"
                className="rotate-10 absolute top-5/17 md:top-1/5 right-20 w-40 h-40 md:w-80 md:h-80 opacity-70"
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.h1
                className=" w-full md:w-2xl md:mx-40 text-left text-4xl md:text-5xl font-extrabold leading-tight "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                🛠️ <span className="bg-gradient-to-r from-teal-200 via-purple-200 to-pink-400 bg-clip-text text-transparent">Things I Know, Stuff I’ve Done</span>
            </motion.h1>


            <motion.p
                className="text-gray-400 text-sm mt-6 max-w-md md:mx-46 text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                Want to know what I’ve been up to (professionally 💼, not on weekends 🍕)? My resume’s got all the juicy dev details 💻📜.
            </motion.p>

            <motion.p
                className="text-white text-xl font-semibold mt-10 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="animated-gradient-text">Download my resume and let’s build something awesome!</span> 🚀
            </motion.p>

        </motion.header>
    )
}

export default ResumeHeader;