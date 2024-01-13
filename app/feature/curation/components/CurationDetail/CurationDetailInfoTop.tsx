import LocationFillIcon from "@common/assets/icons/location/location-fill.svg";
import Filter from "@common/components/ui/buttons/Filter/Filter";

export default function CurationDetailInfoTop() {
  const curationDetailCardList = {
    id: 0,
    placeName: "나이스워크투데이",
    placePhoto: [
      "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
    ],
    placeType: "카페",
    placeLocation: "마포구 상수동 올림픽로 23",
    placeFor: ["연인과의 데이트", "작업/공부/책"],
    placeInterior: ["통창뷰", "넓은 공간"],
    placeMood: ["대화에 집중할 수 있는"],
    hashTags: ["연인과의 데이트", "크리스마스"],
    scrapped: true,
    onClick: () => {},
  };

  return (
    <div className="w-full items-start p-[2rem]">
      <div className="h-[7.2rem] inline-flex flex-col">
        <div className="flex items-center gap-[0.4rem]  pb-[1.2rem]">
          <div className="w-[2rem] h-[2rem]">
            <LocationFillIcon />
          </div>
          <div className="text-black body2-medium">12개의 공간</div>
        </div>
        <div>
          <Filter
            photo={curationDetailCardList.placePhoto}
            label={curationDetailCardList.placeName}
          />
        </div>
      </div>
    </div>
  );
}
