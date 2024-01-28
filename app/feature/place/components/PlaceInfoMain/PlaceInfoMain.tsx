import PlaceInfoTop from "../PlaceInfoTop/PlaceInfoTop";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";
import { PlaceInfoProps } from "@feature/place/type";

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
      {keyword && (
        <PlaceInfoBottom
          keyword={keyword}
          keywordCategoryNum={keywordCategoryNum}
          bottomClassName={bottomClassName}
        />
      )}
    </div>
  );
}
