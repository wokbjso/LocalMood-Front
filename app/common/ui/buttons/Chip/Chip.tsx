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
        "h-[2.8rem] px-[1.2rem] body3-medium bg-secondary rounded-[100px]",
        variant === "dark" && "text-gray-0 bg-black bg-opacity-30",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
