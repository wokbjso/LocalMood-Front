"use client";

import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import PlaceScrapList from "@feature/place/components/PlaceScrapList/PlaceScrapList";
import PlaceSearchBar from "@feature/record/components/PlaceSearch/PlaceSearchBar";
import { Suspense } from "react";

export default function Record() {
  return (
    <div className="h-[100vh]">
      <div className="w-full h-[10.6rem] flex px-[2rem] pt-[3.8rem] pb-[1.2rem] justify-between items-center">
        <div className="max-w-[33.5rem] h-[5.3rem] headline1-semibold text-black grow shrink-0 basis-0">
          <div>
            기록을 남길 공간을 <br />
            선택해주세요
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start pl-[2rem] pr-[1.9rem] pt-[6rem] gap-[1.6rem] text-black headline2-semibold">
        공간 검색하기
        <PlaceSearchBar />
      </div>
      <div className="w-full flex justify-between items-center pl-[2rem] pr-[1.5rem] pt-[4.4rem] text-black headline2-semibold">
        <span>스크랩한 공간</span>
        <LinkLayout routeUrl="/record/scrapped/more">
          <span className="text-text-gray-6 body2-semibold">더보기</span>
        </LinkLayout>
      </div>
      <Suspense fallback={<div>loading</div>}>
        <PlaceScrapList />
      </Suspense>
    </div>
  );
}