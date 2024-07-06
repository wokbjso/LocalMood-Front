import Divider from "@/common/components/ui/divider/Divider";
import Title from "@/common/components/ui/text/Title";
import ArrowBackTopBar from "@/common/components/ui/topBar/ArrowBackTopBar";
import PlaceRecordData from "@/feature/place/components/PlaceRecord/organisms/PlaceRecordData";
import PlaceRecordPurposeDistribution from "@/feature/place/components/PlaceRecord/organisms/PlaceRecordPurposeDistribution";
import { PLACE_SUB_TYPE } from "@/feature/place/constants/place-tag-category";
import GetPlaceDetail from "@/feature/place/queries/getPlaceDetail";
import GetPlaceReview from "@/feature/place/queries/getPlaceReview";
import { Metadata } from "next";

type Props = {
  params: { id: number };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const detailData = await GetPlaceDetail(params.id);

  return {
    title: `${detailData.info.name}의 공간기록`,
    openGraph: {
      images: [detailData.info.imgUrlList[0], "/localmood.png"],
    },
    description: `${detailData.info.visitorNum}이 방문하기 좋은 ${
      detailData.info.name
    }(${
      detailData.info.type === "CAFE"
        ? "카페"
        : detailData.info.subType && PLACE_SUB_TYPE[detailData.info.subType]
    })의 정보를 더 자세히 보고싶다면?`,
    keywords: [
      "로컬무드",
      "localmood",
      `${detailData.info.name}`,
      `${
        detailData.info.type === "CAFE"
          ? "카페"
          : detailData.info.subType && PLACE_SUB_TYPE[detailData.info.subType]
      }`,
      "리뷰",
      "마포구",
    ],
  };
}

export default async function PlaceDetailMorePage({ params: { id } }: Props) {
  const detailData = await GetPlaceDetail(id);
  const reviewData = await GetPlaceReview(id);

  return (
    <div className="w-[100%] h-[100%] pb-[14.2rem] overflow-auto">
      <ArrowBackTopBar color="#9E9E9E" className="" />
      <Title className="headline1 px-[2rem] mt-[1.2rem]">{`${detailData.info.name}의 공간기록`}</Title>
      <PlaceRecordPurposeDistribution
        type={detailData.info.type}
        reviewDataPercentage={reviewData.purposeEval}
        className="pt-[1.2rem] pb-[4rem] px-[2rem] "
      />
      <Divider className="bg-line-gray-3 h-[0.4rem]" />
      <PlaceRecordData
        type={detailData.info.type}
        reviews={reviewData.reviews}
      />
    </div>
  );
}
