import { motion, AnimatePresence } from 'framer-motion';
import { useMusic } from '../context/MusicContext';
import { useNavigate } from 'react-router-dom';

const menuVariants = {
    hidden: {
        x: '100%',
    },
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
            duration: 0.1,
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

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    key="slide-menu"
                    className="fixed top-0 right-0 w-2/3 h-full bg-black z-50 p-6 shadow-lg flex flex-col space-y-6 text-gray-300 text-3xl z-50"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.button
                        variants={itemVariants}
                        onClick={closeMenu}
                        className="self-end text-gray-300 text-2xl"
                    >
                        ✕
                    </motion.button>
                    <motion.div
                        onClick={() => navigate('/')}
                        variants={itemVariants}
                        className="hover:text-teal-300 border-dashed border-b-1 mb-12 cursor-pointer"
                    >
                        Home
                    </motion.div>
                    <motion.div
                        onClick={() => navigate('/experience')}
                        variants={itemVariants}
                        className="hover:text-teal-300 border-dashed border-b-1 mb-12"
                    >
                        Experience
                    </motion.div>
                    <motion.div
                        onClick={() => navigate('/education')}
                        variants={itemVariants}
                        className="hover:text-teal-300 border-dashed border-b-1 mb-12"
                    >
                        Education
                    </motion.div>
                    <motion.div
                        onClick={() => navigate('/resume')}
                        variants={itemVariants}
                        className="hover:text-teal-300 border-dashed border-b-1 mb-12"
                    >
                        View Resume
                    </motion.div>
                    <motion.div
                        onClick={() => navigate('/contactme')}
                        variants={itemVariants}
                        className="hover:text-teal-300 border-dashed border-b-1 mb-12"
                    >
                        Contact Me
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SlidingMenu;
