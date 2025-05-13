import { ImGithub, ImLinkedin2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { CiMenuFries } from "react-icons/ci";
import { useMusic } from "../../context/MusicContext";

const SocialIcons: React.FC = () => {
    const { isPlaying, toggleMenu } = useMusic();

    return (
        <>
            <div className="relative flex font-thin items-center justify-center space-x-4">
                {isPlaying && (
                    <DotLottieReact
                        src="https://lottie.host/a82cdb51-bea7-4538-9509-19cb323a5e2c/2wPmYKSeVZ.lottie"
                        loop
                        autoplay
                        className="w-50 h-10 absolute -top-3 -left-34 pointer-events-none hidden md:block"
                    />
                )}
                <a href="https://github.com/hemantmedhsia" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 cursor-pointer hidden md:block"><ImGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/hemantmedhsia/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 cursor-pointer hidden md:block"><ImLinkedin2 size={24} /></a>
                <a href="https://www.instagram.com/hemant_____g/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 cursor-pointer hidden md:block"><IoLogoInstagram size={24} /></a>
                <div onClick={toggleMenu} className="active:bg-grey-300 active:text-black block md:hidden "><CiMenuFries size={28} /></div>
            </div>
        </>
    )
}

export default SocialIcons;