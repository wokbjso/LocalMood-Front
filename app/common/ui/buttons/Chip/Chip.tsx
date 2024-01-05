import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ChipProps {
  variant?: "secondary" | "dark";
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
        "box-sizing:border-box h-[2.8rem] px-[1.2rem] body3-medium bg-background-secondary-normal rounded-[100px]",
        variant === "dark" && "text-[#FCFCFD] bg-black bg-opacity-30",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
