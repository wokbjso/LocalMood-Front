import LineIcon from "@common/assets/icons/line/LineIcon";
import { twMerge } from "tailwind-merge";

interface TextWithDividerProps {
  leftText: string;
  rightText: string;
  className?: string;
  leftTextClassName?: string;
  rightTextClassName?: string;
  borderClassName?: string;
}

//Molecule
export default function TextWithDivider({
  leftText,
  rightText,
  className,
  leftTextClassName,
  rightTextClassName,
  borderClassName,
}: TextWithDividerProps) {
  return (
    <div className={twMerge("flex items-center", className)}>
      <span
        className={twMerge(
          "body2-semibold text-text-gray-6 whitespace-nowrap",
          leftTextClassName
        )}
      >
        {leftText}
      </span>
      <LineIcon className={twMerge("mx-[0.8rem]", borderClassName)} />
      <span
        className={twMerge(
          "body2-medium text-text-gray-5 whitespace-nowrap",
          rightTextClassName
        )}
      >
        {rightText}
      </span>
    </div>
  );
}
