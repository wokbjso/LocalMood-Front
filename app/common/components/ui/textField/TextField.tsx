"use client";
import React, { useState } from "react";

interface TextFieldProps {
  onChange?: (text: string) => void;
}

export default function TextField({ onChange }: TextFieldProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange && onChange(value);
    setInputValue(value);
  };
  return (
    <div className="pt-[4.2rem]">
      <div className="w-full pb-[1.2rem] flex justify-between items-center border-b border-text-gray-6">
        <input
          className="w-[33.5rem] h-[2rem] headline1-semibold placeholder:headline1-semibold placeholder:text-text-gray-4 outline-none"
          placeholder="새 큐레이션"
          value={inputValue}
          onChange={handleInputChange}
          maxLength={49}
        />
        <div className="body2-medium text-text-gray-6 pl-[1rem]">
          {inputValue.length}/50
        </div>
      </div>
    </div>
  );
}
