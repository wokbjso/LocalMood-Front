import PlaceInfoTop from "../PlaceInfoTop/PlaceInfoTop";

export interface PlaceInfoRecordProps {
  id: number;
  variant?: "scrapped" | "record_search";
  placeName: string;
  placeImg: string;
  category: string;
  location: string;
  scrapped: boolean;
  onClick: () => void;
}

export default function PlaceInfoRecord({
  id,
  variant = "scrapped",
  placeName,
  placeImg,
  category,
  location,
  scrapped,
  onClick,
}: PlaceInfoRecordProps) {
  return (
    <div
      className={variant === "scrapped" ? "w-[16rem]" : "w-full"}
      onClick={onClick}
    >
      <PlaceInfoTop
        id={id}
        variant={variant}
        size="small"
        placeName={placeName}
        placeImg={placeImg}
        category={category}
        location={location}
        scrapped={scrapped}
      />
    </div>
  );
}
