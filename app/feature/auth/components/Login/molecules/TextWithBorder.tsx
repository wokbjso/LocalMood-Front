import Label from "@/common/components/ui/text/Label";
import { twMerge } from "tailwind-merge";

interface TextWithBorderProps {
  text: string;
  className?: string;
}

//Molecule
export default function TextWithBorder({
  text,
  className,
}: TextWithBorderProps) {
  return (
    <Label
      className={twMerge(
        "text-text-gray-6 body2-semibold pb-[0.4rem] border-b-[1px] border-b-text-gray-6",
        className
      )}
    >
      {text}
    </Label>
  );
}
