import LinkLayout from "@/common/components/layout/Link/LinkLayout";
import PageTopBar from "@/common/components/ui/topBar/PageTopBar/PageTopBar";
import UseDeferredComponent from "@/common/hooks/useDeferredComponent";
import PlaceScrapList from "@/feature/place/components/PlaceScrapList/PlaceScrapList";
import PlaceScrappedSkeleton from "@/feature/place/components/skeleton/PlaceScrappedSkeleton";
import TextSearchBar from "@/feature/search/components/SearchText/molecules/TextSearchBar";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "공간기록",
  openGraph: {
    images: ["/record.png"],
  },
  description: "맘에드는 장소에 대한 기록을 남겨보세요!",
  keywords: ["로컬무드", "localmood", "공간기록", "마포구"],
};

export default async function RecordPage() {
  return (
    <div className="w-[100%] h-[100%]">
      <PageTopBar
        text="기록을 남길 공간을 선택해주세요"
        className="pl-[2rem]"
        textClassName="w-[50%] break-keep"
      />
      <div className="w-full flex flex-col items-start pl-[2rem] pr-[1.9rem] pt-[6rem] gap-[1.6rem] text-black headline2-semibold">
        공간 검색하기
        <TextSearchBar
          placeholder="공간 이름을 검색해보세요"
          variant="record"
        />
      </div>
      <div className="w-full flex justify-between items-center pl-[2rem] pr-[1.5rem] pt-[4.4rem] mb-[1.6rem] text-black headline2-semibold">
        <span>스크랩한 공간</span>
        <LinkLayout routeUrl="/record/scrapped/more">
          <span className="text-text-gray-6 body2-semibold">더보기</span>
        </LinkLayout>
      </div>
      <Suspense
        fallback={
          <UseDeferredComponent>
            <PlaceScrappedSkeleton />
          </UseDeferredComponent>
        }
      >
        <PlaceScrapList />
      </Suspense>
    </div>
  );
}