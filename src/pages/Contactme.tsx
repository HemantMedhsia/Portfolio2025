import React from "react";
import TextInput from "../Ui/InputFields/TextInputProps";
import TextArea from "../Ui/InputFields/TextAreaProps";

const Contactme: React.FC = () => {
    return (
        <section className="text-gray-400 bg-black px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 relative overflow-hidden">

            <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 border-4 border-white dark:border-gray-900 top-10 -right-10 md:right-96 z-0"></div>

            <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 border-4 border-white dark:border-gray-900 bottom-10 -left-10 md:left-96 z-0"></div>

            <div className="relative z-10 py-10 w-full flex items-center justify-center">
                <div className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-1/2 rounded-4xl border-dashed backdrop-blur-3xl border-2 border-[#2A2B37] p-6 md:p-10">
                    <div className="-m-2 flex flex-wrap">

                        <div className="w-full md:w-1/2 p-2">
                            <TextInput id="name" name="name" label="Name" placeholder="Name" />
                        </div>

                        <div className="w-full md:w-1/2 p-2">
                            <TextInput id="email" name="email" type="email" label="Email" placeholder="Email" />
                        </div>

                        <div className="mt-4 w-full p-2">
                            <TextArea id="message" name="message" label="Message" placeholder="Message" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full p-2 mt-4">

                            <button className="bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 rounded-xl rounded-br-xl shadow-lg hover:bg-indigo-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer text-sm active:bg-indigo-200/60 active:text-black">
                                SUBMIT
                            </button>

                            <button className="bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 rounded-xl rounded-br-xl shadow-lg hover:bg-indigo-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer text-sm active:bg-indigo-200">
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
