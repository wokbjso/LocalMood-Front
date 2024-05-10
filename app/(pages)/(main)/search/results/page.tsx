import dynamic from "next/dynamic";
import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import TextSearchBar from "@feature/search/components/SearchText/molecules/TextSearchBar";
import { getTextSearchCurationData } from "@feature/search/queries/getTextSearchCurationData";
import { postKeywordSearchCurationData } from "@feature/search/queries/postKeywordSearchCurationData";
import { Metadata, ResolvingMetadata } from "next";
const SearchResult = dynamic(
  () => import("@feature/search/components/SearchResult/template/SearchResult")
);

type Props = {
  searchParams: any;
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const getKeywordMetaData = () => {
    let keywords = [];
    if (searchParams.keyword) {
      for (const [key, value] of Object.entries(
        JSON.parse(searchParams.keyword)
      )) {
        if (value === "ALL") continue;
        if (key === "type") {
          if (value === "RESTAURANT") keywords.push("음식점");
          else if (value === "CAFE") keywords.push("카페");
        } else {
          keywords.push(value);
        }
      }

      return keywords.join(",");
    }
  };

  return {
    title: searchParams.search_query
      ? `텍스트 ${searchParams.search_query}에 알맞는 결과를 확인해보세요!`
      : searchParams.keyword
      ? `키워드 "${getKeywordMetaData()}"에 알맞는 결과를 확인해보세요!`
      : null,
    openGraph: {
      images: ["/search.png", ...previousImages],
    },
    description: searchParams.search_query
      ? `텍스트 ${searchParams.search_query}에 알맞는 결과를 확인해보세요!`
      : searchParams.keyword
      ? `키워드 "${getKeywordMetaData()}"에 알맞는 결과를 확인해보세요!`
      : null,
    keywords: [
      "로컬무드",
      "localmood",
      "검색",
      `${
        searchParams.search_query
          ? searchParams.search_query
          : searchParams.keyword
          ? getKeywordMetaData()
          : null
      }`,
      "마포구",
    ],
  };
}

//Page
export default async function SearchResultPage({ searchParams }: Props) {
  const manufactureCurationKeyword = (keyword: string) => {
    let curation_keyword = [];
    let count = 0;

    for (const [key, value] of Object.entries(JSON.parse(keyword as string))) {
      if (key !== "type" && value !== "ALL") {
        curation_keyword.push(value as string);
        count++;
      }
      if (count === 2) break;

      return curation_keyword;
    }
  };

  const textSearchCurationData =
    searchParams.search_query &&
    (await getTextSearchCurationData(searchParams.search_query));

  const keywordSearchCurationData =
    searchParams.keyword &&
    (await postKeywordSearchCurationData(
      manufactureCurationKeyword(searchParams.keyword)
    ));

  return (
    <main className="w-[100%] h-[100%]">
      {/* Template */}
      <ArrowBackTopBar color="#9E9E9E" className="pt-[1.2rem]">
        <TextSearchBar
          placeholder="공간, 큐레이션을 검색해보세요"
          className="rounded-[1000px]"
        />
      </ArrowBackTopBar>
      <SearchResult
        search_query={searchParams.search_query}
        keyword={searchParams.keyword}
        textSearchCurationData={textSearchCurationData}
        keywordSearchCurationData={keywordSearchCurationData}
      />
    </main>
  );
}
