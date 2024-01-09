"use client";

import ArrowBack from "@common/assets/icons/arrow/ArrowBack";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { TopBarProps } from "../type";

export default function BasicTopBar({
  color = "white",
  children,
  className,
}: TopBarProps) {
  const router = useRouter();
  const arrowBackClicked = () => {
    router.back();
  };
  return (
    <div
      className={twMerge(
        "w-full pt-[1.8rem] pb-[1.2rem] px-[2rem] flex justify-between",
        className
      )}
    >
      <ArrowBack color={color} onClick={arrowBackClicked} />
      {children && children}
    </div>
  );
}
