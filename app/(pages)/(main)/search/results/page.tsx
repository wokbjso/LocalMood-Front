"use client";

import useSearchBar from "@feature/search/components/SearchBar/useSearchBar";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import { useSearchParams } from "next/navigation";
import SearchNoResult from "@feature/search/components/SearchNoResult/SearchNoResult";
import { useEffect, useState } from "react";
import PostKeywordPlaceSearch from "@feature/search/queries/postKeywordPlaceSearch";
import PostTextPlaceSearch from "@feature/search/queries/postTextPlaceSearch";
import {
  SearchCurationResponse,
  SearchPlaceResponse,
} from "@feature/search/queries/dto/search-type";
import GetTextCurationSearch from "@feature/search/queries/getTextCurationSearch";
import PostKeywordCurationSearch from "@feature/search/queries/postKeywordCurationSearch";
import Divider from "@common/components/ui/divider/Divider";
import FilterIcon from "@common//assets/icons/filter/filter-keyword.svg";

export default function SearchResult() {
  const searchParams = useSearchParams();
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
  const getTextSearchPlaceData = async () => {
    const data = await PostTextPlaceSearch(
      searchParams.get("search_query") as string
    );
    setTextSearchPlaceData(data);
  };
  const getTextSearchCurationData = async () => {
    const data = await GetTextCurationSearch(
      searchParams.get("search_query") as string
    );
    setTextSearchCurationData(data);
  };
  const getKeywordSearchPlaceData = async () => {
    const data = await PostKeywordPlaceSearch(
      JSON.parse(searchParams.get("keyword") as string)
    );
    setKeywordSearchPlaceData(data);
  };
  const getKeywordSearchCurationData = async () => {
    let keyword = [];
    let count = 0;

    for (const [, value] of Object.entries(
      JSON.parse(searchParams.get("keyword") as string)
    )) {
      if (value !== "ALL") {
        keyword.push(value as string);
        count++;
      }
      if (count === 2) break;
    }
    const data = await PostKeywordCurationSearch(keyword);
    setKeywordSearchCurationData(data);
  };
  useEffect(() => {
    if (searchParams.get("search_query")) {
      getTextSearchPlaceData();
      getTextSearchCurationData();
    } else if (searchParams.get("keyword")) {
      getKeywordSearchPlaceData();
      getKeywordSearchCurationData();
    }
  }, [searchParams.get("search_query"), searchParams.get("keyword")]);
  return (
    <>
      {searchParams.get("search_query") &&
        textSearchPlaceData?.spaceCount === 0 &&
        textSearchCurationData?.CurationCount === 0 && <SearchNoResult />}
      {searchParams.get("search_query") &&
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
                    imgUrl={curation.imgUrl}
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
      {searchParams.get("search_query") &&
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
                    <PlaceInfoMain {...place} keywordCategoryNum={2} />
                  </div>
                ))}
              </div>
            )}
            {searchBarTabIndex === 1 && <SearchNoResult />}
          </div>
        )}
      {searchParams.get("search_query") &&
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
                      <PlaceInfoMain {...place} keywordCategoryNum={2} />
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
                    imgUrl={curation.imgUrl}
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
      {searchParams.get("keyword") &&
        keywordSearchPlaceData?.spaceCount === 0 &&
        keywordSearchCurationData?.CurationCount === 0 && <SearchNoResult />}
      {searchParams.get("keyword") &&
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
                    imgUrl={curation.imgUrl}
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
      {searchParams.get("keyword") &&
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
                    <PlaceInfoMain {...place} keywordCategoryNum={2} />
                  </div>
                ))}
              </div>
            )}
            {searchBarTabIndex === 1 && <SearchNoResult />}
          </div>
        )}
      {searchParams.get("keyword") &&
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
                      <PlaceInfoMain {...place} keywordCategoryNum={2} />
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
                    imgUrl={curation.imgUrl}
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
