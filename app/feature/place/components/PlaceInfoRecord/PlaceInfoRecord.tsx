import { twMerge } from "tailwind-merge";
import PlaceInfoTop from "../PlaceInfoTop/PlaceInfoTop";
import { PlaceInfoProps } from "@feature/place/type";

export interface PlaceInfoRecordProps extends Omit<PlaceInfoProps, "tags"> {
  variant?: "scrapped" | "record_search";
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
  className,
}: PlaceInfoRecordProps) {
  return (
    <div>
      <div
        className={twMerge(
          variant === "scrapped" ? "w-[16.3rem]" : "w-full",
          className
        )}
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
    </div>
  );
}
