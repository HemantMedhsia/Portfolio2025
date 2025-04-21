import { motion } from "framer-motion";
import hlogo from "../../assets/Images/h-logo.jpg";
import { useNavigate } from "react-router-dom";

const LogoSection: React.FC = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="flex items-center justify-center space-x-4">
                <div onClick={() => navigate("/")} className="flex items-center justify-center cursor-pointer">
                    <img
                        src={hlogo}
                        alt="Logo"
                        className="h-10 p-0 rounded-2xl w-auto object-contain"
                    />
                </div>

                <div className="relative flex justify-center items-center overflow-hidden w-40 h-10">
                    <motion.div
                        className="absolute whitespace-nowrap text-white font-thin text-sm"
                        animate={{ x: ["2%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 2,
                            repeatDelay: 2,
                            ease: [3, 1, 0.5, 3.0]
                        }}
                    >
                        <span className="mr-10">HEMANT MEDHSIA</span>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default LogoSection;