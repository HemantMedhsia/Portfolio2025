import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useMusic } from "../context/MusicContext";
import MusicToggle from "../components/Music/MusicToggle";

const MobileWorkInProgress = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isPlaying } = useMusic();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {isMobile && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#000] via-gray-900 to-[#000] flex flex-col items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Lottie animation */}
          <div className="absolute top- w-60 h-20">
            <DotLottieReact
              src="https://lottie.host/a82cdb51-bea7-4538-9509-19cb323a5e2c/2wPmYKSeVZ.lottie"
              loop
              autoplay
            />
          </div>

          <motion.div
            className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-3xl p-8 max-w-sm text-center text-white shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <div className="text-5xl mb-4">🚧</div>
            <h1 className="text-2xl font-bold mb-2">Mobile View Under Construction</h1>
            <p className="text-gray-300 mb-4 text-sm">
              Please use <span className="font-semibold text-white">desktop</span> for full experience. I'm working on full responsiveness!
            </p>

            <div className="text-xs text-gray-400 mb-2">
              📅 Expected launch: <span className="font-semibold">Soon™</span>
            </div>

            {!isPlaying && (
              <div className="text-sm text-pink-300 mt-3 animate-pulse">
                🎵 Tap the button below to play the tune!
              </div>
            )}
          </motion.div>

          <MusicToggle />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileWorkInProgress;
