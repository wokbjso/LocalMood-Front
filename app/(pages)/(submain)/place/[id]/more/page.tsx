import Divider from "@common/components/ui/divider/Divider";
import GraphGage from "@common/components/ui/graph/GraphGage/GraphGage";
import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import PlaceReviews from "@feature/place/components/PlaceReview/organisms/PlaceReviews";
import {
  PLACE_CAFE_PURPOSE,
  PLACE_RESTAURANT_PURPOSE,
} from "@feature/place/constants/place-tag-category";
import GetPlaceDetail from "@feature/place/queries/getPlaceDetail";
import GetPlaceReview from "@feature/place/queries/getPlaceReview";

export default async function PlaceDetailMorePage({
  params: { id },
}: {
  params: { id: number };
}) {
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
