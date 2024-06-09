import LocationLineIcon from "@/common/assets/icons/location/LocationLineIcon";
import { twMerge } from "tailwind-merge";
import Label from "../text/Label";

interface SpaceCountProps {
  spaceCount?: number;
  iconColor?: string;
  className?: string;
  countTextClassName?: string;
}

export default function SpaceCount({
  spaceCount,
  iconColor,
  className,
  countTextClassName,
}: SpaceCountProps) {
  return (
    <div className={twMerge("flex items-center", className)}>
      {<LocationLineIcon color={iconColor} />}
      <Label
        className={twMerge(
          "ml-[2px] body3-semibold text-white",
          countTextClassName
        )}
      >
        {spaceCount}
      </Label>
    </div>
  );
}
