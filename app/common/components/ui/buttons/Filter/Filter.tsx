"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ArrowDown from "@common/assets/icons/arrow/arrow-down.svg";
import ArrowUp from "@common/assets/icons/arrow/ArrowUp";

interface FilterProps {
  variant?: "static" | "showOptions";
  photo?: string[];
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function Filter({
  variant = "static",
  photo,
  label,
  onClick,
  className,
}: FilterProps) {
  const [selected, setSelected] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const filterClicked = () => {
    onClick && onClick;
    setSelected((prev) => !prev);
    if (variant === "showOptions") setOpenOptions((prev) => !prev);
  };
  return (
    <button
      className={twMerge(
        !photo
          ? "flex items-center bg-background-gray-2 px-[1.4rem] py-[1rem] rounded-[36px]"
          : "flex items-center border-[0.1rem] py-[0.4rem] pr-[1.2rem] pl-[0.4rem] rounded-[36px]",
        selected &&
          photo &&
          "bg-primary-selected border-[1.5px] border-primary-normal",
        selected && !photo && "bg-text-gray-8 ",
        className
      )}
      onClick={filterClicked}
    >
      {photo && (
        <div
          className="w-[3.2rem] h-[3.2rem] mr-[0.8rem] bg-cover rounded-full"
          style={{ backgroundImage: `url(${photo})` }}
        />
      )}
      <span
        className={twMerge(
          !photo ? "body2-medium" : "body3-medium",
          selected && !photo && "text-white"
        )}
      >
        {label}
      </span>
      {variant === "showOptions" && openOptions && (
        <ArrowUp className="ml-[0.2rem]" color="#FAFAFA" />
      )}
      {variant === "showOptions" && !openOptions && (
        <ArrowDown className="ml-[0.2rem]" />
      )}
    </button>
  );
}
