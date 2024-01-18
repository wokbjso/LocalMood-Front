import PlaceInfoTop from "../PlaceInfoTop/PlaceInfoTop";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";
import { PlaceInfoProps } from "@feature/place/type";

export default function PlaceInfoMain({
  id,
  placeName,
  placeImg,
  category,
  location,
  scrapped,
  tags,
  tagsCategoryNum,
  onClick,
  className,
}: PlaceInfoProps) {
  return (
    <>
      <PlaceInfoTop
        id={id}
        placeName={placeName}
        placeImg={placeImg}
        category={category}
        location={location}
        scrapped={scrapped}
        onClick={onClick}
        className={className}
      />
      {tags && (
        <PlaceInfoBottom tags={tags} tagsCategoryNum={tagsCategoryNum} />
      )}
    </>
  );
}
