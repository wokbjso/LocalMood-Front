import getMyCuration from "@feature/curation/queries/getMyCuration";
import SearchResult from "@feature/search/components/SearchResult/SearchResult";
import { getTextSearchCurationData } from "@feature/search/queries/getTextSearchCurationData";
import { getTextSearchPlaceData } from "@feature/search/queries/getTextSearchPlaceData";
import { postKeywordSearchCurationData } from "@feature/search/queries/postKeywordSearchCurationData";
import { postKeywordSearchPlaceData } from "@feature/search/queries/postKeywordSearchPlaceData";

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

  const myCuration = await getMyCuration();
  const textSearchPlaceData =
    searchParams.search_query &&
    (await getTextSearchPlaceData(searchParams.search_query));
  const textSearchCurationData =
    searchParams.search_query &&
    (await getTextSearchCurationData(searchParams.search_query));
  const keywordSearchPlaceData =
    searchParams.keyword &&
    (await postKeywordSearchPlaceData(searchParams.keyword));
  const keywordSearchCurationData =
    searchParams.keyword &&
    (await postKeywordSearchCurationData(
      manufactureCurationKeyword(searchParams.keyword)
    ));
  return (
    <main className="w-[100%] h-[100%]">
      <SearchResult
        search_query={searchParams.search_query}
        keyword={searchParams.keyword}
        textSearchPlaceData={textSearchPlaceData}
        textSearchCurationData={textSearchCurationData}
        keywordSearchPlaceData={keywordSearchPlaceData}
        keywordSearchCurationData={keywordSearchCurationData}
        myCuration={myCuration}
      />
    </main>
  );
}
