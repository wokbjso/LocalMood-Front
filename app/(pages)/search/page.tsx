"use client";

import Button from "@common/components/ui/buttons/Button/Button";
import ArrowBack from "@common/assets/icons/arrow/arrow-back.svg";
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchPage() {
  const dummy_search_data = null;
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const handleSearchText = (text: string) => {
    setSearchText(text);
  };
  const backIconClicked = () => {
    router.back();
  };
  return (
    <div>
      <header className="fixed w-full flex items-center px-[2rem] pt-[1.6rem] pb-[0.6rem]">
        <div onClick={backIconClicked}>
          <ArrowBack />
        </div>
        <SearchBar
          placeholder="공간, 큐레이션을 검색해보세요"
          onChange={handleSearchText}
        />
      </header>
      {searchText.length === 0 && (
        <div className="flex flex-col justify-center items-center pt-[24.6rem]">
          <p className="flex justify-center text-center break-keep headline2 text-text-gray-9 w-[42%] mb-[1.6rem]">
            나에게 딱 맞는 공간을 찾고 싶다면?
          </p>
          <Button className="w-[12.5rem] h-[2.6rem] py-[0.6rem] mr-[1.2rem] body2-semibold">
            키워드로 공간 찾기
          </Button>
        </div>
      )}
      {searchText.length > 0 && !dummy_search_data && (
        <div className="flex flex-col justify-center items-center pt-[11.4rem]">
          <p className="flex justify-center body1 text-text-gray-8">
            검색 결과가 없습니다.
          </p>
        </div>
      )}
    </div>
  );
}
