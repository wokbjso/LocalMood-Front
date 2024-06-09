import { twMerge } from "tailwind-merge";

interface TitleProps {
  children: string;
  className?: string;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h1 className={twMerge("header-light text-black", className)}>
      {children}
    </h1>
  );
}
