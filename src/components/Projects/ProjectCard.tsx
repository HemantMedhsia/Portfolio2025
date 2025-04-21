import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import hoverEffect from "hover-effect";
import { useEffect, useRef } from "react";

interface ProjectCardProps {
    techStack: string;
    projectName: string;
    mainImg: string;
    secImg: string;
    overlayImg: string;
    svgNumberImg: string;
    githubLink: string;
    liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ techStack, projectName, mainImg, secImg, overlayImg, svgNumberImg, githubLink, liveLink }) => {
    const imageRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!imageRef.current) return;

        try {
            new hoverEffect({
                parent: imageRef.current,
                intensity: 0.3,
                image1: secImg,
                image2: mainImg,
                displacementImage: overlayImg,
            });
        } catch (error) {
            console.error("Hover effect failed to initialize:", error);
        }

        return () => {
            if (imageRef.current) {
                imageRef.current.innerHTML = "";
            }
        };
    }, []);

    return (
        <motion.div
            className="relative w-full max-w-3xl mx-auto my-10 bg-gradient-to-t border-2 border-dashed border-[#2A2B37] from-[#15161C] to-[#000] rounded-[40px] p-6 md:px-24 md:py-12 flex flex-col md:flex-row items-center gap-10 shadow-[0_0_40px_rgba(0,0,0,0.4)] mb-48"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="absolute -top-30 -right-10 w-60 h-60 opacity-80">
                <img src={svgNumberImg} alt={`Project ${projectName} number`} className="w-full h-full object-contain" />
            </div>

            <div
                ref={imageRef}
                className="flex rounded-3xl w-[340px] h-64 sm:h-80 md:h-96 item-image overflow-hidden"
            >
                {/* Hover effect will inject canvas here */}
            </div>

            <div className="flex-1 text-white space-y-6 w-1/3 text-center md:text-left">
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold leading-snug">
                        {projectName}
                    </h3>
                </div>

                <div>
                    <a
                        href={liveLink}
                        target="_blank"
                        className="text-teal-300 uppercase text-sm tracking-widest border-b-2 border-teal-300 pb-1 hover:opacity-80 transition"
                    >
                        Visit the Website
                    </a>
                </div>

                <a href={githubLink} className="flex justify-center md:justify-start gap-2 text-xl mt-4">
                    <FaGithub size={24} className="hover:text-teal-400 transition cursor-pointer" />
                </a>
            </div>

            <div className="hidden md:block absolute left-13 bottom-22 -rotate-90 origin-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                {techStack}
            </div>
        </motion.div>
    );
};


export default ProjectCard;
