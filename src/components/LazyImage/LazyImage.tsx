import { useState } from "react";

const LazyImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`${className} transition-opacity duration-300 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
      onLoad={() => setLoaded(true)}
    />
  );
};

export default LazyImage;
