import { UseFormRegister, FieldValues, Path, RegisterOptions } from "react-hook-form";

interface TextAreaProps<T extends FieldValues> {
  id: string;
  name: Path<T>;
  label: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  required?: boolean;
  validation?: RegisterOptions<T, Path<T>>;
}

function TextArea<T extends FieldValues>({
  id,
  name,
  label,
  placeholder = "",
  register,
  validation = {},
}: TextAreaProps<T>) {
  return (
    <div className="relative">
      <textarea
        id={id}
        placeholder={placeholder}
        {...register(name, validation)}
        className="peer h-32 w-full resize-none rounded-2xl border border-[#2A2B37] bg-[#15161C] bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-300 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-400 focus:bg-black focus:ring-1 focus:ring-indigo-500 backdrop-blur-3xl"
      />
      <label
        htmlFor={id}
        className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-400 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
      >
        {label}
      </label>
    </div>
  );
}

export default TextArea;
