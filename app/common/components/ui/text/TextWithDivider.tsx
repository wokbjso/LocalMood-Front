import LineIcon from "@/common/assets/icons/line/LineIcon";
import { twMerge } from "tailwind-merge";
import Label from "./Label";

interface TextWithDividerProps {
  leftText: string;
  rightText?: string;
  className?: string;
  leftTextClassName?: string;
  rightTextClassName?: string;
  borderColor?: string;
  borderClassName?: string;
}

//Molecule
export default function TextWithDivider({
  leftText,
  rightText,
  className,
  leftTextClassName,
  rightTextClassName,
  borderColor,
  borderClassName,
}: TextWithDividerProps) {
  return (
    <div className={twMerge("flex items-center", className)}>
      <Label
        className={twMerge(
          "body2-semibold text-text-gray-6 whitespace-nowrap",
          leftTextClassName
        )}
      >
        {leftText}
      </Label>
      <LineIcon
        color={borderColor}
        className={twMerge("mx-[8px]", borderClassName)}
      />
      <Label
        className={twMerge(
          "body2-medium text-text-gray-5 whitespace-nowrap",
          rightTextClassName
        )}
      >
        {rightText}
      </Label>
    </div>
  );
}
