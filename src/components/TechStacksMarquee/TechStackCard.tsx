import LazyImage from "../LazyImage/LazyImage";

interface TechStackCardProps {
    src: string;
    alt: string;
}

const TechStackCard: React.FC<TechStackCardProps> = ({ src, alt }) => (
    <div className="w-[130px] h-[130px] shrink-0 rounded-2xl backdrop-blur-md flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-teal-400/40 transition-transform duration-300 transform hover:scale-105">
        <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
            <LazyImage
                src={src}
                alt={alt}
                className="w-10 h-10 object-contain transition-all duration-300"
            />
        </div>
        <p className="text-sm text-white font-medium tracking-wide">{alt}</p>
    </div>
);

export default TechStackCard;