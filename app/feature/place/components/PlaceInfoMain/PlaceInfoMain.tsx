import PlaceInfoTop from "../PlaceInfoTop/PlaceInfoTop";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";
import { PlaceInfoProps } from "@feature/place/type";

export default function PlaceInfoMain({
  id,
  size = "normal",
  placeName,
  placeImg,
  category,
  location,
  scrapped,
  tags,
  tagsCategoryNum,
  onClick,
  className,
  imgClassName,
  bottomClassName,
}: PlaceInfoProps) {
  return (
    <div>
      <PlaceInfoTop
        id={id}
        size={size}
        placeName={placeName}
        placeImg={placeImg}
        category={category}
        location={location}
        scrapped={scrapped}
        onClick={onClick}
        className={className}
        imgClassName={imgClassName}
      />
      {tags && (
        <PlaceInfoBottom
          tags={tags}
          tagsCategoryNum={tagsCategoryNum}
          bottomClassName={bottomClassName}
        />
      )}
    </div>
  );
}
