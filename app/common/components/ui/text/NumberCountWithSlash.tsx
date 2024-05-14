import { twMerge } from "tailwind-merge";

interface NumberCountWithSlashProps {
  currentNum: number;
  totalNum: number;
  className?: string;
}

export default function NumberCountWithSlash({
  currentNum,
  totalNum,
  className,
}: NumberCountWithSlashProps) {
  return (
    <span className={twMerge("headline3-semibold text-text-gray-6", className)}>
      {currentNum}/{totalNum}
    </span>
  );
}
