import dynamic from "next/dynamic";
import Divider from "@common/components/ui/divider/Divider";
import PlaceDetailInfo from "@feature/place/components/PlaceDetail/organisms/PlaceDetailInfo";
import GetPlaceDetail from "@feature/place/queries/getPlaceDetail";
import PlaceDetailTopBar from "@feature/place/components/PlaceDetail/organisms/PlaceDetailTopBar";
import PlaceImageSlider from "@feature/place/components/PlaceDetail/organisms/PlaceImageSlider";
import PlaceKeywordEvaluation from "@feature/place/components/PlaceDetail/organisms/PlaceKeywordEvaluation";
import PlaceKeywordSummary from "@feature/place/components/PlaceDetail/organisms/PlaceKeywordSummary";
const PlaceInfoCard = dynamic(
  () => import("@feature/place/components/PlaceInfo/organisms/PlaceInfoCard")
);
const CurationInfoCardDark = dynamic(
  () =>
    import(
      "@feature/curation/components/CurationInfo/molecules/CurationInfoCardDark"
    )
);
import RelatedPlaceSlider from "@feature/place/components/PlaceDetail/molecules/RelatedPlaceSlider";
import RelatedCurationSlider from "@feature/place/components/PlaceDetail/molecules/RelatedCurationSlider";

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
      <PlaceImageSlider imgUrlList={detailData.info.imgUrlList} />
      <PlaceDetailInfo
        id={detailData.info.id}
        name={detailData.info.name}
        type={detailData.info.type}
        subType={detailData.info.subType}
        address={detailData.info.address}
        isScraped={detailData.info.isScraped}
        visitorNum={detailData.info.visitorNum}
        optionalService={detailData.info.optionalService}
        dishDesc={detailData.info.dishDesc}
      />
      <Divider className="h-[0.4rem] mt-[2rem] mb-[3.6rem] bg-line-gray-3" />
      <PlaceKeywordSummary
        mainText="유저들이 기록한 키워드 요약"
        subText="이 공간을 가장 잘 설명하는 키워드에요"
        purpose={detailData.info.purpose}
        mood={detailData.info.mood}
        interior={detailData.info.interior && detailData.info.interior}
        music={detailData.info.music}
      />
      <PlaceKeywordEvaluation
        mainText="키워드 평가"
        id={detailData.info.id}
        positiveEval={
          detailData.info.positiveEval ? detailData.info.positiveEval[0] : null
        }
        negativeEval={
          detailData.info.negativeEval ? detailData.info.negativeEval[0] : null
        }
      />
      <Divider className="bg-line-gray-3 h-[0.4rem] mb-[4.8rem]" />
      <section className="pl-[2rem] w-[100%]">
        <RelatedPlaceSlider title={`${detailData.info.name}와(과) 비슷한 장소`}>
          {detailData.similarSpaceList.slice(0, 6).map((data) => (
            <PlaceInfoCard
              key={data.id}
              size="small"
              {...data}
              className="w-[16.3rem] mr-[0.8rem]"
            />
          ))}
        </RelatedPlaceSlider>
        {detailData.relatedCurationList.length > 0 && (
          <RelatedCurationSlider
            title={`${detailData.info.name}이(가) 담긴 큐레이션`}
          >
            {detailData.relatedCurationList.map((data) => (
              <CurationInfoCardDark
                key={data.id}
                {...data}
                className="w-[33.5rem] mr-[0.8rem]"
              />
            ))}
          </RelatedCurationSlider>
        )}
      </section>
    </div>
  );
}
