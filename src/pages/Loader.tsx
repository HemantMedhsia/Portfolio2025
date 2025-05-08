import React from "react";
import { motion } from "framer-motion";

const LoadingPage: React.FC = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            {/* Container for Loading Spinner and Text */}
            <motion.div
                className="text-center text-white space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Loading Spinner */}
                <motion.div
                    className="w-24 h-24 border-8 border-solid border-t-transparent border-white rounded-full animate-spin mx-auto"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                ></motion.div>

                {/* Loading Text */}
                <motion.h1
                    className="text-3xl sm:text-4xl lg:text-5xl font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Loading...
                </motion.h1>

                {/* Optional: Logo or Message */}
                <motion.p
                    className="text-lg text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    Please wait while we get things ready for you.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default LoadingPage;
