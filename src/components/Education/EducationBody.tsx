import schollarKid from "../../assets/Images/Education/kidSchollar.png";
import schollarKid2 from "../../assets/Images/Education/kidSchollar2.png";
import degree from "../../assets/Images/Education/degree.png";
import schollarBoy from "../../assets/Images/Education/fullSchollar.png";
import AnimatedImage from "./AnimatedImage";
import EducationList from "./EducationList";
import GradientLine from "../../Ui/GradientLine/GradientLine";

const EducationBody: React.FC = () => {
    return (
        <ul className="relative px-4 py-20 bg-black">
            
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

            <EducationList/>
        </ul>
    );
};


export default EducationBody;
