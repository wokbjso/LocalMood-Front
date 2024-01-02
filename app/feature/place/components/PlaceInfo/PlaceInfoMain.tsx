import PlaceInfoTop from "../PlaceInfoTop/PlaceInfoTop";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";

interface PlaceTags {
  category: string;
  detail: string;
}

export interface PlaceInfoProps {
  id: number;
  variant?: "home" | "home_search" | "curation";
  placeName: string;
  placeImg: string;
  category: string;
  location: string;
  scrapped?: boolean;
  tags: PlaceTags[];
  onClick: () => void;
}

export default function PlaceInfoMain({
  id,
  variant = "home",
  placeName,
  placeImg,
  category,
  location,
  scrapped = false,
  tags,
  onClick,
}: PlaceInfoProps) {
  return (
    <div className="w-[33.5rem]" onClick={onClick}>
      <PlaceInfoTop
        id={id}
        variant={variant}
        size="large"
        placeName={placeName}
        placeImg={placeImg}
        category={category}
        location={location}
        scrapped={scrapped}
      />
      <PlaceInfoBottom variant={variant} tags={tags} />
    </div>
  );
}
