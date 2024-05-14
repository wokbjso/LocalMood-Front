import { twMerge } from "tailwind-merge";

interface TitleProps {
  title: string;
  className?: string;
}

export default function Title({ title, className }: TitleProps) {
  return (
    <div className={twMerge("headline0 text-black", className)}>{title}</div>
  );
}
