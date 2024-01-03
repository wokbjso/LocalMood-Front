"use client";

import { twMerge } from "tailwind-merge";
import Search from "@common/assets/icons/search/search.svg";
import Delete from "@common/assets/icons/close/close-gray.svg";
import { ChangeEvent, useState } from "react";

interface SearchBarProps {
  placeholder: string;
  activateSearch?: () => void;
  onChange?: (text: string) => void;
  className?: string;
}

export default function SearchBar({
  placeholder,
  activateSearch,
  onChange,
  className,
}: SearchBarProps) {
  const [text, setText] = useState("");
  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
    onChange && onChange(newText);
  };
  const handleTextDelete = () => {
    setText("");
    onChange && onChange("");
  };
  return (
    <div
      className={twMerge(
        "flex justify-between items-center relative w-full h-[3.6rem] pl-[1.2rem] pr-[0.6rem] py-[0.8rem] bg-background-gray-1",
        className
      )}
    >
      <div className="flex items-center">
        <Search onClick={activateSearch} />
        <input
          className={twMerge(
            "body2-medium text-text-gray-5 w-full ml-[0.8rem] pl-[0.3rem]"
          )}
          value={text}
          placeholder={placeholder}
          onChange={handleSearchTextChange}
        />
      </div>
      <Delete onClick={handleTextDelete} />
    </div>
  );
}
