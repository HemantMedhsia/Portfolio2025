import { TbArrowsDoubleSwNe } from "react-icons/tb";
import GradientLine from "../../Ui/GradientLine/GradientLine";
import ExperienceList from "./ExperienceList";
import { CiTimer } from "react-icons/ci";
import { useState } from "react";

export const ExperienceBody: React.FC = () => {

    const [isReversed, setIsReversed] = useState<boolean>(false);

    const handleReverseTimeline = () => {
        setIsReversed(!isReversed);
    }

    return (
        <ul className="relative px-4 py-10 md:py-20">

            <button className="w-[20rem] md:max-w-xs flex justify-center items-center gap-3 text-lg md:text-sm absolute rounded-full -top-16 md:-top-20 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 md:py-1 shadow-lg active:bg-indigo-200/60 hover:bg-indigo-200/60 active:text-black hover:text-black transition-all duration-300 tracking-widest cursor-pointer" onClick={() => handleReverseTimeline()}>
                <div className=" text-xl md:text-sm"><TbArrowsDoubleSwNe /></div>
                Flip the Timeline
                <div className="text-xl md:text-[16px]"><CiTimer /></div>
            </button>
            <GradientLine />
            <ExperienceList isReversed={isReversed} />

        </ul>
    );
};


export default ExperienceBody;
