import Image from "next/image";
import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";
import ScrapIcon from "@common/assets/icons/scrap/scrap-fill.svg";
import Chip from "@common/components/ui/buttons/Chip/Chip";

export default function CuratoinDetailInfoCard() {
  const curationDetailCardList = {
    id: 0,
    placeName: "나이스워크투데이",
    placePhoto: [
      "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
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
    <div className="pl-[2.1rem]">
      <div className="w-full flex flex-row overflow-x-scroll gap-[0.8rem]">
        {curationDetailCardList.placePhoto.map((url, index) => (
          <div
            key={index}
            className="w-[28rem] h-[28rem] bg-cover relative rounded-lg overflow-hidden"
            style={{
              flex: "1",
              width: "280px",
              height: "280px",
              borderRadius: "8px",
              background: `url(${url}) center/cover no-repeat`,
            }}
          />
        ))}
      </div>
      <div>
        <div className="w-full  pr-[1.9rem] pb-[4rem]">
          <div className="pt-[2rem] pb-[1.6rem] flex justify-between ">
            <div>
              <div className="flex items-center gap-[0.4rem] text-black headline2-semibold">
                {curationDetailCardList.placeName}
                <div className="px-[0.6rem] py-[0.4rem]">
                  <ArrowIcon />
                </div>
              </div>
              <div className="flex items-center gap-[0.8rem] pt-[0.8rem]">
                <div className="body3-semibold text-text-gray-6">
                  {curationDetailCardList.placeType}
                </div>
                <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                <div className="body3-medium text-text-gray-5">
                  {curationDetailCardList.placeLocation}
                </div>
              </div>
            </div>
            <ScrapIcon />
          </div>
          <div className="w-full flex items-start p-[1.6rem] gap-[1.7rem] border-[1px] border-solid border-line-gray-3 rounded-t-lg">
            <div className="flex flex-col items-start pt-[0.5rem] gap-[2.4rem] text-text-gray-6 body2-medium">
              <div>방문목적 </div> <div>인테리어</div> <div>공간 모드</div>
            </div>
            <div className="flex flex-col items-start gap-[0.8rem]">
              <div className="flex gap-[0.8rem]">
                {curationDetailCardList.placeFor.map((item, index) => (
                  <Chip key={index}>{item}</Chip>
                ))}
              </div>
              <div className="flex gap-[0.8rem]">
                {curationDetailCardList.placeInterior.map((item, index) => (
                  <Chip key={index}>{item}</Chip>
                ))}
              </div>
              <div className="flex gap-[0.8rem]">
                {curationDetailCardList.placeMood.map((item, index) => (
                  <Chip key={index}>{item}</Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
