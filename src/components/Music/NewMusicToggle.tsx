import { useMusic } from "../../context/MusicContext";

const NewMusicToggle = () => {
  const { toggleMusic, isPlaying } = useMusic();

  return (
   <button className="cursor-pointer absolute top-1/13 md:top-1/10 right-5/7 md:right-48 z-50 h-10 w-20 md:h-12 border-2 border-purple-500 rounded-full p-1 md:p-2">
  <div
    onClick={toggleMusic}
    className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-7 md:h-7 rounded-full bg-white 
        cursor-pointer transition-all duration-500 ease-in-out z-20 flex justify-center items-center ${
          isPlaying ? "left-[56%]" : "left-[8%]"
        }`}
  ></div>

  {/* Muted Icon */}
  <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10">
    <img
      width={10}
      src="/svg/muted.svg"
      alt="muted"
      className={`${!isPlaying ? "block" : "hidden"}`}
    />
  </div>

  {/* Unmuted Animation */}
  <div
    className={`absolute rotate-180 left-2 md:left-4 top-1/2 transform -translate-y-1/2 flex gap-0.5 md:gap-1 z-10 ${
      isPlaying ? "flex-row" : "hidden"
    }`}
  >
    <div className="w-[1.5px] md:w-[2px] bg-white animate-rect1Anim"></div>
    <div className="w-[1.5px] md:w-[2px] bg-white animate-rect2Anim"></div>
    <div className="w-[1.5px] md:w-[2px] bg-white animate-rect3Anim"></div>
  </div>
</button>

  );
};

export default NewMusicToggle;
