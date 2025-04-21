import MarqueeRow from "./MarqueeRow";
import testimonials from "../Testimonials/Testimonials";
import TestimonialCard from "../Testimonials/TestimonialCard";

const TestimonialMarquee: React.FC = () => {
    return (
        <div className="bg-black py-4 flex flex-col gap-4 mb-10">
            <MarqueeRow
                direction="left"
                items={testimonials}
                renderItem={(t, idx) => <TestimonialCard key={`left-${idx}`} {...t} />}
            />
            <MarqueeRow
                direction="right"
                items={testimonials}
                renderItem={(t, idx) => <TestimonialCard key={`left-${idx}`} {...t} />}
            />
        </div>
    )
}

export default TestimonialMarquee;