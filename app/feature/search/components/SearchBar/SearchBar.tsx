"use client";

import { twMerge } from "tailwind-merge";
import Delete from "@common/assets/icons/close/close-gray.svg";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchIcon from "@common/assets/icons/search/SearchIcon";

interface SearchBarProps {
  variant?: "home" | "record";
  placeholder: string;
  className?: string;
}

export default function SearchBar({
  variant = "home",
  placeholder,
  className,
}: SearchBarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState<string>(
    (searchParams.get("search_query") as string) || ""
  );
  const queries = `?search_query=${searchText}`;
  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setSearchText(newText);
  };
  const handleTextDelete = () => {
    setSearchText("");
  };

  const searchIconClicked = () => {
    if (searchText.length < 2) {
      alert("2글자 이상 입력해주세요");
    } else if (searchText.length >= 2) {
      variant === "home"
        ? location.replace("/search/results" + queries)
        : location.replace("/record/search" + queries);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchIconClicked();
    }
  };

  useEffect(() => {
    // 화면에 표시되면서 input 요소에 focus
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      className={twMerge(
        "flex justify-between items-center relative w-full h-[3.6rem] pl-[1.2rem] pr-[0.6rem] py-[0.8rem] bg-background-gray-1",
        className
      )}
    >
      <div className="flex items-center w-full mr-[0.8rem]">
        <div onClick={searchIconClicked}>
          <SearchIcon />
        </div>
        <input
          ref={inputRef}
          className={twMerge(
            "body2-medium text-text-gray-5 w-full ml-[0.8rem] pl-[0.3rem] outline-none bg-transparent"
          )}
          value={searchText}
          placeholder={placeholder}
          onChange={handleSearchTextChange}
          onKeyDown={handleKeyPress}
        />
      </div>
      <Delete onClick={handleTextDelete} />
    </div>
  );
}
