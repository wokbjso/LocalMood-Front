import ArrowBackTopBar from "@/common/components/ui/topBar/ArrowBackTopBar";
import PlaceInfoCard from "@/feature/place/components/PlaceInfo/organisms/PlaceInfoCard";
import TextSearchBar from "@/feature/search/components/SearchText/molecules/TextSearchBar";
import { getTextSearchPlaceData } from "@/feature/search/queries/getTextSearchPlaceData";
import { Metadata } from "next";

type Props = {
  searchParams: any;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return {
    title: `${searchParams.search_query} 검색결과`,
  };
}

export default async function RecordSearchPage({ searchParams }: Props) {
  const textSearchPlaceData =
    searchParams.search_query &&
    (await getTextSearchPlaceData(searchParams.search_query));
  return (
    <div className="w-[100%] h-[100%]">
      <ArrowBackTopBar color="#9E9E9E">
        <TextSearchBar
          variant="record"
          placeholder="공간 이름을 검색해보세요"
        />
      </ArrowBackTopBar>
      {textSearchPlaceData?.spaceCount === 0 && (
        <div className="flex justify-center items-center body1-medium text-text-gray-8 h-[31dvh]">
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
