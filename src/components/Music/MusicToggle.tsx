import { useMusic } from "../../context/MusicContext";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MusicToggle = () => {
  const { toggleMusic, isPlaying } = useMusic();

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-6 right-26 z-50 bg-gradient-to-tr from-pink-500 to-indigo-400 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all border-4 border-gray-400 overflow-hidden opacity-80 cursor-pointer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.8, rotate: 360 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isPlaying ? "pause" : "play"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isPlaying ? <FaPause size={18} color="black" /> : <FaPlay size={18} color="black" />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default MusicToggle;
