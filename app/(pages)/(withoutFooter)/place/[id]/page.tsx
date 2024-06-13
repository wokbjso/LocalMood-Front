import dynamic from "next/dynamic";
import Divider from "@/common/components/ui/divider/Divider";
import PlaceDetailInfo from "@/feature/place/components/PlaceDetail/organisms/PlaceDetailInfo";
import GetPlaceDetail from "@/feature/place/queries/getPlaceDetail";
import PlaceDetailTopBar from "@/feature/place/components/PlaceDetail/organisms/PlaceDetailTopBar";
import PlaceImageSlider from "@/feature/place/components/PlaceDetail/organisms/PlaceImageSlider";
import PlaceKeywordEvaluation from "@/feature/place/components/PlaceDetail/organisms/PlaceKeywordEvaluation";
import PlaceKeywordSummary from "@/feature/place/components/PlaceDetail/organisms/PlaceKeywordSummary";
const PlaceInfoCard = dynamic(
  () => import("@/feature/place/components/PlaceInfo/organisms/PlaceInfoCard")
);
const CurationInfoCardDark = dynamic(
  () =>
    import(
      "@/feature/curation/components/CurationInfo/organisms/CurationInfoCardDark"
    )
);
import { Metadata } from "next";
import { PLACE_SUB_TYPE } from "@/feature/place/constants/place-tag-category";
import RelatedSlider from "@/feature/place/components/PlaceDetail/organisms/RelatedSlider";
import dayjs from "dayjs";

type Props = {
  params: { id: number };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const detailData = await GetPlaceDetail(params.id);

  return {
    title: detailData.info.name,
    openGraph: {
      images: [detailData.info.imgUrlList[0], "/localmood.png"],
    },
    description: `${detailData.info.visitorNum}이 방문하기 좋은 ${
      detailData.info.name
    }(${
      detailData.info.type === "CAFE"
        ? "카페"
        : detailData.info.subType && PLACE_SUB_TYPE[detailData.info.subType]
    })의 정보를 자세히 보고싶다면?`,
    keywords: [
      "로컬무드",
      "localmood",
      `${detailData.info.name}`,
      `${
        detailData.info.type === "CAFE"
          ? "카페"
          : detailData.info.subType && PLACE_SUB_TYPE[detailData.info.subType]
      }`,
      "키워드",
      "마포구",
    ],
  };
}

export async function generateStaticParams() {
  return [];
}

//Page
export default async function PlaceDetailPage({ params: { id } }: Props) {
  const detailData = await GetPlaceDetail(id);
  return (
    <div className="w-[100%] h-[100%] relative pb-[60px] overflow-auto">
      {/* Template */}
      <PlaceDetailTopBar
        type={detailData.info.type}
        address={detailData.info.address}
        name={detailData.info.name}
        purpose={detailData.info.purpose}
        imgUrl={detailData.info.imgUrlList[0]}
        className="absolute top-[1.2rem] z-20"
      />
      <PlaceImageSlider imgUrlList={detailData.info.imgUrlList} />
      <PlaceDetailInfo
        id={detailData.info.id}
        name={detailData.info.name}
        type={detailData.info.type}
        subType={detailData.info.subType}
        address={detailData.info.address}
        visitorNum={detailData.info.visitorNum}
        optionalService={detailData.info.optionalService}
        dishDesc={detailData.info.dishDesc}
      />
      <Divider className="h-[0.4rem] mb-[3.6rem] bg-line-gray-3" />
      <PlaceKeywordSummary
        mainText="유저들이 기록한 키워드 요약"
        description="이 공간을 가장 잘 설명하는 키워드에요"
        purpose={detailData.info.purpose}
        mood={detailData.info.mood}
        interior={detailData.info.interior && detailData.info.interior}
        music={detailData.info.music}
      />
      <PlaceKeywordEvaluation
        mainText="키워드 평가"
        id={detailData.info.id}
        positiveEval={
          detailData.info.positiveEval ? detailData.info.positiveEval : null
        }
        negativeEval={
          detailData.info.negativeEval ? detailData.info.negativeEval : null
        }
      />
      <Divider className="bg-line-gray-3 h-[0.4rem] mb-[4.8rem]" />
      <section className="pl-[2rem] w-[100%]">
        <RelatedSlider title={`${detailData.info.name}와(과) 비슷한 장소`}>
          {detailData.similarSpaceList.slice(0, 6).map((data) => (
            <PlaceInfoCard
              key={data.id}
              size="small"
              {...data}
              className="w-[16.3rem] mr-[0.8rem]"
            />
          ))}
        </RelatedSlider>
        {detailData.relatedCurationList.length > 0 && (
          <RelatedSlider title={`${detailData.info.name}이(가) 담긴 큐레이션`}>
            {detailData.relatedCurationList.map((data) => (
              <CurationInfoCardDark
                key={data.id}
                {...data}
                className="w-[33.5rem] mr-[0.8rem]"
              />
            ))}
          </RelatedSlider>
        )}
      </section>
    </div>
  );
}
