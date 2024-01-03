"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Home from "@common/assets/icons/home/Home";
import Record from "@common/assets/icons/record/Record";
import Curation from "@common/assets/icons/curation/Curation";
import UserProfile from "@common/assets/icons/user/UserProfile";

export default function Footer() {
  const FOOTER_CATEGORY = [
    {
      icon: Home,
      text: "홈",
    },
    {
      icon: Record,
      text: "공간기록",
    },
    {
      icon: Curation,
      text: "큐레이션",
    },
    {
      icon: UserProfile,
      text: "마이페이지",
    },
  ];
  const [categoryIndex, setCategoryIndex] = useState<number>(0);
  const handleCategory = (i: number) => {
    setCategoryIndex(i);
  };
  return (
    <footer className="flex justify-between w-full h-[9.1rem] bg-background-gray-1 px-[3.2rem] pt-[0.8rem]">
      {FOOTER_CATEGORY.map((category, i) => (
        <div
          key={category.text}
          className="px-[1.2rem] flex flex-col items-center cursor-pointer"
          onClick={() => handleCategory(i)}
        >
          <category.icon color={categoryIndex === i ? "#32D58A" : undefined} />
          <span
            className={twMerge(
              "mt-[0.6rem]",
              categoryIndex === i && "text-primary-normal"
            )}
          >
            {category.text}
          </span>
        </div>
      ))}
    </footer>
  );
}
