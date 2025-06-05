import { FaTwitter } from "react-icons/fa";

interface TestimonialCardProps {
    username: string;
    display: string;
    text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ username, display, text }) => (
    <div className="bg-[#1c1f2b] rounded-2xl text-white px-6 py-4 w-[300px] h-[140px] shrink-0 flex flex-col justify-between relative shadow-lg hover:shadow-teal-500/20 transition-shadow duration-300">
        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{display}</div>
        <div className="text-xs text-gray-500">{username}</div>
        <FaTwitter className="absolute top-4 right-4 text-[#1DA1F2]" size={16} />
        <div className="text-base font-medium mt-2">{text}</div>
    </div>
);

export default TestimonialCard;