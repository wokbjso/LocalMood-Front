"use client";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import PlaceInfoCard from "@feature/place/components/PlaceInfoCard/PlaceInfoCard";
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import { SearchPlaceResponse } from "@feature/search/queries/dto/search-type";
import { Suspense, useCallback, useEffect, useState } from "react";

export default function RecordSearch({ searchParams }: { searchParams: any }) {
  const [textSearchPlaceData, setTextSearchPlaceData] =
    useState<SearchPlaceResponse>();
  const getTextSearchPlaceData = useCallback(async () => {
    try {
      const response = await fetch("/api/search/place-search-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: searchParams.search_query }),
      });

      if (!response.ok) {
        alert("오류가 발생했습니다.");
        return;
      }

      setTextSearchPlaceData(await response.json());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [searchParams.search_query]);

  useEffect(() => {
    getTextSearchPlaceData();
  }, [getTextSearchPlaceData]);
  return (
    <div className="w-[100%] h-[100%]">
      <BasicTopBar color="#9E9E9E">
        <Suspense fallback={null}>
          <SearchBar variant="record" placeholder="공간 이름을 검색해보세요" />
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
