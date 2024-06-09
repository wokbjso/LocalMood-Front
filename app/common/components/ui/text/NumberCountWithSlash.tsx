import { twMerge } from "tailwind-merge";
import Label from "./Label";

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
    <Label
      className={twMerge("headline3-semibold text-text-gray-6", className)}
    >
      {currentNum}/{totalNum}
    </Label>
  );
}
