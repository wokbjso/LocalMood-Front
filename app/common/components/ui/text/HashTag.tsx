import { twMerge } from "tailwind-merge";

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
      <span className={twMerge("text-primary-normal headline2", tagClassName)}>
        #
      </span>
      <span className={twMerge("text-black headline2", mainTextClassName)}>
        {mainText}
      </span>
      {subText && (
        <span className={twMerge("text-text-gray-6 body1", subTextClassName)}>
          {subText}
        </span>
      )}
    </div>
  );
}
