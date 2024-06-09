import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps {
  children: ReactNode;
  className?: string;
}

export default function Label({ children, className }: LabelProps) {
  return (
    <span className={twMerge("header-light text-black", className)}>
      {children}
    </span>
  );
}
