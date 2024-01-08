"use client";

import ArrowBack from "@common/assets/icons/arrow/ArrowBack";
import Button from "@common/components/ui/buttons/Button/Button";
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import useSearchBar from "@feature/search/components/SearchBar/useSearchBar";
import SearchByKeywordButton from "@feature/search/components/SearchByKeywordButton/SearchByKeywordButton";
import SearchKeyword from "@feature/search/components/SearchKeyword/SearchKeyword";
import useSearchKeyword from "@feature/search/components/SearchKeyword/useSearchKeyword";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { searchText, handlers: searchBarHandlers } = useSearchBar();
  const {
    modalOpen,
    tabIndex,
    handlers: searchKeywordHandlers,
  } = useSearchKeyword(searchParams.get("keyword_search") === "true");
  const searchByKeywordClicked = () => {
    searchKeywordHandlers.handleModalOpen(true);
  };
  const goBackClicked = () => {
    router.back();
  };
  return (
    <div>
      <SearchKeyword
        isOpen={modalOpen}
        tabIndex={tabIndex}
        handleModalOpen={searchKeywordHandlers.handleModalOpen}
        handleTabIndex={searchKeywordHandlers.handleTabIndex}
      />
      <header className="fixed w-full flex items-center px-[2rem] pt-[1.6rem] pb-[0.6rem] z-10 bg-white">
        <ArrowBack onClick={goBackClicked} />
        <SearchBar placeholder="공간, 큐레이션을 검색해보세요" />
      </header>
      <div className="flex flex-col justify-center items-center pt-[24.6rem]">
        <p className="flex justify-center text-center break-keep headline2 text-text-gray-9 w-[42%] mb-[1.6rem]">
          나에게 딱 맞는 공간을 찾고 싶다면?
        </p>
        <SearchByKeywordButton
          className="w-[12.5rem] h-[2.6rem] py-[0.6rem] mr-[1.2rem] body2-semibold"
          onClick={searchByKeywordClicked}
        />
      </div>
    </div>
  );
}
