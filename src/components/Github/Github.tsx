import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const Github: React.FC = () => {

    type ThemeInput = {
        light: string[];
        dark?: string[];
    };

    const explicitTheme: ThemeInput = {
        light: ['#fef3c7', '#fbcfe8', '#f9a8d4', '#d946ef', '#a855f7'],  // warm pastel glow
        dark: ['#1f1f1f', '#4c1d95', '#9333ea', '#e879f9', '#facc15'],  // rich purples, yellows & pinks
    };


    return (
        <section className="w-full px-4 py-10 md:py-16 bg-black text-white">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <div className="flex flex-col items-start justify-start w-4xl">
                    <motion.h1
                        className="mx-auto text-left md:text-5xl text-4xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Yeah, it’s not just colors — <br />it’s my sleep schedule in pixels.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-gray-400 text-left text-sm mt-6 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        Each green block represents a bug fixed, a feature added, or me arguing with my own code like “bhai tu chal kyun nahi raha?” 🤦‍♂️
                    </motion.p>
                </div>

                <motion.div
                    className="bg-[#15161C] backdrop-blur-md shadow-xl rounded-2xl p-4 sm:p-6 md:p-12 mt-12 
               transition-transform hover:scale-[1.02] border-2 border-dashed border-[#2A2B37] 
               overflow-x-auto w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1 }}
                >
                    <div className="min-w-[350px] sm:min-w-full flex justify-center">
                        <GitHubCalendar
                            username="HemantMedhsia"
                            blockSize={15}
                            blockMargin={7}
                            blockRadius={8}
                            fontSize={16}
                            theme={explicitTheme}
                            style={{ color: "#99a1af" }}
                        />
                    </div>
                </motion.div>


            </div>
        </section>
    );
};

export default Github;
