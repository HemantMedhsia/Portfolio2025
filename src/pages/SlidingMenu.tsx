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
      duration: 0.2,
      when: 'afterChildren',
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 30, transition: { duration: 0.1 } },
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
          className="sm:hidden border-l-2 border-dashed border-[#393a44] fixed top-0 right-0 h-full w-[75vw] z-50 p-4 bg-black/50 backdrop-blur-xl text-white flex flex-col justify-between shadow-2xl rounded-l-3xl"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close button */}
          <motion.button
            onClick={closeMenu}
            className="text-white text-3xl self-end p-1 hover:text-teal-400 transition"
            variants={itemVariants}
            aria-label="Close menu"
          >
            ✕
          </motion.button>

          {/* Menu items */}
          <div className="flex flex-col mt-6 space-y-6 text-2xl">
            {[
              { label: 'Home', path: '/' },
              { label: 'Experience', path: '/experience' },
              { label: 'Education', path: '/education' },
              { label: 'View Resume', path: '/resume' },
              { label: 'Contact Me', path: '/contactme' },
            ].map((item, index) => (
              <motion.div
                key={index}
                onClick={() => handleNavigate(item.path)}
                className="cursor-pointer py-2 pl-2 rounded-xl hover:bg-teal-500/10 transition-all active:bg-gray-500/30 active:scale-110"
                variants={itemVariants}
              >
                {item.label}
              </motion.div>
            ))}
          </div>

          {/* Social icons */}
          <motion.div
            className="flex justify-center items-center space-x-8 mt-8 mb-2 text-gray-300 footer-gradient-border pt-4"
            variants={itemVariants}
          >
            <a
              href="https://github.com/hemantmedhsia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform hover:scale-110 active:scale-125 active:text-teal-300"
            >
              <ImGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/hemantmedhsia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform hover:scale-110 active:scale-125 active:text-teal-300"
            >
              <ImLinkedin2 size={22} />
            </a>
            <a
              href="https://www.instagram.com/hemant_____g/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform hover:scale-110 active:scale-125 active:text-teal-300"
            >
              <IoLogoInstagram size={22} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlidingMenu;
