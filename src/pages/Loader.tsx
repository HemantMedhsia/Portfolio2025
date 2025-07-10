import React from "react";
import Loader from "../components/Loader/Loader";

const LoadingPage: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 w-full h-screen flex items-center justify-center text-gray-300 bg-black overflow-hidden">
            <Loader />
            <div className="absolute text-gray-700 bottom-3 text-2xl">Rendering Innovation...</div>
        </div>
    );
};

export default LoadingPage;
