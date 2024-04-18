"use client";

import useSearchBar from "@feature/search/components/SearchBar/useSearchBar";
import Tab from "@common/components/ui/tab/Tab";
import SearchNoResult from "@feature/search/components/SearchNoResult/SearchNoResult";
import { Suspense, lazy } from "react";
import {
  SearchCurationResponse,
  SearchPlaceResponse,
} from "@feature/search/queries/dto/search-type";
import Divider from "@common/components/ui/divider/Divider";
import FilterIcon from "@common/assets/icons/filter/filter-keyword.svg";
const PlaceInfoCard = lazy(
  () => import("@feature/place/components/PlaceInfo/molecules/PlaceInfoCard")
);
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import HomeSearchSkeleton from "@feature/search/components/HomeSearchSkeleton/HomeSearchSkeleton";
import CurationCardLight from "@feature/curation/components/CurationCardLight/CurationCardLight";
import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";

interface SearchResultProps {
  search_query?: string;
  keyword?: string;
  textSearchPlaceData?: SearchPlaceResponse;
  textSearchCurationData?: SearchCurationResponse;
  keywordSearchPlaceData?: SearchPlaceResponse;
  keywordSearchCurationData: SearchCurationResponse;
}

export default function SearchResult({
  search_query,
  keyword,
  textSearchPlaceData,
  textSearchCurationData,
  keywordSearchPlaceData,
  keywordSearchCurationData,
}: SearchResultProps) {
  const { tabIndex: searchBarTabIndex, handlers: searchBarHandlers } =
    useSearchBar();
  return (
    <>
      <ArrowBackTopBar color="#9E9E9E" className="pt-[1.2rem]">
        <SearchBar
          placeholder="공간, 큐레이션을 검색해보세요"
          className="rounded-[1000px]"
        />
      </ArrowBackTopBar>
      <Suspense fallback={<HomeSearchSkeleton />}>
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
                    <CurationCardLight
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
                <div className="h-full px-[2rem] pt-[2rem] pb-[24.5rem] overflow-y-scroll">
                  {textSearchPlaceData.spaceList.map((place) => (
                    <div key={place.id + place.type} className="mb-[4rem]">
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
                      />
                    </div>
                  ))}
                </div>
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
                  <div className="flex justify-between px-[2rem] pt-[1.6rem] pb-[1.2rem]">
                    <div className="flex items-center">
                      <FilterIcon />
                      <span className="ml-[0.8rem] body2-semibold text-text-gray-8">
                        키워드 설정
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <FilterIcon />
                      <span className="ml-[0.8rem] body2-semibold text-text-gray-8">
                        리뷰 최신순
                      </span>
                    </div>
                  </div>
                  <Divider className="h-[0.1rem] bg-line-gray-3" />
                  <div className="h-[100%] px-[2rem] pt-[1.2rem] pb-[24.5rem] overflow-auto">
                    {textSearchPlaceData.spaceList.map((place) => (
                      <div key={place.id + place.type} className="mb-[4rem]">
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
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
              {searchBarTabIndex === 1 && (
                <div className="h-full px-[2rem] pt-[2rem] pb-[10.5rem] overflow-y-scroll">
                  {textSearchCurationData.CurationList.map((curation) => (
                    <CurationCardLight
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
                    <CurationCardLight
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
                <div className="h-full px-[2rem] pt-[2rem] pb-[24.5rem] overflow-y-scroll">
                  {keywordSearchPlaceData.spaceList.map((place) => (
                    <div key={place.id + place.type} className="mb-[4rem]">
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
                      />
                    </div>
                  ))}
                </div>
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
                  <div className="flex justify-between px-[2rem] pt-[1.6rem] pb-[1.2rem]">
                    <div className="flex items-center">
                      <FilterIcon />
                      <span className="ml-[0.8rem] body2-semibold text-text-gray-8">
                        키워드 설정
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <FilterIcon />
                      <span className="ml-[0.8rem] body2-semibold text-text-gray-8">
                        리뷰 최신순
                      </span>
                    </div>
                  </div>
                  <Divider className="h-[0.1rem] bg-line-gray-3" />
                  <div className="h-full px-[2rem] pt-[1.2rem] pb-[24.5rem] overflow-y-scroll">
                    {keywordSearchPlaceData.spaceList.map((place) => (
                      <div key={place.id + place.type} className="mb-[4rem]">
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
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
              {searchBarTabIndex === 1 && (
                <div className="h-full px-[2rem] pt-[2rem] pb-[10.5rem] overflow-y-scroll">
                  {keywordSearchCurationData.CurationList.map((curation) => (
                    <CurationCardLight
                      key={curation.id}
                      {...curation}
                      className="mb-[4rem]"
                    />
                  ))}
                </div>
              )}
            </div>
          )}
      </Suspense>
    </>
  );
}
