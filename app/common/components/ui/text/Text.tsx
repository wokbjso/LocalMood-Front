import { twMerge } from "tailwind-merge";

interface TextProps {
  text: string;
  className?: string;
}

export default function Text({ text, className }: TextProps) {
  return (
    <p className={twMerge("header-light text-text-gray-8", className)}>
      {text}
    </p>
  );
}
