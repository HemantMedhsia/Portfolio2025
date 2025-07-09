import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../Ui/InputFields/TextInputProps";
import TextArea from "../Ui/InputFields/TextAreaProps";
import { saveContactme } from "../apis/Contactme/Contactme";
import SuccessPopup from "../components/Popups/SuccessPopup";

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

const Contactme: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsLoading(true);
        try {
            await saveContactme(data);
            reset();
            setIsSuccess(true);
        } catch (err) {
            console.error("Submission error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="text-gray-400 bg-black px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 relative overflow-hidden">

            <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 border-4 border-white dark:border-gray-900 top-10 -right-10 md:right-96 z-0"></div>
            <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 border-4 border-white dark:border-gray-900 bottom-10 -left-10 md:left-96 z-0"></div>

            <div className="relative z-10 py-10 w-full flex items-center justify-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-1/2 rounded-4xl border-dashed backdrop-blur-3xl border-2 border-[#2A2B37] p-6 md:p-10"
                >
                    <div className="-m-2 flex flex-wrap">
                        <div className="w-full md:w-1/2 p-2">
                            <TextInput<ContactFormData>
                                id="name"
                                name="name"
                                label="Name"
                                placeholder="Name"
                                register={register}
                                required
                            />
                            {errors.name && <p className="text-red-400 text-sm">Name is required</p>}
                        </div>

                        <div className="w-full md:w-1/2 p-2">
                            <TextInput<ContactFormData>
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Email"
                                register={register}
                                required
                            />
                            {errors.email && <p className="text-red-400 text-sm">Email is required</p>}
                        </div>

                        <div className="mt-4 w-full p-2">
                            <TextArea<ContactFormData>
                                id="message"
                                name="message"
                                label="Message"
                                placeholder="Message"
                                register={register}
                                validation={{
                                    required: "Message is required",
                                    minLength: { value: 20, message: "Minimum 20 characters required" },
                                }}
                                required
                            />
                            {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full p-2 mt-4">
                            <button
                                type="submit"
                                className="bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 rounded-xl rounded-br-xl shadow-lg hover:bg-indigo-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer text-sm active:bg-indigo-200/60 active:text-black"
                            >
                                SUBMIT
                            </button>
                            <button
                                type="button"
                                onClick={() => reset()}
                                className="bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 rounded-xl rounded-br-xl shadow-lg hover:bg-indigo-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer text-sm active:bg-indigo-200"
                            >
                                RESET
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {isLoading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/20 bg-opacity-60 backdrop-blur-sm">
                    <span className="loader w-16 h-16 border-4 border-white border-t-transparent rounded-2xl animate-spin "></span>
                    <div className="text-xl animated-gradient-text">Sending</div>
                </div>
            )}
            <SuccessPopup isOpen={isSuccess} onClose={() => setIsSuccess(false)} />

        </section>
    );
};

export default Contactme;
