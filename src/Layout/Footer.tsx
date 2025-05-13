import React from "react";
import { ImGithub, ImLinkedin2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#000000] text-gray-400 py-8 px-4 md:px-20 hover:md:px-2 duration-300">
      <div className="md:mx-20 footer-gradient-border flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-700 pt-8 mt-8">

        <p className="text-sm text-center md:text-left tracking-wide">
          © {new Date().getFullYear()} Hemant's Portfolio. Crafted with 💙 & clean code.
        </p>

        <div className="relative flex font-thin items-center justify-center space-x-4">
          <a href="https://github.com/hemantmedhsia" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 cursor-pointer active:text-teal-300 active:scale-125"><ImGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/hemantmedhsia/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 cursor-pointer active:text-teal-300 active:scale-125"><ImLinkedin2 size={24} /></a>
          <a href="https://www.instagram.com/hemant_____g/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 cursor-pointer active:text-teal-300 active:scale-125"><IoLogoInstagram size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
