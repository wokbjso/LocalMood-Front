import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TextProps {
  testId?: string;
  children: ReactNode;
  className?: string;
}

export default function Text({ testId, children, className }: TextProps) {
  return (
    <p
      data-testid={testId}
      className={twMerge("header-light text-text-gray-8", className)}
    >
      {children}
    </p>
  );
}
