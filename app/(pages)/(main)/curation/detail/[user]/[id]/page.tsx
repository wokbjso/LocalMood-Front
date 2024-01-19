import CurationDetailTopBar from "@feature/curation/components/CurationDetail/CurationDetailTopBar";
import ArrowRight from "@common/assets/icons/arrow/arrow-right.svg";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import LocationFillIcon from "@common/assets/icons/location/location-fill.svg";
import CurationDetailInfoCard from "@feature/curation/components/CurationDetail/CurationDetailInfoCard";
import Filter from "@common/components/ui/buttons/Filter/Filter";

export default function CurationDetail() {
  //api get 으로 가져오는 data로 대체
  const curationMainPropsList = [
    {
      id: 0,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
      places: 12,
    },
    {
      id: 1,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "카페",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
      places: 0,
    },
    {
      id: 2,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "화이트데이에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
      places: 12,
    },
    {
      id: 3,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: false,
      onClick: () => {},
      places: 12,
    },
  ];

  const curationDetailCardList = [
    {
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
    },
    {
      id: 1,
      placeName: "공복식당",
      placePhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      placeType: "한식",
      placeLocation: "마포구 상수동 올림픽로 23",
      placeFor: ["연인과의 데이트", "작업/공부/책"],
      placeMenu: ["된장찌개", "삼겹살"],
      placeMood: ["대화에 집중할 수 있는"],
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
    {
      id: 2,
      placeName: "이리카페",
      placePhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      placeType: "한식",
      placeLocation: "마포구 상수동 올림픽로 23",
      placeFor: ["연인과의 데이트", "작업/공부/책"],
      placeMenu: ["된장찌개", "삼겹살"],
      placeMood: ["대화에 집중할 수 있는"],
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
    {
      id: 3,
      placeName: "이리카페",
      placePhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      placeType: "한식",
      placeLocation: "마포구 상수동 올림픽로 23",
      placeFor: ["연인과의 데이트", "작업/공부/책"],
      placeMenu: ["된장찌개", "삼겹살"],
      placeMood: ["대화에 집중할 수 있는"],
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
    {
      id: 4,
      placeName: "맥도날드",
      placePhoto: [
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      ],
      placeType: "한식",
      placeLocation: "마포구 상수동 올림픽로 23",
      placeFor: ["연인과의 데이트", "작업/공부/책"],
      placeMenu: ["된장찌개", "삼겹살"],
      placeMood: ["대화에 집중할 수 있는"],
      hashTags: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      onClick: () => {},
    },
  ];

  return (
    <div className="relative w-full">
      <CurationDetailTopBar
        mainText={curationMainPropsList[0].mainText}
        variant={"my"}
        userImg={curationMainPropsList[0].userImg}
        userName={curationMainPropsList[0].userName}
        places={curationMainPropsList[0].places}
        hashTags={curationMainPropsList[0].hashTags}
      />
      {/*저장된 장소(places)가 없을 때*/}
      {!curationMainPropsList && (
        <div>
          <div className="w-full inline-flex flex-col items-center pt-[18.8rem] gap-[1.2rem]">
            <div className="headline1-semibold text-black">
              아직 저장된 공간이 없습니다.
            </div>
            <div className="flex items-center gap-[0.4rem] body2-semibold text-text-gray-6">
              공간 탐색하기
              <LinkLayout routeUrl="/">
                <ArrowRight />
              </LinkLayout>
            </div>
          </div>
        </div>
      )}
      {/*저장된 장소(places)가 있을 때*/}
      {curationMainPropsList && (
        <div className="pb-[6.1rem]">
          <div className="w-full items-start p-[2rem]">
            <div className="w-full h-[7.2rem] inline-flex flex-col">
              <div className="flex items-center gap-[0.4rem]  pb-[1.2rem]">
                <div className="w-[2rem] h-[2rem]">
                  <LocationFillIcon />
                </div>
                <div className="text-black body2-medium">
                  {curationDetailCardList.length}개의 공간
                </div>
              </div>
              <div className="flex gap-[0.8rem] overflow-x-scroll w-full">
                {curationDetailCardList.map((item, index) => (
                  <Filter
                    key={index}
                    photo={item.placePhoto}
                    label={item.placeName}
                    className="whitespace-nowrap"
                    // onClick 하면 get Data 변경
                  />
                ))}
              </div>
            </div>
          </div>
          {curationDetailCardList.map((props, index) => (
            <div key={index}>
              <CurationDetailInfoCard {...props} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
