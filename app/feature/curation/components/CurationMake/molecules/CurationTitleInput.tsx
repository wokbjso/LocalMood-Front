"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface CurationTitleInputProps {
  placeholder: string;
  onChange?: (text: string) => void;
  initialValue: string;
}

export default function CurationTitleInput({
  placeholder,
  onChange,
  initialValue,
}: CurationTitleInputProps) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange && onChange(value);
    setInputValue(value);
  };
  return (
    <div className="pt-[4.2rem] w-full">
      <div
        className={twMerge(
          "w-full pb-[1.2rem] flex justify-between items-center border-b border-text-gray-6",
          inputValue.length > 0 && "border-primary-normal"
        )}
      >
        <input
          className="w-full h-[2rem] headline1-semibold placeholder:headline1-semibold placeholder:text-text-gray-4 outline-none"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          maxLength={25}
        />
        <div className="body2-medium text-text-gray-6 pl-[2rem]">
          {inputValue.length}/25
        </div>
      </div>
    </div>
  );
}
