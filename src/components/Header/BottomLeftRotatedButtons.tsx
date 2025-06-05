import { useNavigate } from "react-router-dom";

const BottomLeftRotatedButtons: React.FC = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="hidden md:block text-[20px] fixed bottom-60 -left-48 z-40 -rotate-90">

                <button className="bg-white/10 backdrop-blur-md border border-pink-400 text-pink-200 font-medium px-5 py-2 rounded-bl-xl rounded-br-xl shadow-lg hover:bg-pink-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer" onClick={() => navigate("/resume")}>
                    VIEW RESUME
                </button>
                <button onClick={() => {
                    localStorage.setItem("scrollToProjects", "true");
                    navigate("/");
                    const el = document.getElementById("projects");
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                    }
                }} className="bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 rounded-bl-xl rounded-br-xl shadow-lg hover:bg-indigo-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer mx-4">
                    MY PROJECTS
                </button>
            </div>
        </>
    )
}

export default BottomLeftRotatedButtons;