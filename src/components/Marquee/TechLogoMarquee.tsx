import TechStackCard from "../TechStacksMarquee/TechStackCard";
import techStack from "../TechStacksMarquee/TechStacks";
import MarqueeRow from "./MarqueeRow";

const TechLogoMarquee: React.FC = () => {
    return (
        <div className="bg-black py-4">
            <MarqueeRow
                direction="left"
                items={techStack}
                renderItem={(t, idx) => <TechStackCard key={`left-${idx}`} {...t} />}
            />
            <MarqueeRow
                direction="right"
                items={techStack}
                renderItem={(t, idx) => <TechStackCard key={`right-${idx}`} {...t} />}
            />
        </div>
    );
};

export default TechLogoMarquee;
