import { motion } from "framer-motion";

interface AnimatedImageProps {
    src: string;
    alt: string;
    className: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className }) => {
    return (
        <motion.img
            src={src}
            alt={alt}
            className={className}
            animate={{ y: [0, -15, 0] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
};

export default AnimatedImage;
