import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ChipProps {
  variant?:
    | "secondary"
    | "dark"
    | "keyword"
    | "keywordNonSelected"
    | "keywordSelected";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function Chip({
  variant = "secondary",
  className,
  onClick,
  children,
}: ChipProps) {
  return (
    <button
      className={twMerge(
        " bg-background-secondary-normal rounded-[100px]",
        variant === "keyword" &&
          "h-[2.8rem] px-[1.2rem] text-black bg-white body3-medium",
        variant === "dark" &&
          "h-[2.8rem] text-[#FCFCFD] px-[1.2rem] bg-black bg-opacity-30 body3-medium",
        variant === "keywordNonSelected" &&
          "h-[3.4rem] text-black px-[1.4rem] py-[1rem] bg-background-gray-2 body2-semibold",
        variant === "keywordSelected" &&
          "h-[3.4rem] text-white px-[1.4rem] py-[1rem] bg-text-gray-8 body2-semibold",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
