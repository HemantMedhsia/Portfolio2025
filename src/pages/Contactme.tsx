// src/components/ContactSlide.tsx
import React from "react";
import TextInput from "../Ui/InputFields/TextInputProps";
import TextArea from "../Ui/InputFields/TextAreaProps";

const Contactme: React.FC = () => {
    return (
        <section className="text-gray-400 bg-black px-48 relative">

            <div
                className={`absolute w-40 h-40 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 border-4 border-white dark:border-gray-900 top-10 -right-2 md:right-35`}
            ></div>

            <div
                className={`absolute w-40 h-40 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 border-4 border-white dark:border-gray-900 bottom-10 -right-2 md:left-35`}
            ></div>

            <div className=" py-10 w-full flex items-center justify-between 
                rounded-4xl border-dashed backdrop-blur-3xl border-2 border-[#2A2B37] z-50 overflow-hidden">
                <div className="mx-auto md:w-2/3 lg:w-1/2">
                    <div className="-m-2 flex flex-wrap">
                        
                        <div className="w-1/2 p-2">
                            <TextInput id="name" name="name" label="Name" placeholder="Name" />
                        </div>

                        <div className="w-1/2 p-2">
                            <TextInput id="email" name="email" type="email" label="Email" placeholder="Email" />
                        </div>

                        <div className="mt-4 w-full p-2">
                            <TextArea id="message" name="message" label="Message" placeholder="Message" />
                        </div>

                        <div className=" flex gap-4 w-full p-2">

                            <button className="bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 rounded-xl rounded-br-xl shadow-lg hover:bg-indigo-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer text-sm">
                                SUBMIT
                            </button>

                            <button className="bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 rounded-xl rounded-br-xl shadow-lg hover:bg-indigo-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer text-sm">
                                RESET
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactme;
