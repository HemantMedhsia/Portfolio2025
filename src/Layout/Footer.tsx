import React from "react";
import SocialIcons from "../components/Header/SocialIcons";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#000000] text-gray-400 py-8 px-4 md:px-20 hover:md:px-2 duration-300">
      <div className="md:mx-20 footer-gradient-border flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-700 pt-8 mt-8">

        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Hemant's Portfolio. Crafted with 💙 & clean code.
        </p>

        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
