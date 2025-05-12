import { AnimationControls, motion, TargetAndTransition, VariantLabels } from "framer-motion";
import { useState } from "react";

interface LazyMotionImageProps {
  src: string;
  alt: string;
  className?: string;
  animation?: boolean | AnimationControls | TargetAndTransition | VariantLabels;
  transition?: object;
}

const LazyMotionImage = ({ src, alt, className, animation, transition }: LazyMotionImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      className={`${className} transition-opacity duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
      animate={animation}
      transition={transition}
      onLoad={() => setLoaded(true)}
    />
  );
};

export default LazyMotionImage;
