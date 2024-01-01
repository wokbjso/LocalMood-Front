import { twMerge } from "tailwind-merge";

interface DividerProps {
  className?: string;
}

export default function Divider({ className }: DividerProps) {
  return <div className={twMerge("w-full h-[8px] bg-gray-3", className)}></div>;
}
