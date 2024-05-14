import LocationLineIcon from "@/common/assets/icons/location/LocationLineIcon";
import { twMerge } from "tailwind-merge";

interface SpaceCountProps {
  spaceCount?: number;
  iconColor?: string;
  className?: string;
}

export default function SpaceCount({
  spaceCount,
  iconColor,
  className,
}: SpaceCountProps) {
  return (
    <div className={twMerge("flex items-center", className)}>
      {<LocationLineIcon color={iconColor} />}
      <span className="ml-[2px] body3-semibold text-white">{spaceCount}</span>
    </div>
  );
}
