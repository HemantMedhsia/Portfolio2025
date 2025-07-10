import { lazy, Suspense } from "react";
import LoadingPage from "../pages/Loader";
import "../App.css";

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
    { path: "/loading", element: <LoadingPage /> },
    { path: "*", element: withLoader(<Error404 />) },
];

export default routes;
