import { twMerge } from "tailwind-merge";

interface NoCurationTextProps {
  text: string;
  className?: string;
}

//Atom
export default function NoCurationText({
  text,
  className,
}: NoCurationTextProps) {
  return (
    <p
      className={twMerge(
        "flex justify-center items-center body1-medium text-text-gray-8",
        className
      )}
    >
      {text}
    </p>
  );
}
