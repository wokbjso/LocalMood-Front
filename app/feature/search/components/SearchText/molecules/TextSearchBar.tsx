"use client";

import { twMerge } from "tailwind-merge";
import React, { ChangeEvent, useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchIcon from "@/common/assets/icons/search/SearchIcon";
import { useRecoilValue } from "recoil";
import { searchSortState } from "@/feature/search/state/sortState";
import CloseGrayIcon from "@/common/assets/icons/close/CloseGrayIcon";

interface TextSearchBarProps {
  variant?: "home" | "record";
  placeholder: string;
  className?: string;
}

//Molecule
export default function TextSearchBar({
  variant = "home",
  placeholder,
  className,
}: TextSearchBarProps) {
  const searchParams = useSearchParams();

  const state = useRecoilValue(searchSortState);

  const [searchText, setSearchText] = useState<string>(
    (searchParams.get("search_query") as string) || ""
  );
  const queries =
    `?search_query=${searchText.trim()}` +
    `${variant === "home" ? `&sort=${state}` : ""}`;
  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setSearchText(newText);
  };
  const handleTextDeleteClick = useCallback(() => {
    setSearchText("");
  }, []);

  const searchIconClicked = () => {
    if (searchText.trim().length < 2) {
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
          className={twMerge(
            "body2-medium text-text-gray-6 placeholder-text-gray-6 w-full ml-[0.8rem] pl-[0.3rem] outline-none bg-transparent"
          )}
          value={searchText}
          placeholder={placeholder}
          onChange={handleSearchTextChange}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="flex justify-center items-center bg-line-gray-3 rounded-full w-[2.4rem] h-[2.4rem]">
        <CloseGrayIcon onClick={handleTextDeleteClick} />
      </div>
    </div>
  );
}
