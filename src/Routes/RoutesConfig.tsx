import {lazy, Suspense, useState } from "react";
import LoadingPage from "../pages/Loader";
import { GeneralSittingRoom } from "../pages/Deletethispageafteruse-Sitting";
import { LuArmchair } from "react-icons/lu";
import "../App.css";
import { PaymentPopup } from "../pages/PaymentPopupProps";

// Lazy Load Pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Project = lazy(() => import("../pages/Project"));
const Experience = lazy(() => import("../pages/Experience"));
const Education = lazy(() => import("../pages/Education"));
const Resume = lazy(() => import("../pages/Resume"));
const Contactme = lazy(() => import("../pages/Contactme"));
const Error404 = lazy(() => import("../pages/Error404"));

// Lazy Load Components
const TechStackMarqueeHeader = lazy(() => import("../components/TechStacksMarquee/TechStackMarqueeHeader"));
const TechLogoMarquee = lazy(() => import("../components/Marquee/TechLogoMarquee"));
const Github = lazy(() => import("../components/Github/Github"));
const TestimonialMarqueeHeader = lazy(() => import("../components/Testimonials/TestimonialMarqueeHeader"));
const TestimonialMarquee = lazy(() => import("../components/Marquee/TestimonialMarquee"));
const ResumeHeader = lazy(() => import("../components/Resume/ResumeHeader"));
const ContactMeHeader = lazy(() => import("../components/Contactme/ContactmeHeader"));

const withLoader = (component: React.ReactNode) => (
    <Suspense fallback={<LoadingPage />}>
        {component}
    </Suspense>
);

const DemoWithPopup = () => {
    const [showPopup, setShowPopup] = useState(true);

    return (
        <div className="mt-20 min-h-screen px-4 py-6 dark:bg-zinc-950 bg-[#FFF2EB] text-black dark:text-white">
            <h1 className="text-4xl animated-gradient-text font-bold text-center mb-10 tracking-wide">
                General Sitting Room
            </h1>

            <GeneralSittingRoom />

            {showPopup && (
                <PaymentPopup
                    seatId="A1"
                    onClose={() => setShowPopup(false)}
                    
                />
            )}

            <div className="flex justify-center mt-10">
                <button
                    onClick={() => setShowPopup(true)}
                    className="bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 rounded-xl shadow-lg hover:bg-indigo-200/60 hover:text-black transition-all duration-300 tracking-widest text-sm active:bg-indigo-200/60 active:text-black"
                >
                    Proceed to Pay →
                </button>
            </div>

            <div className="mt-12 text-center">
                <div className="flex justify-center gap-6 flex-wrap text-lg font-medium text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                        <LuArmchair className="text-green-500 text-2xl" />
                        <span>Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LuArmchair className="text-gray-700 text-2xl" />
                        <span>Booked</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LuArmchair className="text-2xl text-red-500 rounded-full" />
                        <span>Selected</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Route Configurations
const routes = [
    {
        path: "/",
        element: withLoader(
            <>
                <Home />
                <About />
                <Project />
                <TechStackMarqueeHeader />
                <TechLogoMarquee />
                <Github />
                <TestimonialMarqueeHeader />
                <TestimonialMarquee />
            </>
        ),
    },
    { path: "/experience", element: withLoader(<Experience />) },
    {
        path: "/resume",
        element: withLoader(
            <>
                <ResumeHeader />
                <Resume />
            </>
        ),
    },
    { path: "/education", element: withLoader(<Education />) },
    {
        path: "/contactme",
        element: withLoader(
            <>
                <ContactMeHeader />
                <Contactme />
            </>
        ),
    },
    { path: "/l", element: <LoadingPage /> },
    { 
        path: "/sitBookingDemo", element: <DemoWithPopup />
    },
    { path: "*", element: withLoader(<Error404 />) },
];

export default routes;
