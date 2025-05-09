import { useNavigate } from "react-router-dom";

const TopRightRotatedButtons: React.FC = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className=" hidden md:block text-[16px] fixed top-5/11 -right-63 transform -translate-y-1/2 rotate-90 z-40">
                <div className="flex gap-4">
                    <button className="bg-white/10 backdrop-blur-md border border-pink-400 text-pink-200 font-medium px-5 py-2 rounded-bl-xl rounded-br-xl shadow-lg hover:bg-pink-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer"
                        onClick={() => navigate("/experience")}>
                        WORK EXPERIENCE
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 rounded-bl-xl rounded-br-xl shadow-lg hover:bg-indigo-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer" onClick={() => navigate("/education")}>
                        EDUCATION
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-pink-400 text-pink-200 font-medium px-5 py-2 rounded-bl-xl rounded-br-xl shadow-lg hover:bg-pink-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer" onClick={() => navigate("/contactme")}>
                        CONTACT ME
                    </button>
                </div>
            </div>
        </>
    )
}

export default TopRightRotatedButtons;