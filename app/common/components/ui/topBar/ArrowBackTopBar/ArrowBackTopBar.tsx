"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { TopBarProps } from "../type";
import ArrowBackIcon from "@/common/assets/icons/arrow/ArrowBackIcon";

//Molecule
export default function ArrowBackTopBar({
  color = "white",
  children,
  className,
}: TopBarProps) {
  const router = useRouter();

  const arrowBackClicked = () => {
    if (history.length === 1) {
      router.push("/");
    } else {
      router.back();
    }
  };

  return (
    <div
      className={twMerge(
        "w-full pt-[1.8rem] pb-[1.2rem] px-[2rem] flex justify-between items-center",
        className
      )}
    >
      <ArrowBackIcon color={color} onClick={arrowBackClicked} />
      {children}
    </div>
  );
}
