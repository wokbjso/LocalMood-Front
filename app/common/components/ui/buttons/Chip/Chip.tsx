import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ChipProps {
  variant?: "light" | "dark";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

//Atoms
export default function Chip({
  variant = "light",
  className,
  onClick,
  children,
}: ChipProps) {
  return (
    <button
      className={twMerge(
        "h-[2.8rem] px-[1.2rem] body3-medium bg-background-secondary-normal rounded-[100px] whitespace-nowrap",
        variant === "dark" &&
          "h-[2.8rem] text-[#FCFCFD] px-[1.2rem] bg-black bg-opacity-30 body3-medium",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
