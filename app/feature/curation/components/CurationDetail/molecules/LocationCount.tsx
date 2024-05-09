import LocationFillIcon from "@common/assets/icons/location/LocationFillIcon";
import { twMerge } from "tailwind-merge";

interface LocationCountProps {
  locationCount: number;
  className?: string;
  textClassName?: string;
}

export default function LocationCount({
  locationCount,
  className,
  textClassName,
}: LocationCountProps) {
  return (
    <div className={twMerge("flex items-center gap-[0.4rem]", className)}>
      <LocationFillIcon />
      <h3 className={twMerge("text-black body2-medium", textClassName)}>
        {locationCount}개의 공간
      </h3>
    </div>
  );
}
