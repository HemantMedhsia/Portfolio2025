import React from "react";
import Loader from "../Ui/Loader/Loader";

const LoadingPage: React.FC = () => {
    return (
        <div className="absolute w-full min-h-screen flex items-center justify-center overflow-hidden">
            <Loader />
        </div>
    );
};

export default LoadingPage;
