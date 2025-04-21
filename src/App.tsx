import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Footer from "./Layout/Footer";
import "./App.css";
import Education from "./pages/Education";
import Project from "./pages/Project";
import TechLogoMarquee from "./components/Marquee/TechLogoMarquee";
import TechStackMarqueeHeader from "./components/TechStacksMarquee/TechStackMarqueeHeader";
import ContactMe from "./pages/Contactme";
import ContactMeHeader from "./components/Contactme/ContactmeHeader";
import Github from "./components/Github/Github";
import TestimonialMarquee from "./components/Marquee/TestimonialMarquee";
import TestimonialMarqueeHeader from "./components/Testimonials/TestimonialMarqueeHeader";
import Resume from "./pages/Resume";
import ResumeHeader from "./components/Resume/ResumeHeader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SmoothScroll from "./components/SmoothScrolling/SmoothScroll";
import MusicToggle from "./components/Music/MusicToggle";
import MobileWorkInProgress from "./pages/MobileWorkInProgress";
import Error404 from "./pages/Error404";


function App() {
  return (
    <Router>
      <div className='h-full min-h-screen relative w-full text-gray-300 items-center bg-[#000000] text-4xl overflow-hidden'>
        <MusicToggle/>
        <Header />
        <ScrollToTop />
        <SmoothScroll>
          <MobileWorkInProgress />
          <Routes>
            <Route
              path="/"
              element={
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
              }
            />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<>
              <ResumeHeader /> <Resume /></>} />
            <Route path="/education" element={<Education />} />
            <Route path="/contactme" element={<>
              <ContactMeHeader />
              <ContactMe />
            </>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </SmoothScroll>
      </div>
    </Router>
  );
}

export default App;
