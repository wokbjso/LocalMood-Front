import RecordPhotoContent from "@feature/record/components/PhotoUpload/RecordPhotoContent";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";

interface SelectPhoto {
  placeType: string;
  indicatorIndex: number;
  handleIndicatorIndex: (index: number) => void;
  cafeKeywordData: { [key: string]: string | Array<string> };
  restaurantKeywordData: { [key: string]: string | Array<string> };
  handleImage: (url: File) => void;
}

export default function SelectPhoto({
  placeType,
  indicatorIndex,
  handleIndicatorIndex,
  cafeKeywordData,
  restaurantKeywordData,
  handleImage,
}: SelectPhoto) {
  return (
    <div>
      <div>
        <PlaceRecordTopBar
          showIndicator={true}
          text="방문한 사진을 업로드해주세요!"
          indicatorIndex={indicatorIndex}
          handleIndicatorIndex={handleIndicatorIndex}
        />
        <RecordPhotoContent
          placeType={placeType}
          cafeKeywordData={cafeKeywordData}
          restaurantKeywordData={restaurantKeywordData}
          handleImage={handleImage}
          handleIndicatorIndex={handleIndicatorIndex}
        />
      </div>
    </div>
  );
}
