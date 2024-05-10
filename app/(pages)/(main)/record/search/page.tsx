import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import PlaceInfoCard from "@feature/place/components/PlaceInfo/organisms/PlaceInfoCard";
import TextSearchBar from "@feature/search/components/SearchText/molecules/TextSearchBar";
import { getTextSearchPlaceData } from "@feature/search/queries/getTextSearchPlaceData";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  searchParams: any;
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const textSearchPlaceData =
    searchParams.search_query &&
    (await getTextSearchPlaceData(searchParams.search_query));
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${searchParams.search_query}과 연관된 장소의 공간 기록을 남겨보세요!`,
    openGraph: {
      images: textSearchPlaceData
        ? [textSearchPlaceData.spaceList[0].imgUrl]
        : [...previousImages],
    },
    description: `${searchParams.search_query}과 연관된 장소의 공간 기록을 남겨보세요!`,
    keywords: [
      "로컬무드",
      "localmood",
      "공간기록",
      `${searchParams.search_query}`,
      "마포구",
    ],
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
