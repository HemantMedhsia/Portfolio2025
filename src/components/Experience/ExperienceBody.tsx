import GradientLine from "../../Ui/GradientLine/GradientLine";
import ExperienceList from "./ExperienceList";

export const ExperienceBody: React.FC = () => {
    return (
        <ul className="relative px-4 py-10 md:py-20">

            <GradientLine />
            <ExperienceList />
            
        </ul>
    );
};


export default ExperienceBody;
