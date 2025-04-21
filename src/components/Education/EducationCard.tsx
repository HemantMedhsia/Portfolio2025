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

const EducationCard: React.FC<EducationCardProps> = ({
    edu,
    isLeft,
}: {
    edu: any;
    isLeft: boolean;
}) => {
    return (
        <div className="relative mb-24 flex justify-center w-full group rounded-3xl">

            {/* Neon Dot */}
            <div
                className={`absolute z-[-1] w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 border-4 border-white dark:border-gray-900 -top-10
        ${isLeft ? "-right-2 md:right-[36rem]" : "-right-2 md:left-[36rem]"}`}
            ></div>

            <div
                className={`absolute z-[-1] w-40 h-40 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 border-4 border-white dark:border-gray-900 top-32
        ${isLeft ? "-right-2 md:right-[40rem]" : "-right-2 md:left-[40rem]"}`}
            ></div>

            {/* Story */}


            {/* Story cloud card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={` absolute top-30 right-30 z-12 w-full md:w-2/5 rounded-3xl p-6 shadow-xl border border-purple-700 backdrop-blur-md bg-black/40
        ${isLeft ? "md:ml-80" : "md:ml-80"} mt-10`}
            >
                <p className="text-sm text-justify text-gray-300 leading-relaxed">
                    {edu.story}
                </p>
            </motion.div>


            {/* Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative z-10 w-full md:w-5/14 rounded-3xl p-6 shadow-xl border-dashed border-2 border-purple-700 backdrop-blur-md bg-black/40 h-48
                ${isLeft ? "ml-0 md:mr-60" : "mr-0 md:mr-60"}
        `}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                    <div className="flex flex-col">
                        <h3 className="animated-gradient-text text-xl font-bold">{edu.institution}</h3>
                        <span className="text-sm text-gray-400">{edu.location}</span>
                    </div>
                    <time className="text-xs text-gray-400 italic">{edu.year}</time>
                </div>

                {/* Logo and Degree */}
                <div className="flex items-center gap-4">
                    <img
                        src={edu.logo}
                        alt="institution logo"
                        className="h-16 w-16 rounded-full border-2 border-purple-500"
                    />
                    <div className="text-gray-300 text-md font-semibold">
                        {edu.degree}
                    </div>
                </div>

                {/* Icon footer */}
                <div className="absolute bottom-2 right-4 text-purple-500 text-2xl opacity-30 group-hover:opacity-70 transition">
                    <IoSchoolSharp />
                </div>
            </motion.div>
        </div>
    );
};

export default EducationCard;