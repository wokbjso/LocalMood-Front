import PlaceInfoTop from "../PlaceInfoTop/PlaceInfoTop";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";

interface PlaceTags {
  category: string;
  detail: string;
}

export interface PlaceInfoProps {
  id: number;
  variant?: "home" | "home_search" | "curation" | "scrapped" | "record_search";
  placeName: string;
  placeImg: string;
  category: string;
  location: string;
  scrap?: boolean;
  tags: PlaceTags[];
  onClick: () => void;
}

export default function PlaceInfo({
  id,
  variant = "home",
  placeName,
  placeImg,
  category,
  location,
  scrap = false,
  tags,
  onClick,
}: PlaceInfoProps) {
  return (
    <div
      className={variant !== "scrapped" ? "w-[33.5rem]" : "w-[16rem]"}
      onClick={onClick}
    >
      <PlaceInfoTop
        id={id}
        size={variant !== "scrapped" ? "large" : "small"}
        placeName={placeName}
        placeImg={placeImg}
        category={category}
        location={location}
        scrap={scrap}
      />
      {variant !== "scrapped" && variant !== "record_search" && (
        <PlaceInfoBottom variant={variant} tags={tags} />
      )}
    </div>
  );
}
