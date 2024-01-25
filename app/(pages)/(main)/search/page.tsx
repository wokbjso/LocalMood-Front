import SearchImage from "@common/assets/images/search_start.svg";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import Button from "@common/components/ui/buttons/Button/Button";
import SearchKeyword from "@feature/search/components/SearchKeyword/SearchKeyword";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <div>
      <Suspense fallback={null}>
        <SearchKeyword />
      </Suspense>

      <div className="flex justify-center pt-[8.2rem] mb-[0.8rem]">
        <SearchImage />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="flex justify-center text-center break-keep headline2 text-text-gray-9 w-[42%] mb-[1.6rem]">
          나에게 딱 맞는 공간을 찾고 싶다면?
        </p>
        <LinkLayout routeUrl="/search" query={{ keyword_search: true }}>
          <Button className="w-[12.5rem] h-[2.6rem] mr-[1.2rem] body2-semibold rounded-[8px]">
            키워드로 공간 찾기
          </Button>
        </LinkLayout>
      </div>
    </div>
  );
}
