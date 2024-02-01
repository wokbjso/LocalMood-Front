import Image from "next/image";
import Divider from "@common/components/ui/divider/Divider";
import Slider from "@common/components/layout/Slider/Slider";
import PlaceDetailInfo from "@feature/place/components/PlaceDetail/PlaceDetailInfo";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import CurationScrapped from "@feature/curation/components/CurationScrapped/CurationScrapped";
import PlaceDetailKeywordEvaluation from "@feature/place/components/PlaceDetail/PlaceDetailKeywordEvaluation";
import PlaceDetailKeywordSummary from "@feature/place/components/PlaceDetail/PlaceDetailKeywordSummary";
import GetPlaceDetail from "@feature/place/queries/getPlaceDetail";

export default async function PlaceDetail({
  params: { id },
}: {
  params: { id: number };
}) {
  const detailData = await GetPlaceDetail(id);
  console.log(detailData);
  return (
    <div className="pb-[12rem]">
      <div className="w-full h-[30rem] mb-[1.5rem] relative">
        <Image
          src={detailData.info.imgUrlList[0]}
          alt="공간 상세 사진"
          fill
          sizes="100vw"
        />
      </div>
      <PlaceDetailInfo
        id={detailData.info.id}
        name={detailData.info.name}
        type={detailData.info.type}
        subType={detailData.info.subType}
        address={detailData.info.address}
        isScraped={detailData.info.isScraped}
        visitorNum={detailData.info.visitorNum}
        optionalService={detailData.info.optionalService}
        dish={detailData.info.dish}
        dishDesc={detailData.info.dishDesc}
      />
      <Divider className="h-[0.4rem] mt-[2rem] mb-[3.6rem] bg-line-gray-3" />
      <PlaceDetailKeywordSummary
        mainText="유저들이 기록한 키워드 요약"
        subText="이 공간을 가장 잘 설명하는 키워드에요"
        purpose={detailData.info.purpose}
        mood={detailData.info.mood}
        interior={detailData.info.interior && detailData.info.interior}
        music={detailData.info.music}
      />
      <PlaceDetailKeywordEvaluation
        id={detailData.info.id}
        mainText="키워드 평가"
        type={detailData.info.type}
        positiveEval={
          detailData.info.positiveEval ? detailData.info.positiveEval : null
        }
        negativeEval={
          detailData.info.negativeEval ? detailData.info.negativeEval : null
        }
      />
      <Divider className="bg-line-gray-3 h-[0.4rem] mb-[4.8rem]" />
      <section className="pl-[2rem] w-full">
        <span className="text-black headline2">
          {detailData.info.name}와 비슷한 장소
        </span>
        <Slider className="mt-[1.6rem] mb-[6rem]">
          {detailData.similarSpaceList.slice(0, 6).map((data) => (
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
