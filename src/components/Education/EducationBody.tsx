import schollarKid from "../../assets/Images/Education/kidSchollar.png";
import schollarKid2 from "../../assets/Images/Education/kidSchollar2.png";
import degree from "../../assets/Images/Education/degree.png";
import schollarBoy from "../../assets/Images/Education/fullSchollar.png";
import AnimatedImage from "./AnimatedImage";
import EducationList from "./EducationList";
import GradientLine from "../../Ui/GradientLine/GradientLine";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { CiTimer } from "react-icons/ci";
import { useState } from "react";

const EducationBody: React.FC = () => {

    const [isReversed, setIsReversed] = useState<boolean>(false);

    const handleReverseTimeline = () => {
        setIsReversed(!isReversed);
    }

    return (
        <ul className="relative px-4 py-20 bg-black">

            <button className="w-[20rem] md:max-w-xs flex justify-center items-center gap-3 text-lg md:text-sm absolute rounded-full -top-16 md:-top-20 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 md:py-1 shadow-lg active:bg-indigo-200/60 hover:bg-indigo-200/60 active:text-black hover:text-black transition-all duration-300 tracking-widest cursor-pointer" onClick={() => handleReverseTimeline()}>
                <div className=" text-xl md:text-sm"><TbArrowsDoubleSwNe /></div>
                Flip the Timeline
                <div className="text-xl md:text-[16px]"><CiTimer /></div>
            </button>

            <GradientLine />

            <AnimatedImage
                src={schollarKid} // Replace with your actual path
                alt="Scholar Hat"
                className="hidden md:block rotate-10 opacity-80 absolute top-5/14 -left-8 md:left-20 w-50 h-50 md:w-1/5 md:h-1/6"
            />

            <AnimatedImage
                src={schollarKid2} // Replace with your actual path
                alt="Scholar Hat"
                className="hidden md:block absolute opacity-80 top-1/6 md:top-80 -right-8 md:right-20 w-50 h-50 md:w-1/5 md:h-1/6"
            />

            <AnimatedImage
                src={degree} // Replace with your actual path
                alt="Scholar Hat"
                className="hidden md:block absolute opacity-80 top-5/9 -right-4 md:right-20 w-44 h-44 md:w-1/4 md:h-auto"
            />

            <AnimatedImage
                src={schollarBoy} // Replace with your actual path
                alt="Scholar Hat"
                className=" absolute md:opacity-80 top-5/7 left-20 w-50 h-50 md:w-1/4 md:h-auto"
            />

            <EducationList isReversed={isReversed} />
        </ul>
    );
};


export default EducationBody;
