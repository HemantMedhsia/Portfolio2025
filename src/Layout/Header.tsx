import { motion } from "motion/react";
import LogoSection from "../components/Header/LogoSection";
import SocialIcons from "../components/Header/SocialIcons";
import TopRightRotatedButtons from "../components/Header/TopRightRotatedButtons";
import BottomLeftRotatedButtons from "../components/Header/BottomLeftRotatedButtons";


const Header: React.FC = () => {

    return (
        <motion.div>
            <motion.div
                className="fixed top-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-16 px-6 flex items-center justify-between 
                rounded-3xl backdrop-blur-3xl bg-[#15161C]/50 border-2 border-[#2A2B37] z-50 overflow-hidden"
            >
                <LogoSection />
                <SocialIcons />

            </motion.div>

            <TopRightRotatedButtons />
            <BottomLeftRotatedButtons />

        </motion.div>
    );
};

export default Header;