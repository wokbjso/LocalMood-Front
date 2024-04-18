import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import PlaceInfoCard from "@feature/place/components/PlaceInfo/molecules/PlaceInfoCard";
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import { getTextSearchPlaceData } from "@feature/search/queries/getTextSearchPlaceData";

export default async function RecordSearchPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const textSearchPlaceData =
    searchParams.search_query &&
    (await getTextSearchPlaceData(searchParams.search_query));
  return (
    <div className="w-[100%] h-[100%]">
      <ArrowBackTopBar color="#9E9E9E">
        <SearchBar variant="record" placeholder="공간 이름을 검색해보세요" />
      </ArrowBackTopBar>
      {textSearchPlaceData?.spaceCount === 0 && (
        <div className="flex justify-center items-center body1-medium text-text-gray-8 h-[31vh]">
          검색된 결과가 없습니다.
        </div>
      )}
      {textSearchPlaceData &&
        textSearchPlaceData?.spaceCount > 0 &&
        textSearchPlaceData?.spaceList.map((li: any) => (
          <div key={li.id} className="w-full px-[2rem]">
            <PlaceInfoCard
              className="mt-[0.8rem]"
              direction="horizontal"
              variant="record"
              {...li}
            />
          </div>
        ))}
    </div>
  );
}
