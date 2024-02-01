import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import GetPlaceScrapped from "@feature/place/queries/getPlaceScrapped";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";

export default async function RecordScrappedMore() {
  const scrappedPlace = await GetPlaceScrapped();

  return (
    <div>
      <PlaceRecordTopBar
        showIndicator={false}
        indicatorIndex={0}
        text="스크랩한 공간"
      />
      <div className="flex flex-col items-start w-full pt-[9.6rem] px-[2rem] gap-[0.8rem] pb-[15rem]">
        {scrappedPlace.map((props, index) => (
          <div key={index} className="w-full">
            <PlaceInfoMain direction="horizontal" variant="record" {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}
