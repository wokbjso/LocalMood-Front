import PlaceInfoTop from "../PlaceInfoTop/PlaceInfoTop";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";
import { PlaceInfoProps } from "@feature/place/type";

interface PlaceInfoMainProps extends PlaceInfoProps {
  variant?: "home" | "home_search" | "curation";
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
