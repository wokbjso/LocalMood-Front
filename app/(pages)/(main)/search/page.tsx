import SearchImage from "@common/assets/images/search_start.svg";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import Button from "@common/components/ui/buttons/Button/Button";
import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import SearchKeyword from "@feature/search/components/SearchKeyword/SearchKeyword";

export default function SearchPage({ searchParams }: any) {
  return (
    <div className="w-[100%] h-[100%]">
      <ArrowBackTopBar color="#9E9E9E" className="fixed pt-[1.2rem]">
        <SearchBar
          placeholder="공간, 큐레이션을 검색해보세요"
          className="rounded-[1000px]"
        />
      </ArrowBackTopBar>
      {searchParams.keyword_search === "true" && <SearchKeyword />}
      <div className="flex justify-center pt-[8.2rem] mb-[0.8rem]">
        <SearchImage />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="flex justify-center text-center break-keep headline2 text-text-gray-9 w-[42%] mb-[1.6rem]">
          나에게 딱 맞는 공간을 찾고 싶다면?
        </p>
        <LinkLayout routeUrl="/search" query={{ keyword_search: true }} replace>
          <Button className="w-[12.5rem] h-[2.6rem] mr-[1.2rem] body2-semibold rounded-[8px]">
            키워드로 공간 찾기
          </Button>
        </LinkLayout>
      </div>
    </div>
  );
}
