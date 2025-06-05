import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";
import LazyImage from "../LazyImage/LazyImage";

interface TimelineCardProps {
    exp: {
        company: string;
        location: string;
        year: string;
        logo: string;
        title: string;
        description: string;
        story: string;
        techStackImgs: string[];
    };
    isLeft: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ exp, isLeft }) => {
    return (
        <div className="relative mb-24 flex flex-col md:flex-row justify-center w-full group rounded-3xl">

            {/* Neon dot */}
            <div
                className={`absolute z-[-1] w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 border-4 border-white dark:border-gray-900 -top-10
                ${isLeft ? "left-1/2 md:right-[30%]" : "left-1/2 md:left-[30%]"} 
                -translate-x-1/2 md:translate-x-0`}
            ></div>


            <motion.div
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative z-10 w-full md:w-5/18 rounded-3xl px-6 py-4 shadow-2xl border-dashed border-2 border-[#2A2B37] backdrop-blur-lg
                h-auto md:h-80 mb-12 md:mb-20 ${isLeft ? "md:mr-40" : "md:ml-40"}`}
            >

                <div className="mb-2 flex justify-center items-center md:absolute md:-top-16">
                    <LazyImage src={exp.logo} alt={exp.company} className={"md:h-20 md:w-20 h-16 w-16 rounded-full border-4 border-purple-700"} />
                </div>


                {/* Title and Logo */}
                <div className="text-xl font-extrabold bg-clip-text text-transparent animated-gradient-text mb-4">
                    <div className="flex flex-col items-center justify-between">
                        <div className="flex flex-col">
                            <span className="md:mt-4">{exp.company}</span>
                            <div className="flex justify-center items-center gap-1 font-medium text-sm text-gray-400 mt-1 mb-2">
                                <IoLocationSharp />
                                {exp.location}
                            </div>
                        </div>
                        <time className="text-xs text-gray-400 font-mono italic opacity-80">
                            {exp.year}
                        </time>
                    </div>
                </div>


                <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-1">
                    {exp.title}
                </div>

                <p className="text-lg md:text-sm text-gray-300 leading-relaxed mb-2">
                    {exp.description}
                </p>
            </motion.div>

            {/* Story paragraph */}
            <div className={`backdrop-blur-md mt-4 md:mt-0 md:absolute max-w-xs text-lg md:text-sm text-gray-400 text-justify leading-relaxed
                ${isLeft ? "md:left-20" : "md:right-20"} top-1/3 transform md:-translate-y-1/2 px-4 md:px-0 mb-4`}>
                {exp.story}
            </div>


            <div className={`mt-6 md:absolute flex flex-wrap gap-2 items-center justify-center md:justify-start md:w-sm
                ${isLeft ? "md:right-40" : "md:left-40"} top-5/8 transform md:-translate-y-1/2`}>
                {exp.techStackImgs.map((img, index) => (
                    <LazyImage src={img} alt={"Tech"} key={index} className="h-10 w-10 md:h-12 md:w-12 p-1 border-[#7A5AF8] rounded-full" />
                ))}
            </div>
        </div>
    );
};

export default TimelineCard;
