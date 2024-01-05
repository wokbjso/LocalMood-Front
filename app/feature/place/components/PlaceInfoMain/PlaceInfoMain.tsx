import PlaceInfoTop from "../PlaceInfoTop/PlaceInfoTop";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";
import { twMerge } from "tailwind-merge";

interface PlaceTags {
  category: string;
  detail: string;
}

export interface PlaceInfoMainProps {
  id: number;
  variant?: "home" | "home_search" | "curation";
  placeName: string;
  placeImg: string;
  category: string;
  location: string;
  scrapped: boolean;
  tags: PlaceTags[];
  onClick?: () => void;
  className?: string;
}

export default function PlaceInfoMain({
  id,
  variant = "home",
  placeName,
  placeImg,
  category,
  location,
  scrapped,
  tags,
  onClick,
  className,
}: PlaceInfoMainProps) {
  return (
    <div>
      <PlaceInfoTop
        id={id}
        variant={variant}
        placeName={placeName}
        placeImg={placeImg}
        category={category}
        location={location}
        scrapped={scrapped}
        onClick={onClick}
        className={className}
      />
      <PlaceInfoBottom variant={variant} tags={tags} />
    </div>
  );
}
