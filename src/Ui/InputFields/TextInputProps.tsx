import React from "react";

interface TextInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  label,
  type = "text",
  placeholder = "",
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="peer w-full rounded-xl border border-[#2A2B37] bg-[#15161C] bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-300 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-400 focus:bg-black focus:ring-1 focus:ring-indigo-500 backdrop-blur-3xl"
      />
      <label
        htmlFor={id}
        className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-400 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
