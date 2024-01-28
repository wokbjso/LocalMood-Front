import Image from "next/image";
import Divider from "@common/components/ui/divider/Divider";
import Slider from "@common/components/layout/Slider/Slider";
import PlaceDetailInfo from "@feature/place/components/PlaceDetail/PlaceDetailInfo";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import CurationScrapped from "@feature/curation/components/CurationScrapped/CurationScrapped";
import PlaceDetailTopBar from "@feature/place/components/PlaceDetail/PlaceDetailTopBar";
import PlaceDetailKeywordEvaluation from "@feature/place/components/PlaceDetail/PlaceDetailKeywordEvaluation";
import PlaceDetailKeywordSummary from "@feature/place/components/PlaceDetail/PlaceDetailKeywordSummary";
import GetPlaceDetail from "@feature/place/queries/getPlaceDetail";

export default async function PlaceDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const CURATION_DUMMY = [
    {
      id: 0,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김현민",
      title: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "크리스마스"],
    },
    {
      id: 1,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김지원",
      title: "평일에 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "평일"],
      scrapped: false,
    },
    {
      id: 2,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김경민",
      title: "주말에 즐기기 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "주말"],
    },
    {
      id: 3,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "최예원",
      title: "친구와 즐기기 좋은 마포구 데이트 코스",
      keyword: ["친구와의 데이트", "마포구"],
      scrapped: false,
    },
  ];
  const detailData = await GetPlaceDetail(id);
  return (
    <div className="pb-[12rem]">
      <div className="w-full h-[30rem] mb-[1.5rem] relative">
        <Image src={detailData.info.imgUrlList[0]} alt="공간 상세 사진" fill />
      </div>
      <PlaceDetailTopBar
        id={detailData.info.id}
        isScraped={detailData.info.isScraped}
        className="absolute top-[4.7rem]"
      />
      <PlaceDetailInfo
        id={detailData.info.id}
        name={detailData.info.name}
        type={detailData.info.type}
        address={detailData.info.address}
        isScraped={detailData.info.isScraped}
      />
      <Divider className="h-[0.4rem] mt-[2rem] mb-[3.6rem] bg-line-gray-3" />
      <PlaceDetailKeywordSummary
        mainText="유저들이 기록한 키워드 요약"
        subText="이 공간을 가장 잘 설명하는 키워드에요"
        purpose={detailData.info.purpose}
        mood={detailData.info.mood}
        music={detailData.info.music}
      />
      <PlaceDetailKeywordEvaluation
        id={detailData.info.id}
        mainText="키워드 평가"
        type={detailData.info.type}
        positiveEval={detailData.info.positiveEval.split("/")}
        negativeEval={detailData.info.negativeEval.split("/")}
      />
      <Divider className="bg-line-gray-3 h-[0.4rem] mb-[4.8rem]" />
      <section className="pl-[2rem] w-full">
        <span className="text-black headline2">
          {detailData.info.name}와 비슷한 장소
        </span>
        <Slider className="mt-[1.6rem] mb-[6rem]">
          {detailData.similarSpaceList.map((data) => (
            <PlaceInfoMain
              key={data.id}
              size="small"
              {...data}
              className="w-[16.3rem] mr-[0.8rem]"
            />
          ))}
        </Slider>
        <span className="text-black headline2">
          {detailData.info.name}가 담긴 큐레이션
        </span>
        <Slider className="mt-[1.6rem] mb-[6rem]">
          {detailData.relatedCurationList.map((data) => (
            <CurationScrapped
              key={data.id}
              {...data}
              className="w-[33.5rem] mr-[0.8rem]"
            />
          ))}
        </Slider>
      </section>
    </div>
  );
}
