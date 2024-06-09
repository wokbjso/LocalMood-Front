import { twMerge } from "tailwind-merge";
import Label from "./Label";

interface HashTagProps {
  mainText: string;
  subText?: string;
  className?: string;
  tagClassName?: string;
  mainTextClassName?: string;
  subTextClassName?: string;
}

//Molecule
export default function HashTag({
  mainText,
  subText,
  className,
  tagClassName,
  mainTextClassName,
  subTextClassName,
}: HashTagProps) {
  return (
    <div className={className}>
      <Label className={twMerge("text-primary-normal headline2", tagClassName)}>
        #
      </Label>
      <Label className={twMerge("headline2", mainTextClassName)}>
        {mainText}
      </Label>
      {subText && (
        <Label className={twMerge("text-text-gray-6 body1", subTextClassName)}>
          {subText}
        </Label>
      )}
    </div>
  );
}
