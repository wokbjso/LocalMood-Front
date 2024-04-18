import Divider from "@common/components/ui/divider/Divider";
import PlaceDetailInfo from "@feature/place/components/PlaceDetail/PlaceDetailInfo";
import PlaceDetailKeywordEvaluation from "@feature/place/components/PlaceDetail/PlaceDetailKeywordEvaluation";
import PlaceDetailKeywordSummary from "@feature/place/components/PlaceDetail/PlaceDetailKeywordSummary";
import GetPlaceDetail from "@feature/place/queries/getPlaceDetail";
import PlaceDetailTopBar from "@feature/place/components/PlaceDetail/PlaceDetailTopBar";
import PlaceInfoCard from "@feature/place/components/PlaceInfoCard/PlaceInfoCard";
import SliderLayout from "@common/components/layout/SliderLayout/SliderLayout";
import PlaceDetailImageSlider from "@feature/place/components/PlaceDetail/PlaceDetailImageSlider";
import CurationCardDark from "@feature/curation/components/CurationCardDark/CurationCardDark";

//Page
export default async function PlaceDetailPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const detailData = await GetPlaceDetail(id);
  return (
    <div className="w-[100%] h-[100%] relative pb-[12rem] overflow-auto">
      {/* Template */}
      <PlaceDetailTopBar
        type={detailData.info.type}
        address={detailData.info.address}
        name={detailData.info.name}
        purpose={detailData.info.purpose}
        imgUrl={detailData.info.imgUrlList[0]}
        className="absolute top-[1.2rem] z-10"
      />
      <PlaceDetailImageSlider placeImages={detailData.info.imgUrlList} />
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
        positiveEval={
          detailData.info.positiveEval ? detailData.info.positiveEval[0] : null
        }
        negativeEval={
          detailData.info.negativeEval ? detailData.info.negativeEval[0] : null
        }
      />
      <Divider className="bg-line-gray-3 h-[0.4rem] mb-[4.8rem]" />
      <section className="pl-[2rem] w-[100%]">
        <span className="text-black headline2">
          {detailData.info.name}와(과) 비슷한 장소
        </span>
        <SliderLayout className="mt-[1.6rem] mb-[6rem]">
          {detailData.similarSpaceList.slice(0, 6).map((data) => (
            <PlaceInfoCard
              key={data.id}
              size="small"
              {...data}
              className="w-[16.3rem] mr-[0.8rem]"
            />
          ))}
        </SliderLayout>
        {detailData.relatedCurationList.length > 0 && (
          <span className="text-black headline2">
            {detailData.info.name}이(가) 담긴 큐레이션
          </span>
        )}
        <SliderLayout className="mt-[1.6rem] mb-[6rem]">
          {detailData.relatedCurationList.map((data) => (
            <CurationCardDark
              key={data.id}
              {...data}
              className="w-[33.5rem] mr-[0.8rem]"
            />
          ))}
        </SliderLayout>
      </section>
    </div>
  );
}
