import Divider from "@common/components/ui/divider/Divider";
import GraphGage from "@common/components/ui/graph/GraphGage/GraphGage";
import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import PlaceReviews from "@feature/place/components/PlaceReview/organisms/PlaceReviews";
import {
  PLACE_CAFE_PURPOSE,
  PLACE_RESTAURANT_PURPOSE,
  PLACE_SUB_TYPE,
} from "@feature/place/constants/place-tag-category";
import GetPlaceDetail from "@feature/place/queries/getPlaceDetail";
import GetPlaceReview from "@feature/place/queries/getPlaceReview";
import { Metadata } from "next";

type Props = {
  params: { id: number };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const detailData = await GetPlaceDetail(params.id);

  return {
    title: `${detailData.info.name} 전체`,
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
  const reviewData = await GetPlaceReview(id);
  const detailData = await GetPlaceDetail(id);
  return (
    <div className="w-[100%] h-[100%] pb-[14.2rem] overflow-auto">
      <ArrowBackTopBar color="#9E9E9E" className="" />
      <section className="px-[2rem] mt-[1.2rem]">
        <div className="headline1 text-black">
          {detailData.info.name}의 공간기록
        </div>
        <div className="pt-[1.2rem] pb-[4rem]">
          {detailData.info.type === "CAFE"
            ? PLACE_CAFE_PURPOSE.map((li: string, i: number) => (
                <GraphGage
                  key={li + i}
                  type={detailData.info.type}
                  evaluation={li}
                  percentage={reviewData.purposeEval[li]}
                  className={
                    i === 0 ? "mt-[3.2rem] mb-[2.4rem]" : "mb-[2.4rem]"
                  }
                />
              ))
            : PLACE_RESTAURANT_PURPOSE.map((li: string, i: number) => (
                <GraphGage
                  key={li + i}
                  type={detailData.info.type}
                  evaluation={li}
                  percentage={reviewData.purposeEval[li]}
                  className={
                    i === 0 ? "mt-[3.2rem] mb-[2.4rem]" : "mb-[2.4rem]"
                  }
                />
              ))}
        </div>
      </section>
      <Divider className="bg-line-gray-3 h-[0.4rem]" />
      <PlaceReviews type={detailData.info.type} reviews={reviewData.reviews} />
    </div>
  );
}
