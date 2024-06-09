import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export default function Text({ children, className }: TextProps) {
  return (
    <p className={twMerge("header-light text-text-gray-8", className)}>
      {children}
    </p>
  );
}
