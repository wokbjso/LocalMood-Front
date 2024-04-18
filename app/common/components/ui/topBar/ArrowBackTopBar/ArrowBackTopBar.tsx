"use client";

import ArrowBack from "@common/assets/icons/arrow/ArrowBack";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { TopBarProps } from "../type";

//Molecule
export default function ArrowBackTopBar({
  color = "white",
  children,
  className,
}: TopBarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const arrowBackClicked = () => {
    if (pathname.slice(1) === "search") router.replace("/");
    else router.back();
  };

  return (
    <div
      className={twMerge(
        "w-full pt-[1.8rem] pb-[1.2rem] px-[2rem] flex justify-between items-center",
        className
      )}
    >
      <ArrowBack color={color} onClick={arrowBackClicked} />
      {children}
    </div>
  );
}
