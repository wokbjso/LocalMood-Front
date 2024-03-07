import PlaceInfoTop from "../PlaceInfoTop/PlaceInfoTop";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";
import { PlaceInfoProps } from "@feature/place/type";
import { useSession } from "next-auth/react";

export default function PlaceInfoMain({
  id,
  variant = "main",
  direction = "vertical",
  size = "normal",
  name,
  imgUrl,
  type,
  address,
  isScraped,
  keyword,
  purpose,
  interior,
  bestMenu,
  keywordCategoryNum,
  onClick,
  className,
  imgClassName,
  bottomClassName,
}: PlaceInfoProps) {
  return (
    <div>
      <PlaceInfoTop
        id={id}
        variant={variant}
        direction={direction}
        size={size}
        name={name}
        imgUrl={imgUrl}
        type={type}
        address={address}
        isScraped={isScraped}
        onClick={onClick}
        className={className}
        imgClassName={imgClassName}
      />
      {keywordCategoryNum && (
        <PlaceInfoBottom
          type={type}
          keyword={keyword}
          purpose={purpose}
          interior={interior}
          bestMenu={bestMenu}
          keywordCategoryNum={keywordCategoryNum}
          bottomClassName={bottomClassName}
        />
      )}
    </div>
  );
}
