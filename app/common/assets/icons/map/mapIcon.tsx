import { IconProps } from "../icon-type";
import Map from "@common/components/ui/map/Map/Map";

interface MapInfoProps {
  mapInfo: {
    isOpened: boolean;
    placeData: Array<any>;
    closeMap: () => void;
    className?: string;
  };
}

export default function MapIcon({
  mapInfo,
  color = "#9E9E9E",
  className,
  onClick,
}: IconProps & MapInfoProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className={className}
        onClick={onClick}
      >
        <g clipPath="url(#clip0_753_13138)">
          <path
            d="M6.90007 17.8571L2.46438 18.8816C1.56916 19.0883 0.714355 18.4084 0.714355 17.4896V3.27911C0.714355 2.61396 1.17339 2.03684 1.82147 1.88716L6.90007 0.714279V17.8571Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.8999 17.8571L13.0999 19.2857V2.14285L6.8999 0.714279V17.8571Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.2858 16.7209C19.2858 17.386 18.8268 17.9631 18.1788 18.1129L13.1001 19.2857V2.14285L17.5358 1.11845C18.431 0.911699 19.2858 1.59158 19.2858 2.51038V16.7209Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_753_13138">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {mapInfo.isOpened && (
        <Map
          placeData={mapInfo.placeData}
          closeMap={mapInfo.closeMap}
          className={mapInfo.className}
        />
      )}
    </>
  );
}
