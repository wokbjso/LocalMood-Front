"use client";
import React, { useState } from "react";

export default function TextField() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return (
    <div className="pt-[4.2rem]">
      <div className="w-[33.5rem] pb-[1.2rem] flex justify-between items-center border-b border-text-gray-6">
        <input
          className="w-[33.5rem] h-[2rem] headline1-semibold placeholder:headline1-semibold placeholder:text-text-gray-4 outline-none"
          placeholder="새 큐레이션"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="body2-medium text-text-gray-6 pl-[1rem]">
          {inputValue.length}/50
        </div>
      </div>
    </div>
  );
}
