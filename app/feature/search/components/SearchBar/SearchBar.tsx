import { twMerge } from "tailwind-merge";
import Search from "@common/assets/icons/search/search.svg";
import Delete from "@common/assets/icons/close/close-gray.svg";
import { ChangeEvent, useState } from "react";

interface SearchBarProps {
  variant?: "long" | "short";
  placeholder: string;
  activateSearch: () => void;
  onChange?: (text: string) => void;
  className?: string;
}

export default function SearchBar({
  variant = "long",
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
        "flex justify-between relative w-[33.6rem] h-[3.6rem] pl-[1.2rem] pr-[0.6rem] py-[0.8rem] bg-gray-1",
        variant === "short" && "w-[31.1rem]",
        className
      )}
    >
      <Search onClick={activateSearch} />
      <input
        className={twMerge(
          "body2-medium text-gray-5",
          variant === "long" ? "w-[25.8rem]" : "w-[23.3rem]"
        )}
        value={text}
        placeholder={placeholder}
        onChange={handleSearchTextChange}
      />
      <Delete onClick={handleTextDelete} />
    </div>
  );
}
