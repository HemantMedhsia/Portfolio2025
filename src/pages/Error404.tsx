import { useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const { isPlaying } = useMusic();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-t to-br from-[#000] via-gray-900 to-[#000] text-white px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="text-center z-10">
        <h1 className="text-4xl font-bold mb-2">Oops! Page Not Found</h1>
        <p className="text-gray-300 text-sm mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {!isPlaying && (
          <motion.p
            className="text-pink-300 mb-4 animate-pulse text-sm"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          >
            🎵 Tap the button to play some tune while you're here!
          </motion.p>
        )}

        <button
          onClick={() => navigate("/")}
          className="bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 rounded-xl rounded-br-xl shadow-lg hover:bg-indigo-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer text-sm"
        >
          Go to Home
        </button>
      </div>
    </motion.div>
  );
};

export default Error404;
