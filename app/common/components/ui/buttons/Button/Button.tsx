"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  variant?: "fill" | "line";
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  dataCy?: string;
}

//Atom
export default function Button({
  variant = "fill",
  disabled = false,
  children,
  onClick,
  className,
  dataCy,
}: ButtonProps) {
  return (
    <button
      data-cy={dataCy}
      className={twMerge(
        `w-[33.5rem] h-[4.8rem] headline3 rounded-[10px] text-white bg-primary-normal disabled:bg-text-gray-4`,
        variant === "line" &&
          "bg-white text-text-gray-6 body2-semibold border-[1.125px] border-text-gray-6",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
