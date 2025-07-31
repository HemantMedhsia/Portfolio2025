import { motion } from "motion/react";
import LogoSection from "../components/Header/LogoSection";
import SocialIcons from "../components/Header/SocialIcons";


const Header: React.FC = () => {

    return (
        <motion.div>
            <motion.div
                className="fixed top-0 md:top-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-20 md:h-16 px-4 md:px-6 flex items-center justify-between border-t-2 border-b-2 border-dashed md:rounded-3xl md:border-double backdrop-blur-3xl bg-[#15161C]/50 md:border-2 border-[#2A2B37] z-49 overflow-hidden"
            >
                <LogoSection />
                <SocialIcons />

            </motion.div>

        </motion.div>
    );
};

export default Header;