import ArrowRightIcon from "@/common/assets/icons/arrow/ArrowRightIcon";
import { twMerge } from "tailwind-merge";
import Label from "./Label";

interface TextWithRightArrowProps {
  text: string;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
}

export default function TextWithRightArrow({
  text,
  onClick,
  className,
  textClassName,
}: TextWithRightArrowProps) {
  return (
    <div className={twMerge("flex items-center", className)} onClick={onClick}>
      <Label
        className={twMerge("text-text-gray-6 body2-semibold", textClassName)}
      >
        {text}
      </Label>
      <ArrowRightIcon />
    </div>
  );
}
