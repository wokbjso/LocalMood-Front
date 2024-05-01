// import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
// import SearchResult from "@feature/search/components/SearchResult/template/SearchResult";
// import TextSearchBar from "@feature/search/components/SearchText/molecules/TextSearchBar";
// import { getTextSearchCurationData } from "@feature/search/queries/getTextSearchCurationData";
// import { postKeywordSearchCurationData } from "@feature/search/queries/postKeywordSearchCurationData";

// //Page
// export default async function SearchResultPage({
//   searchParams,
// }: {
//   searchParams: any;
// }) {
//   const manufactureCurationKeyword = (keyword: string) => {
//     let curation_keyword = [];
//     let count = 0;

//     for (const [key, value] of Object.entries(JSON.parse(keyword as string))) {
//       if (key !== "type" && value !== "ALL") {
//         curation_keyword.push(value as string);
//         count++;
//       }
//       if (count === 2) break;

//       return curation_keyword;
//     }
//   };

//   const textSearchCurationData =
//     searchParams.search_query &&
//     (await getTextSearchCurationData(searchParams.search_query));

//   const keywordSearchCurationData =
//     searchParams.keyword &&
//     (await postKeywordSearchCurationData(
//       manufactureCurationKeyword(searchParams.keyword)
//     ));

//   return (
//     <main className="w-[100%] h-[100%]">
//       {/* Template */}
//       <ArrowBackTopBar color="#9E9E9E" className="pt-[1.2rem]">
//         <TextSearchBar
//           placeholder="공간, 큐레이션을 검색해보세요"
//           className="rounded-[1000px]"
//         />
//       </ArrowBackTopBar>
//       <SearchResult
//         search_query={searchParams.search_query}
//         keyword={searchParams.keyword}
//         textSearchCurationData={textSearchCurationData}
//         keywordSearchCurationData={keywordSearchCurationData}
//       />
//     </main>
//   );
// }
