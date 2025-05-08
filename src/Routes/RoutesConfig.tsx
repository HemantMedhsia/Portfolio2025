import { lazy } from "react";
import LoadingPage from "../pages/Loader";

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

// Route Configurations
const routes = [
    {
        path: "/",
        element: (
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
    { path: "/experience", element: <Experience /> },
    {
        path: "/resume",
        element: (
            <>
                <ResumeHeader />
                <Resume />
            </>
        ),
    },
    { path: "/education", element: <Education /> },
    {
        path: "/contactme",
        element: (
            <>
                <ContactMeHeader />
                <Contactme />
            </>
        ),
    },
    { path: "/l", element: <LoadingPage /> },
    { path: "*", element: <Error404 /> },
];

export default routes;