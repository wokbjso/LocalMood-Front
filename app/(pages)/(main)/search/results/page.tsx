import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import UseDeferredComponent from "@common/hooks/useDeferredComponent";
import SearchResult from "@feature/search/components/SearchResult/template/SearchResult";
import TextSearchBar from "@feature/search/components/SearchText/molecules/TextSearchBar";
import SearchSkeleton from "@feature/search/components/skeleton/HomeSearchSkeleton";
import { getTextSearchCurationData } from "@feature/search/queries/getTextSearchCurationData";
import { getTextSearchPlaceData } from "@feature/search/queries/getTextSearchPlaceData";
import { postKeywordSearchCurationData } from "@feature/search/queries/postKeywordSearchCurationData";
import { postKeywordSearchPlaceData } from "@feature/search/queries/postKeywordSearchPlaceData";
import { Suspense } from "react";

//Page
export default async function SearchResultPage({
  searchParams,
}: {
  searchParams: any;
}) {
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

  const textSearchPlaceData =
    searchParams.search_query &&
    (await getTextSearchPlaceData(
      searchParams.search_query,
      searchParams.sort
    ));
  const textSearchCurationData =
    searchParams.search_query &&
    (await getTextSearchCurationData(searchParams.search_query));
  const keywordSearchPlaceData =
    searchParams.keyword &&
    (await postKeywordSearchPlaceData(searchParams.keyword, searchParams.sort));
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
      <Suspense
        fallback={
          <UseDeferredComponent>
            <SearchSkeleton />
          </UseDeferredComponent>
        }
      >
        <SearchResult
          search_query={searchParams.search_query}
          keyword={searchParams.keyword}
          textSearchPlaceData={textSearchPlaceData}
          textSearchCurationData={textSearchCurationData}
          keywordSearchPlaceData={keywordSearchPlaceData}
          keywordSearchCurationData={keywordSearchCurationData}
        />
      </Suspense>
    </main>
  );
}
