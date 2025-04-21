import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { educationData } from "./data";

const EducationList: React.FC = () => {
    return (
        <>
            {educationData.map((edu, index) => {
                const isLeft = index % 2 === 0;
                const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

                return (
                    <motion.li
                        key={index}
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative z-10 mb-80"
                    >
                        <EducationCard edu={edu} isLeft={isLeft} />
                    </motion.li>
                );
            })}
        </>
    );
};

export default EducationList;
