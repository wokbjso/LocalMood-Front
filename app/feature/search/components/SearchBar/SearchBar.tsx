"use client";

import { twMerge } from "tailwind-merge";
import Search from "@common/assets/icons/search/search.svg";
import Delete from "@common/assets/icons/close/close-gray.svg";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
  const [searchText, setSearchText] = useState("");
  const queries = `?search_query=${searchText}`;
  const keyword_search_queries = `?keyword_search=${
    searchParams.get("keyword_search")
      ? searchParams.get("keyword_search")
      : false
  }`;
  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setSearchText(newText);
  };
  const handleTextDelete = () => {
    setSearchText("");
  };
  useEffect(() => {
    if (searchText.length === 0) {
      router.push(
        variant === "home"
          ? "/search" + keyword_search_queries
          : "/record/search"
      );
    } else {
      router.push(
        variant === "home"
          ? "/search/results" + queries
          : "/record/search" + queries
      );
    }
  }, [searchText]);
  return (
    <div
      className={twMerge(
        "flex justify-between items-center relative w-full h-[3.6rem] pl-[1.2rem] pr-[0.6rem] py-[0.8rem] bg-background-gray-1",
        className
      )}
    >
      <div className="flex items-center">
        <div>
          <Search />
        </div>
        <input
          className={twMerge(
            "body2-medium text-text-gray-5 w-full ml-[0.8rem] pl-[0.3rem] outline-none"
          )}
          value={searchText}
          placeholder={placeholder}
          onChange={handleSearchTextChange}
        />
      </div>
      <Delete onClick={handleTextDelete} />
    </div>
  );
}
