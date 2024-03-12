import PlaceInfoTop from "../PlaceInfoTop/PlaceInfoTop";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";
import {
  PlaceInfoAdditionalProps,
  PlaceInfoBottomProps,
  PlaceInfoTopProps,
} from "@feature/place/type";

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
  className,
  imgClassName,
  bottomClassName,
  keywordCategoryNum,
}: PlaceInfoTopProps & PlaceInfoBottomProps & PlaceInfoAdditionalProps) {
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
