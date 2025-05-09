import { IoSchoolSharp } from "react-icons/io5";
import { motion } from "framer-motion";

interface EducationCardProps {
    edu: {
        year: string;
        degree: string;
        institution: string;
        location: string;
        logo: string;
        story: string;
    };
    isLeft: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({ edu, isLeft }) => {
    return (
        <div className="relative mb-24 w-full flex flex-col items-center md:flex-row md:justify-center group px-4 sm:px-8">

            {/* Gradient Circles */}
            <div
                className={`absolute z-[-1] w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 border-4 border-white dark:border-gray-900 top-0
        ${isLeft ? "left-1/2" : "right-1/2"}`}
            ></div>

            <div
                className={`top-1/2 md:top-5/2 absolute z-[-1] w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 border-4 border-white dark:border-gray-900 bottom-10
        ${isLeft ? "right-1/2" : "left-1/2"}`}
            ></div>

            {/* Card and Story wrapper */}
            <div className={`w-full flex flex-col md:flex-row items-start justify-center gap-6 mt-16`}>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`md:absolute right-5/12 w-full md:w-[45%] rounded-3xl p-6 shadow-xl border-dashed border-2 border-purple-700 backdrop-blur-md bg-black/40`}
                >
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex flex-col">
                            <h3 className="animated-gradient-text text-xl font-bold">{edu.institution}</h3>
                            <span className="text-sm text-gray-400">{edu.location}</span>
                        </div>
                        <time className="text-xs text-gray-400 italic">{edu.year}</time>
                    </div>

                    <div className="flex items-center gap-4">
                        <img
                            src={edu.logo}
                            alt="institution logo"
                            className="h-16 w-16 rounded-full border-2 border-purple-500"
                        />
                        <div className="text-gray-300 text-lg md:text-3xl  font-semibold">
                            {edu.degree}
                        </div>
                    </div>

                    <div className="absolute bottom-2 right-4 text-purple-500 text-2xl opacity-30 group-hover:opacity-70 transition">
                        <IoSchoolSharp />
                    </div>
                </motion.div>

                {/* Story Block */}
                <motion.div
                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:absolute left-5/12 top-60 w-full md:w-[45%] rounded-3xl p-6 shadow-xl border border-purple-700 backdrop-blur-md bg-black/40"
                >
                    <p className="text-sm text-justify text-gray-300 leading-relaxed">
                        {edu.story}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default EducationCard;
