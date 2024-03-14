"use client";

import useSearchBar from "@feature/search/components/SearchBar/useSearchBar";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import SearchNoResult from "@feature/search/components/SearchNoResult/SearchNoResult";
import { useEffect, useState } from "react";
import {
  SearchCurationResponse,
  SearchPlaceResponse,
} from "@feature/search/queries/dto/search-type";
import Divider from "@common/components/ui/divider/Divider";
import FilterIcon from "@common//assets/icons/filter/filter-keyword.svg";
import PlaceInfoCard from "@feature/place/components/PlaceInfoCard/PlaceInfoCard";

export default function SearchResult({ searchParams }: { searchParams: any }) {
  const [textSearchPlaceData, setTextSearchPlaceData] =
    useState<SearchPlaceResponse>();
  const [keywordSearchPlaceData, setKeywordSearchPlaceData] =
    useState<SearchPlaceResponse>();
  const [textSearchCurationData, setTextSearchCurationData] =
    useState<SearchCurationResponse>();
  const [keywordSearchCurationData, setKeywordSearchCurationData] =
    useState<SearchCurationResponse>();
  const { tabIndex: searchBarTabIndex, handlers: searchBarHandlers } =
    useSearchBar();
  const getTextSearchCurationData = async () => {
    const response = await fetch(
      `/api/search/curation-search-text?search_query=${searchParams.search_query}`
    );
    if (!response.ok) {
      alert("오류가 발생했습니다.");
      return;
    }

    setTextSearchCurationData(await response.json());
  };
  const getTextSearchPlaceData = async () => {
    const response = await fetch("/api/search/place-search-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: searchParams.search_query }),
      cache: "no-cache",
    });

    if (!response.ok) {
      alert("오류가 발생했습니다.");
      return;
    }

    setTextSearchPlaceData(await response.json());
  };

  const getKeywordSearchPlaceData = async () => {
    const response = await fetch("/api/search/place-search-keyword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchParams.keyword),
    });

    if (!response.ok) {
      alert("오류가 발생했습니다.");
      return;
    }

    setKeywordSearchPlaceData(await response.json());
  };

  const manufactureCurationKeyword = () => {
    let keyword = [];
    let count = 0;

    for (const [key, value] of Object.entries(
      JSON.parse(searchParams.keyword as string)
    )) {
      if (key !== "type" && value !== "ALL") {
        keyword.push(value as string);
        count++;
      }
      if (count === 2) break;
    }

    return keyword;
  };

  const getKeywordSearchCurationData = async () => {
    const response = await fetch("/api/search/curation-search-keyword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(manufactureCurationKeyword()),
    });

    if (!response.ok) {
      alert("오류가 발생했습니다.");
      return;
    }

    setKeywordSearchCurationData(await response.json());
  };

  useEffect(() => {
    if (searchParams.search_query) {
      getTextSearchPlaceData();
      getTextSearchCurationData();
    }

    if (searchParams.keyword) {
      getKeywordSearchPlaceData();
      getKeywordSearchCurationData();
    }
  }, [searchParams]);
  return (
    <>
      {searchParams.search_query &&
        textSearchPlaceData?.spaceCount === 0 &&
        textSearchCurationData?.CurationCount === 0 && <SearchNoResult />}
      {searchParams.search_query &&
        textSearchPlaceData?.spaceCount === 0 &&
        textSearchCurationData &&
        textSearchCurationData.CurationCount > 0 && (
          <div className="h-[100vh] pt-[5.4rem] overflow-y-hidden">
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
                  <CurationMain
                    key={curation.id}
                    id={curation.id}
                    image={curation.image}
                    author={curation.author}
                    title={curation.title}
                    keyword={curation.keyword}
                    spaceCount={curation.spaceCount}
                    className="mb-[4rem]"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      {searchParams.search_query &&
        textSearchPlaceData &&
        textSearchPlaceData?.spaceCount > 0 &&
        textSearchCurationData?.CurationCount === 0 && (
          <div className="h-[100vh] pt-[5.4rem] overflow-y-hidden">
            <Tab
              sections={[
                { text: "공간", length: textSearchPlaceData.spaceCount },
                { text: "큐레이션", length: 0 },
              ]}
              onChange={searchBarHandlers.handleTabIndex}
            />
            {searchBarTabIndex === 0 && (
              <div className="h-full px-[2rem] pt-[2rem] pb-[14.5rem] overflow-y-scroll">
                {textSearchPlaceData.spaceList.map((place) => (
                  <div key={place.id + place.type} className="mb-[4rem]">
                    <PlaceInfoCard
                      {...place}
                      interior={
                        place.type === "CAFE" ? place.keyword : undefined
                      }
                      bestMenu={
                        place.type === "RESTAURANT" ? place.keyword : undefined
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
      {searchParams.search_query &&
        textSearchPlaceData &&
        textSearchPlaceData?.spaceCount > 0 &&
        textSearchCurationData &&
        textSearchCurationData?.CurationCount > 0 && (
          <div className="h-[100vh] pt-[5.4rem] overflow-y-hidden">
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
                <div className="h-full px-[2rem] pt-[1.2rem] pb-[14.5rem] overflow-y-scroll">
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
                  <CurationMain
                    key={curation.id}
                    id={curation.id}
                    image={curation.image}
                    author={curation.author}
                    title={curation.title}
                    keyword={curation.keyword}
                    spaceCount={curation.spaceCount}
                    className="mb-[4rem]"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      {searchParams.keyword &&
        keywordSearchPlaceData?.spaceCount === 0 &&
        keywordSearchCurationData?.CurationCount === 0 && <SearchNoResult />}
      {searchParams.keyword &&
        keywordSearchPlaceData?.spaceCount === 0 &&
        keywordSearchCurationData &&
        keywordSearchCurationData.CurationCount > 0 && (
          <div className="h-[100vh] pt-[5.4rem] overflow-y-hidden">
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
                  <CurationMain
                    key={curation.id}
                    id={curation.id}
                    image={curation.image}
                    author={curation.author}
                    title={curation.title}
                    keyword={curation.keyword}
                    spaceCount={curation.spaceCount}
                    className="mb-[4rem]"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      {searchParams.keyword &&
        keywordSearchPlaceData &&
        keywordSearchPlaceData?.spaceCount > 0 &&
        keywordSearchCurationData?.CurationCount === 0 && (
          <div className="h-[100vh] pt-[5.4rem] overflow-y-hidden">
            <Tab
              sections={[
                { text: "공간", length: keywordSearchPlaceData.spaceCount },
                { text: "큐레이션", length: 0 },
              ]}
              onChange={searchBarHandlers.handleTabIndex}
            />
            {searchBarTabIndex === 0 && (
              <div className="h-full px-[2rem] pt-[2rem] pb-[14.5rem] overflow-y-scroll">
                {keywordSearchPlaceData.spaceList.map((place) => (
                  <div key={place.id + place.type} className="mb-[4rem]">
                    <PlaceInfoCard {...place} keywordCategoryNum={2} />
                  </div>
                ))}
              </div>
            )}
            {searchBarTabIndex === 1 && <SearchNoResult />}
          </div>
        )}
      {searchParams.keyword &&
        keywordSearchPlaceData &&
        keywordSearchPlaceData?.spaceCount > 0 &&
        keywordSearchCurationData &&
        keywordSearchCurationData?.CurationCount > 0 && (
          <div className="h-[100vh] pt-[5.4rem] overflow-y-hidden">
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
                <div className="h-full px-[2rem] pt-[1.2rem] pb-[14.5rem] overflow-y-scroll">
                  {keywordSearchPlaceData.spaceList.map((place) => (
                    <div key={place.id + place.type} className="mb-[4rem]">
                      <PlaceInfoCard {...place} keywordCategoryNum={2} />
                    </div>
                  ))}
                </div>
              </>
            )}
            {searchBarTabIndex === 1 && (
              <div className="h-full px-[2rem] pt-[2rem] pb-[10.5rem] overflow-y-scroll">
                {keywordSearchCurationData.CurationList.map((curation) => (
                  <CurationMain
                    key={curation.id}
                    id={curation.id}
                    image={curation.image}
                    author={curation.author}
                    title={curation.title}
                    keyword={curation.keyword}
                    spaceCount={curation.spaceCount}
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
