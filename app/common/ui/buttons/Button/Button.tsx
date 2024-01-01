import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  variant?: "fill" | "line";
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "fill",
  disabled = false,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `w-[33.5rem] h-[4.8rem] headline3 rounded-[10px] text-white bg-primary-normal disabled:bg-gray-4`,
        variant === "line" &&
          "h-[4rem] bg-white text-gray-6 body2-semibold border-[1.125px] border-gray-6",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
