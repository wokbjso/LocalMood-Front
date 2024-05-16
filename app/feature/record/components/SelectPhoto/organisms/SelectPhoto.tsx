import RecordPageBookTopBar from "../../RecordPageBook/organisms/RecordPageBookTopBar";
import SelectPhotoContent from "./SelectPhotoContent";

interface SelectPhoto {
  placeType: string;
  indicatorIndex: number;
  handleIndicatorIndex: (index: number) => void;
  cafeKeywordData: { [key: string]: string | Array<string> };
  restaurantKeywordData: { [key: string]: string | Array<string> };
  handleAddImage: (url: File) => void;
  handleDeleteImage: (index: number) => void;
}

//Organism
export default function SelectPhoto({
  placeType,
  indicatorIndex,
  handleIndicatorIndex,
  cafeKeywordData,
  restaurantKeywordData,
  handleAddImage,
  handleDeleteImage,
}: SelectPhoto) {
  return (
    <div className="absolute w-[100%] h-[100%] overflow-hidden">
      <RecordPageBookTopBar
        text="방문한 사진을 업로드해주세요!"
        indicatorIndex={indicatorIndex}
        handleIndicatorIndex={handleIndicatorIndex}
      />
      <SelectPhotoContent
        placeType={placeType}
        cafeKeywordData={cafeKeywordData}
        restaurantKeywordData={restaurantKeywordData}
        handleAddImage={handleAddImage}
        handleDeleteImage={handleDeleteImage}
      />
    </div>
  );
}
