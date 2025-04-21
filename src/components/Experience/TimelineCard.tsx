import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";

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

const TimelineCard: React.FC<TimelineCardProps> = ({
    exp,
    isLeft,
}: {
    exp: any;
    isLeft: boolean;
}) => {
    return (
        <div className="relative mb-24 flex justify-center w-full group rounded-3xl">
            {/* Neon dot */}
            <div
                className={`absolute z-[-1] w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 border-4 border-white dark:border-gray-900 -top-10
        ${isLeft ? "-right-2 md:right-[35rem]" : "-right-2 md:left-[35rem]"}
    `}
            ></div>

            {/* story para */}
            <div>
                <p className={` text-sm max-w-xs text-justify absolute text-gray-400 leading-relaxed mb-4 ${isLeft ? "left-20" : "right-20"} top-1/3 transform -translate-y-1/2`}>
                    {exp.story}
                </p>
            </div>

            {/* tech Stack */}
            <div>
                <div className={`absolute max-w-sm flex flex-wrap gap-2 items-center ${isLeft ? "right-40" : "left-40"} top-5/8 transform -translate-y-1/2`}>
                    {exp.techStackImgs.map((img: any, index: any) => (
                        <img
                            key={index}
                            src={img}
                            alt="Tech Stack"
                            className="h-12 p-1  border-[#7A5AF8] w-12 rounded-full ]"
                        />
                    ))}
                </div>
            </div>
            {/* Card container */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`
          relative z-10 w-full md:w-5/18 rounded-3xl p-6 shadow-2xl
          border-dashed border-2 border-[#2A2B37]  backdrop-blur-lg h-80 mb-20
          ${isLeft ? "ml-0 md:mr-40 " : "mr-0 md:ml-40"}
        `}
            >

                {/* Title and Logo */}
                <div className="text-xl font-extrabold animated-gradient-text bg-clip-text text-transparent mb-2">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col items-start justify-start">
                            <span className=" flex justify-center items-center">{exp.company}</span>
                            <div className="flex gap-1 items-center font-medium text-sm text-gray-400 mt-1 mb-1"><span><IoLocationSharp /></span>{exp.location}</div>
                        </div>
                        <time className="flex justify-center items-center text-xs text-gray-400 font-mono italic mb-1 opacity-80">
                            {exp.year}
                        </time>
                    </div>
                </div>

                <div className="absolute  bottom-74 border-2 rounded-full"><img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-24 w-24 ml-3 rounded-full border-2"
                /></div>

                <div className="text-md font-semibold text-gray-300 mb-1">
                    {exp.title}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                    {exp.description}
                </p>
            </motion.div>
        </div>
    );
};

export default TimelineCard;