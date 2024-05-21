import { twMerge } from "tailwind-merge";

interface TitleProps {
  title: string;
  className?: string;
}

export default function Title({ title, className }: TitleProps) {
  return (
    <h1 className={twMerge("header-light text-black", className)}>{title}</h1>
  );
}
