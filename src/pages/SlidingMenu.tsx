import { motion, AnimatePresence } from 'framer-motion';
import { useMusic } from '../context/MusicContext';
import { useNavigate } from 'react-router-dom';
import { ImGithub, ImLinkedin2 } from 'react-icons/im';
import { IoLogoInstagram } from 'react-icons/io5';

const menuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: '100%',
    transition: {
      type: 'tween',
      duration: 0.3,
      when: 'afterChildren',
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: 40,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
};

const SlidingMenu = () => {
  const { isOpen, closeMenu } = useMusic();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    closeMenu();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="slide-menu"
          className="fixed top-0 right-0 h-full w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[35vw] z-50 p-6 bg-white/5 backdrop-blur-xl border-l-2 border-[#2A2B37] text-white shadow-[0_8px_32px_rgba(0,0,0,1)] rounded-l-3xl flex flex-col justify-between "
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close Button */}
          <motion.button
            onClick={closeMenu}
            className="text-white text-4xl self-end hover:text-red-400 hover:rotate-90 transition-transform duration-300"
            variants={itemVariants}
            aria-label="Close menu"
          >
            ✕
          </motion.button>

          {/* Menu Items */}
          <div className="flex flex-col mt-12 space-y-6 text-2xl md:text-3xl font-semibold">
            {[
              { label: 'Home', path: '/' },
              { label: 'Experience', path: '/experience' },
              { label: 'Education', path: '/education' },
              { label: 'View Resume', path: '/resume' },
              { label: 'Contact Me', path: '/contactme' },
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => handleNavigate(item.path)}
                className="px-4 py-3 font-thin rounded-3xl border border-[#2A2B37] bg-black/30 hover:bg-gradient-to-r from-teal-500/30 to-purple-500/30 active:scale-105 transition-all duration-400 shadow-inner hover:shadow-lg hover:text-white text-gray-400"
                variants={itemVariants}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center items-center space-x-8 mt-12 text-gray-300"
            variants={itemVariants}
          >
            <a
              href="https://github.com/hemantmedhsia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-125 transition-transform duration-200"
            >
              <ImGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/hemantmedhsia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-125 transition-transform duration-200"
            >
              <ImLinkedin2 size={24} />
            </a>
            <a
              href="https://www.instagram.com/hemant_____g/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-125 transition-transform duration-200"
            >
              <IoLogoInstagram size={24} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlidingMenu;
