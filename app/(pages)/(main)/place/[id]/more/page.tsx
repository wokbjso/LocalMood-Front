import Divider from "@common/components/ui/divider/Divider";
import GraphGage from "@common/components/ui/graph/GraphGage/GraphGage";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import PlaceDetailMoreReviews from "@feature/place/components/PlaceDetail/PlaceDetailMoreReviews";
import { PLACE_PURPOSE } from "@feature/place/constants/place-tag-category";
import GetPlaceDetail from "@feature/place/queries/getPlaceDetail";
import GetPlaceReview from "@feature/place/queries/getPlaceReview";

export default async function PlaceDetailMore({
  params: { id },
}: {
  params: { id: number };
}) {
  const reviewData = await GetPlaceReview(id);
  const detailData = await GetPlaceDetail(id);
  console.log(reviewData);
  return (
    <div className="pb-[14.2rem]">
      <BasicTopBar color="#9E9E9E" className="" />
      <section className="px-[2rem] mt-[1.2rem]">
        <div className="headline1 text-black">
          {detailData.info.name}의 공간기록
        </div>
        <div className="pt-[1.2rem] pb-[4rem]">
          {PLACE_PURPOSE.map((li: string, i: number) => (
            <GraphGage
              key={li + i}
              evaluation={li}
              percentage={"25%"}
              className={i === 0 ? "mt-[3.2rem] mb-[2.4rem]" : "mb-[2.4rem]"}
            />
          ))}
        </div>
      </section>
      <Divider className="bg-line-gray-3 h-[0.4rem]" />
      <PlaceDetailMoreReviews reviews={reviewData.reviews} />
    </div>
  );
}