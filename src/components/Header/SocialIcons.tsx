import { ImGithub, ImLinkedin2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { useMusic } from "../../context/MusicContext";

const SocialIcons: React.FC = () => {
    const { toggleMenu } = useMusic();

    return (
        <>
            <div className="relative flex font-thin items-center justify-center space-x-4 duration-300">
                <a href="https://github.com/hemantmedhsia" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 cursor-pointer hidden md:block"><ImGithub size={22} /></a>
                <a href="https://www.linkedin.com/in/hemantmedhsia/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 cursor-pointer hidden md:block"><ImLinkedin2 size={22} /></a>
                <a href="https://www.instagram.com/hemant_____g/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 cursor-pointer hidden md:block"><IoLogoInstagram size={22} /></a>
                <div onClick={toggleMenu} className="active:bg-grey-300 active:text-black block hover:text-teal-300 cursor-pointer hover:scale-130 duration-500"><CiMenuFries size={32} /></div>
            </div>
        </>
    )
}

export default SocialIcons;