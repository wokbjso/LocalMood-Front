import ArrowRightIcon from "@/common/assets/icons/arrow/ArrowRightIcon";
import { twMerge } from "tailwind-merge";

interface CurationDetailPlaceNameWithArrowProps {
  name: string;
  className?: string;
}

export default function CurationDetailPlaceNameWithArrow({
  name,
  className,
}: CurationDetailPlaceNameWithArrowProps) {
  return (
    <div
      className={twMerge(
        "flex items-center gap-[0.4rem] text-black headline2-semibold",
        className
      )}
    >
      {name}
      <div className="px-[0.6rem] py-[0.4rem]">
        <ArrowRightIcon />
      </div>
    </div>
  );
}
