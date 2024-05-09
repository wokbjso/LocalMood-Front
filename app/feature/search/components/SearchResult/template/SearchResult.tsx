"use client";

import Tab from "@common/components/ui/tab/Tab";
import { lazy } from "react";
import { SearchCurationResponse } from "@feature/search/queries/dto/search-type";
import Divider from "@common/components/ui/divider/Divider";
import CurationInfoCardLight from "@feature/curation/components/CurationInfo/organisms/CurationInfoCardLight";
import useTextSearchBar from "../../../hooks/SearchText/useTextSearchBar";
import SearchNoResult from "../organisms/SearchNoResult";
import dynamic from "next/dynamic";
import useGetTextSearchPlaceData from "@feature/search/queries/useGetTextSearchPlaceData";
import { useRecoilValue } from "recoil";
import { searchSortState } from "@feature/search/state/sortState";
import useGetKeywordSearchPlaceData from "@feature/search/queries/useGetKeywordSearchPlaceData";
import UseDeferredComponent from "@common/hooks/useDeferredComponent";
import SearchSkeleton from "../../skeleton/HomeSearchSkeleton";
const PlaceInfoCard = lazy(
  () => import("@feature/place/components/PlaceInfo/organisms/PlaceInfoCard")
);
const ChangeSearchConditon = dynamic(
  () => import("../organisms/ChangeSearchCondition"),
  { ssr: false }
);

interface SearchResultProps {
  search_query?: string;
  keyword?: string;
  sortState?: "RECENT" | "HOT";
  textSearchCurationData?: SearchCurationResponse;
  keywordSearchCurationData: SearchCurationResponse;
}

//Template
export default function SearchResult({
  search_query,
  keyword,
  textSearchCurationData,
  keywordSearchCurationData,
}: SearchResultProps) {
  const sortState = useRecoilValue(searchSortState);

  const { tabIndex: searchBarTabIndex, handlers: searchBarHandlers } =
    useTextSearchBar();

  const { data: textSearchPlaceData, isFetching: textResultFetching } =
    useGetTextSearchPlaceData({
      sortState,
      name: search_query,
    });
  const { data: keywordSearchPlaceData, isFetching: keywordResultFetching } =
    useGetKeywordSearchPlaceData({ sortState, keyword });

  return textResultFetching || keywordResultFetching ? (
    <UseDeferredComponent>
      <SearchSkeleton />
    </UseDeferredComponent>
  ) : (
    <>
      {search_query &&
        textSearchPlaceData?.spaceCount === 0 &&
        textSearchCurationData?.CurationCount === 0 && <SearchNoResult />}
      {search_query &&
        textSearchPlaceData?.spaceCount === 0 &&
        textSearchCurationData &&
        textSearchCurationData?.CurationCount > 0 && (
          <div className="h-[100%] overflow-y-hidden">
            <Tab
              sections={[
                { text: "공간", length: 0 },
                {
                  text: "큐레이션",
                  length: textSearchCurationData.CurationCount,
                },
              ]}
              onChange={searchBarHandlers.handleTabIndex}
            />
            {searchBarTabIndex === 0 && <SearchNoResult />}
            {searchBarTabIndex === 1 && (
              <div className="h-full px-[2rem] pt-[2rem] pb-[10.5rem] overflow-y-scroll">
                {textSearchCurationData?.CurationList.map((curation) => (
                  <CurationInfoCardLight
                    key={curation.id}
                    {...curation}
                    className="mb-[4rem]"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      {search_query &&
        textSearchPlaceData &&
        textSearchPlaceData?.spaceCount > 0 &&
        textSearchCurationData?.CurationCount === 0 && (
          <div className="h-[100%] overflow-y-hidden">
            <Tab
              sections={[
                { text: "공간", length: textSearchPlaceData.spaceCount },
                { text: "큐레이션", length: 0 },
              ]}
              onChange={searchBarHandlers.handleTabIndex}
            />
            {searchBarTabIndex === 0 && (
              <>
                <div className="h-full pb-[24.5rem] overflow-y-scroll">
                  <ChangeSearchConditon />
                  <Divider className="h-[1px] bg-line-gray-3 mb-[12px]" />
                  {textSearchPlaceData.spaceList.map((place) => (
                    <div
                      key={place.id + place.type}
                      className="px-[2rem] mb-[4rem]"
                    >
                      <PlaceInfoCard
                        {...place}
                        interior={
                          place.type === "CAFE" ? place.keyword : undefined
                        }
                        bestMenu={
                          place.type === "RESTAURANT"
                            ? place.keyword
                            : undefined
                        }
                        keywordCategoryNum={2}
                        bottomClassName="flex-col"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
            {searchBarTabIndex === 1 && <SearchNoResult />}
          </div>
        )}
      {search_query &&
        textSearchPlaceData &&
        textSearchPlaceData?.spaceCount > 0 &&
        textSearchCurationData &&
        textSearchCurationData?.CurationCount > 0 && (
          <div className="h-[100%] overflow-y-hidden">
            <Tab
              sections={[
                { text: "공간", length: textSearchPlaceData.spaceCount },
                {
                  text: "큐레이션",
                  length: textSearchCurationData.CurationCount,
                },
              ]}
              onChange={searchBarHandlers.handleTabIndex}
            />
            {searchBarTabIndex === 0 && (
              <>
                <div className="h-[100%] pb-[24.5rem] overflow-auto">
                  <ChangeSearchConditon />
                  <Divider className="h-[1px] bg-line-gray-3 mb-[12px]" />
                  {textSearchPlaceData.spaceList.map((place) => (
                    <div
                      key={place.id + place.type}
                      className="px-[2rem] mb-[4rem]"
                    >
                      <PlaceInfoCard
                        {...place}
                        interior={
                          place.type === "CAFE" ? place.keyword : undefined
                        }
                        bestMenu={
                          place.type === "RESTAURANT"
                            ? place.keyword
                            : undefined
                        }
                        keywordCategoryNum={2}
                        bottomClassName="flex-col"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
            {searchBarTabIndex === 1 && (
              <div className="h-full px-[2rem] pt-[2rem] pb-[10.5rem] overflow-y-scroll">
                {textSearchCurationData.CurationList.map((curation) => (
                  <CurationInfoCardLight
                    key={curation.id}
                    {...curation}
                    className="mb-[4rem]"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      {keyword &&
        keywordSearchPlaceData?.spaceCount === 0 &&
        keywordSearchCurationData?.CurationCount === 0 && <SearchNoResult />}
      {keyword &&
        keywordSearchPlaceData?.spaceCount === 0 &&
        keywordSearchCurationData &&
        keywordSearchCurationData.CurationCount > 0 && (
          <div className="h-[100%] overflow-y-hidden">
            <Tab
              sections={[
                { text: "공간", length: 0 },
                {
                  text: "큐레이션",
                  length: keywordSearchCurationData.CurationCount,
                },
              ]}
              onChange={searchBarHandlers.handleTabIndex}
            />
            {searchBarTabIndex === 0 && <SearchNoResult />}
            {searchBarTabIndex === 1 && (
              <div className="h-full px-[2rem] pt-[2rem] pb-[10.5rem] overflow-y-scroll">
                {keywordSearchCurationData?.CurationList.map((curation) => (
                  <CurationInfoCardLight
                    key={curation.id}
                    {...curation}
                    className="mb-[4rem]"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      {!(textResultFetching || keywordResultFetching) &&
        keyword &&
        keywordSearchPlaceData &&
        keywordSearchPlaceData?.spaceCount > 0 &&
        keywordSearchCurationData?.CurationCount === 0 && (
          <div className="h-[100%] overflow-y-hidden">
            <Tab
              sections={[
                { text: "공간", length: keywordSearchPlaceData.spaceCount },
                { text: "큐레이션", length: 0 },
              ]}
              onChange={searchBarHandlers.handleTabIndex}
            />
            {searchBarTabIndex === 0 && (
              <>
                <div className="h-full pb-[24.5rem] overflow-y-scroll">
                  <ChangeSearchConditon />
                  <Divider className="h-[1px] bg-line-gray-3 mb-[12px]" />
                  {keywordSearchPlaceData.spaceList.map((place) => (
                    <div
                      key={place.id + place.type}
                      className="px-[2rem] mb-[4rem]"
                    >
                      <PlaceInfoCard
                        {...place}
                        interior={
                          place.type === "CAFE" ? place.keyword : undefined
                        }
                        bestMenu={
                          place.type === "RESTAURANT"
                            ? place.keyword
                            : undefined
                        }
                        keywordCategoryNum={2}
                        bottomClassName="flex-col"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
            {searchBarTabIndex === 1 && <SearchNoResult />}
          </div>
        )}
      {keyword &&
        keywordSearchPlaceData &&
        keywordSearchPlaceData?.spaceCount > 0 &&
        keywordSearchCurationData &&
        keywordSearchCurationData?.CurationCount > 0 && (
          <div className="h-[100%] overflow-y-hidden">
            <Tab
              sections={[
                { text: "공간", length: keywordSearchPlaceData.spaceCount },
                {
                  text: "큐레이션",
                  length: keywordSearchCurationData.CurationCount,
                },
              ]}
              onChange={searchBarHandlers.handleTabIndex}
            />
            {searchBarTabIndex === 0 && (
              <>
                <div className="h-full pb-[24.5rem] overflow-y-scroll">
                  <ChangeSearchConditon />
                  <Divider className="h-[1px] bg-line-gray-3 mb-[12px]" />
                  {keywordSearchPlaceData.spaceList.map((place) => (
                    <div
                      key={place.id + place.type}
                      className="px-[2rem] mb-[4rem]"
                    >
                      <PlaceInfoCard
                        {...place}
                        interior={
                          place.type === "CAFE" ? place.keyword : undefined
                        }
                        bestMenu={
                          place.type === "RESTAURANT"
                            ? place.keyword
                            : undefined
                        }
                        keywordCategoryNum={2}
                        bottomClassName="flex-col"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
            {searchBarTabIndex === 1 && (
              <div className="h-full px-[2rem] pt-[2rem] pb-[10.5rem] overflow-y-scroll">
                {keywordSearchCurationData.CurationList.map((curation) => (
                  <CurationInfoCardLight
                    key={curation.id}
                    {...curation}
                    className="mb-[4rem]"
                  />
                ))}
              </div>
            )}
          </div>
        )}
    </>
  );
}
