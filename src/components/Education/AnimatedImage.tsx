import LazyMotionImage from "../LazyImage/LazyMotionImage";

interface AnimatedImageProps {
    src: string;
    alt: string;
    className: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className }) => {
    return (
        <LazyMotionImage
            src={src}
            alt={alt}
            className={className}
            animation={{ y: [0, -15, 0] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
};

export default AnimatedImage;
