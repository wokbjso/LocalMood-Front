"use client";

import HeaderText from "@common/assets/icons/header/header.svg";
import SearchIcon from "@common/assets/icons/search/search.svg";
import Button from "@common/components/ui/buttons/Button/Button";
import useGetScrollHeight from "@common/hooks/useGetScrollHeight";

export default function HomeHeader() {
  const { scrollHeight } = useGetScrollHeight();
  return (
    <header className="fixed flex justify-between items-center px-[2rem] pt-[1.6rem] pb-[1rem] w-full z-10 bg-white">
      <HeaderText />
      <div className="flex items-center">
        {scrollHeight > 190 && (
          <Button className="w-[12.5rem] h-[2.6rem] mr-[1.2rem] body2-semibold">
            키워드로 공간 찾기
          </Button>
        )}
        <SearchIcon />
      </div>
    </header>
  );
}
