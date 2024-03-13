import {
  PlaceInfoCardAdditionalProps,
  PlaceInfoCardBottomProps,
  PlaceInfoCardTopProps,
} from "@feature/place/type";
import PlaceInfoCardTop from "../PlaceInfoCardTop/PlaceInfoCardTop";
import PlaceInfoCardBottom from "../PlaceInfoCardBottom/PlaceInfoCardBottom";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";

export default function PlaceInfoCard({
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
  myCurationData,
  className,
  imgClassName,
  bottomClassName,
  keywordCategoryNum,
}: PlaceInfoCardTopProps &
  PlaceInfoCardBottomProps &
  PlaceInfoCardAdditionalProps & { myCurationData?: MyCurationResponse }) {
  return (
    <div>
      <PlaceInfoCardTop
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
        myCurationData={myCurationData}
      />
      {keywordCategoryNum && (
        <PlaceInfoCardBottom
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
