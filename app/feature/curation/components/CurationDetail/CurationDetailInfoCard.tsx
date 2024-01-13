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
    <div>
      <div>
        <Image
          src={curationDetailCardList.placePhoto[0]}
          width={280}
          height={280}
          alt="image"
        />
      </div>
      <div>
        <div className="w-[33.5rem] flex justify-between ">
          <div className="pt-[2rem]">
            <div className="flex items-center gap-[0.4rem] text-black headline2-semibold">
              {curationDetailCardList.placeName}
              <ArrowIcon />
            </div>
            <div>{curationDetailCardList.placeType}</div>
            <div>{curationDetailCardList.placeLocation}</div>
          </div>
          <ScrapIcon />
        </div>
        <div>
          방문목적
          <Chip>{curationDetailCardList.placeFor}</Chip>
        </div>
        <div>
          인테리어
          <Chip>{curationDetailCardList.placeInterior}</Chip>
        </div>
        <div>
          공간 무드
          <Chip>{curationDetailCardList.placeMood}</Chip>
        </div>
      </div>
    </div>
  );
}
