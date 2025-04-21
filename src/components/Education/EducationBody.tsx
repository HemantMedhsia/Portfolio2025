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
                className="rotate-10 opacity-80 absolute top-1/3 left-20 w-16 h-16 md:w-1/5 md:h-1/6"
            />

            <AnimatedImage
                src={schollarKid2} // Replace with your actual path
                alt="Scholar Hat"
                className=" absolute opacity-80 top-80 right-20 w-16 h-16 md:w-1/5 md:h-1/6"
            />

            <AnimatedImage
                src={degree} // Replace with your actual path
                alt="Scholar Hat"
                className=" absolute opacity-80 top-5/9 right-20 w-16 h-16 md:w-1/4 md:h-auto"
            />

            <AnimatedImage
                src={schollarBoy} // Replace with your actual path
                alt="Scholar Hat"
                className=" absolute opacity-80 top-5/7 left-20 w-16 h-16 md:w-1/4 md:h-auto"
            />

            <EducationList/>
        </ul>
    );
};


export default EducationBody;
