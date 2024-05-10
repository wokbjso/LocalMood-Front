import MapIcon, { MapInfoProps } from "@/common/assets/icons/map/mapIcon";
import { twMerge } from "tailwind-merge";

interface MapIconButtonProps extends MapInfoProps {
  onClick?: () => void;
  className?: string;
  textClassName?: string;
}

export default function MapIconButton({
  mapInfo,
  onClick,
  className,
  textClassName,
}: MapIconButtonProps) {
  return (
    <button
      className={twMerge("flex items-center gap-[0.4rem]", className)}
      onClick={onClick}
    >
      <MapIcon mapInfo={mapInfo} />
      <span className={twMerge("body2-medium text-text-gray-6", textClassName)}>
        지도로 보기
      </span>
    </button>
  );
}
