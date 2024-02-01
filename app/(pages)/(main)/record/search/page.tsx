"use client";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import { SearchPlaceResponse } from "@feature/search/queries/dto/search-type";
import PostTextPlaceSearch from "@feature/search/queries/postTextPlaceSearch";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function RecordSearch() {
  const searchParams = useSearchParams();
  const [textSearchPlaceData, setTextSearchPlaceData] =
    useState<SearchPlaceResponse>();
  const getTextSearchPlaceData = async () => {
    const data = await PostTextPlaceSearch(
      searchParams.get("search_query") as string
    );
    setTextSearchPlaceData(data);
  };
  useEffect(() => {
    getTextSearchPlaceData();
  }, [searchParams.get("search_query")]);
  return (
    <>
      <div>
        <BasicTopBar color="#9E9E9E">
          <Suspense fallback={null}>
            <SearchBar
              variant="record"
              placeholder="공간 이름을 검색해보세요"
            />
          </Suspense>
        </BasicTopBar>
        {textSearchPlaceData?.spaceCount === 0 && (
          <div className="flex justify-center items-center body1-medium text-text-gray-8 h-[31vh]">
            검색된 결과가 없습니다.
          </div>
        )}
        {textSearchPlaceData &&
          textSearchPlaceData?.spaceCount > 0 &&
          textSearchPlaceData?.spaceList.map((li) => (
            <div key={li.id} className="w-full px-[2rem]">
              <PlaceInfoMain
                className="mt-[0.8rem]"
                direction="horizontal"
                variant="record"
                {...li}
              />
            </div>
          ))}
      </div>
    </>
  );
}
