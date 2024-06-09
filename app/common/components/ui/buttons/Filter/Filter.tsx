"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import ArrowDownIcon from "@/common/assets/icons/arrow/ArrowDownIcon";
import ArrowUpIcon from "@/common/assets/icons/arrow/ArrowUpIcon";
import Label from "../../text/Label";

interface FilterProps {
  variant?: "static" | "showOptions";
  photo?: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Filter({
  variant = "static",
  photo,
  label,
  selected = false,
  onClick,
  disabled = false,
  className,
}: FilterProps) {
  const [openOptions, setOpenOptions] = useState(false);

  const filterClicked = () => {
    onClick && onClick();
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
        selected && !photo && "bg-text-gray-8",
        className
      )}
      onClick={filterClicked}
      disabled={disabled}
    >
      {photo && (
        <div className="w-[3.2rem] h-[3.2rem] mr-[0.8rem] relative">
          <Image
            alt="필터 사진"
            src={photo}
            fill
            sizes="15vw,10vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            className="rounded-full object-cover"
          />
        </div>
      )}
      <Label
        className={twMerge(
          !photo ? "body2-medium" : "body3-medium",
          selected && !photo && "text-white"
        )}
      >
        {label}
      </Label>
      {variant === "showOptions" && openOptions && (
        <ArrowUpIcon className="ml-[0.2rem]" color="#9E9E9E" />
      )}
      {variant === "showOptions" && !openOptions && (
        <ArrowDownIcon className="ml-[0.2rem]" />
      )}
    </button>
  );
}
