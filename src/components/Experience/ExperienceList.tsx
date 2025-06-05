import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences, reverseExperienceData } from "./data";
import TimelineCard from "./TimelineCard";

interface ExperienceListProps {
    isReversed?: boolean;
}

const ExperienceList: React.FC<ExperienceListProps> = ({ isReversed }) => {
    const data = isReversed ? reverseExperienceData : experiences;
    return (
        <>
            {data.map((exp, index) => {
                const isLeft = index % 2 === 0;

                const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.1,
                });

                return (
                    <motion.li
                        key={index}
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative z-10"
                    >
                        <TimelineCard exp={exp} isLeft={isLeft} />
                    </motion.li>
                );
            })}
        </>
    )
}

export default ExperienceList;