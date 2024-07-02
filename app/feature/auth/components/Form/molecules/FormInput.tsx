import { ChangeEvent, useState } from "react";
import { twMerge } from "tailwind-merge";
import FormErrorMsg from "./FormErrorMsg";

interface FormInputProps {
  type?: "text" | "password";
  field?: string;
  label?: string;
  errorMsg?: string;
  onChange?: (text: string) => void;
  className?: string;
  dataCy?: string;
}

//Molecule
export default function FormInput({
  type = "text",
  field,
  label,
  errorMsg,
  onChange,
  className,
  dataCy,
}: FormInputProps) {
  const [text, setText] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
    onChange && onChange(newText);
  };

  return (
    <div className={twMerge("flex flex-col", className)}>
      <label htmlFor={field} className="text-text-gray-6 body2-semibold">
        {label}
      </label>
      <input
        data-cy={dataCy}
        id={field}
        type={type}
        value={text}
        className="w-full py-[0.6rem] pl-[0.4rem] border-b-[0.1rem] border-text-gray-6 mt-[0.9rem] body2-medium"
        onChange={handleInputChange}
      />
      <FormErrorMsg testId={`${field}-error`} errorMsg={errorMsg} />
    </div>
  );
}
