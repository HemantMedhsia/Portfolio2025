import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

// Global Layout Components
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SmoothScroll from "./components/SmoothScrolling/SmoothScroll";
import MusicToggle from "./components/Music/MusicToggle";

import routes from "./Routes/RoutesConfig";
import MobileWorkInProgress from "./pages/MobileWorkInProgress";
import LoadingPage from "./pages/Loader";

// Layout Wrapper
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <MusicToggle />
    <Header />
    <ScrollToTop />
    <SmoothScroll>
      {children}
      <Footer />
    </SmoothScroll>
  </>
);

function App() {
  const isMobile = window.innerWidth <= 768;

  return (
    <Router>
      <div className="app-container bg-black text-gray-300 text-4xl w-full min-h-screen h-full overflow-hidden relative">
        {isMobile && <MobileWorkInProgress />}
        <MainLayout>
          <Suspense fallback={<div><LoadingPage/></div>}>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
