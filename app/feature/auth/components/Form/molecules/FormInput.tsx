import { ChangeEvent, useState } from "react";
import { twMerge } from "tailwind-merge";

interface FormInputProps {
  type?: "text" | "password";
  label?: string;
  errorMsg?: string;
  onChange?: (text: string) => void;
  className?: string;
}

//Molecule
export default function FormInput({
  type = "text",
  label,
  errorMsg,
  onChange,
  className,
}: FormInputProps) {
  const [text, setText] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
    onChange && onChange(newText);
  };
  return (
    <div className={twMerge("flex flex-col", className)}>
      <span className="text-text-gray-6 body2-semibold">{label}</span>
      <input
        type={type}
        value={text}
        className="w-full py-[0.6rem] pl-[0.4rem] border-b-[0.1rem] border-text-gray-6 mt-[0.9rem] body2-medium"
        onChange={handleInputChange}
      />
      {errorMsg && (
        <span className="body3-semibold text-error mt-[0.8rem]">
          {errorMsg}
        </span>
      )}
    </div>
  );
}
