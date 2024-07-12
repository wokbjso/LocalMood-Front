import PlaceInfoCard from "../../PlaceInfo/organisms/PlaceInfoCard";
import CurationInfoCardDark from "@/feature/curation/components/CurationInfo/organisms/CurationInfoCardDark";
import RelatedSlider from "./RelatedSlider";
import GetPlaceRelatedInfo from "@/feature/place/queries/getPlaceRelatedInfo";

interface RelatedSliderListsProps {
  id: number;
  name: string;
}

export default async function RelatedSliderLists({
  id,
  name,
}: RelatedSliderListsProps) {
  const relatedData = await GetPlaceRelatedInfo(id);

  return (
    <section className="pl-[20px] w-[100%]">
      <RelatedSlider title={`${name}와(과) 비슷한 장소`}>
        {relatedData?.similarSpaceList.slice(0, 6).map((data) => (
          <PlaceInfoCard
            key={data.id}
            size="small"
            {...data}
            className="w-[16.3rem] mr-[0.8rem]"
          />
        ))}
      </RelatedSlider>
      {relatedData && relatedData.relatedCurationList.length > 0 && (
        <RelatedSlider title={`${name}이(가) 담긴 큐레이션`}>
          {relatedData?.relatedCurationList.map((data) => (
            <CurationInfoCardDark
              key={data.id}
              {...data}
              className="w-[33.5rem] mr-[0.8rem]"
            />
          ))}
        </RelatedSlider>
      )}
    </section>
  );
}
