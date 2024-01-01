import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  variant?: "fill" | "line";
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  variant = "fill",
  children,
  disabled = false,
  className,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `w-[33.5rem] h-[4.8rem] headline3 rounded-[1rem] text-white bg-primary disabled:bg-gray-4`,
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
