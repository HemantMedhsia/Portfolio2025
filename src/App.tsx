import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

// Global Layout Components
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SmoothScroll from "./components/SmoothScrolling/SmoothScroll";
import routes from "./Routes/RoutesConfig";
import LoadingPage from "./pages/Loader";
import "./App.css";
import MouseFollower from "./components/MouseFollower/MouseFollower";
import SlidingMenu from "./pages/SlidingMenu";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <ScrollProgressBar />
    <SlidingMenu />
    <Header />
    <ScrollToTop />
    <SmoothScroll>
      {children}
      <Footer />
    </SmoothScroll>
  </>
);

function App() {
  return (
    <>
      <div className="app-container bg-black text-gray-300 text-4xl w-full min-h-screen h-full overflow-hidden relative">
        <MouseFollower />
        <MainLayout>
          <Suspense
            fallback={
              <div>
                <LoadingPage />
              </div>
            }
          >
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
        </MainLayout>
      </div>
    </>
  );
}

export default App;
