"use client";

import HeaderText from "@common/assets/icons/header/HeaderText";
import SearchIcon from "@common/assets/icons/search/search.svg";
import Button from "@common/components/ui/buttons/Button/Button";
import useGetScrollHeight from "@common/hooks/useGetScrollHeight";
import Link from "next/link";

export default function HomeHeader() {
  const { scrollHeight } = useGetScrollHeight();
  return (
    <header className="fixed flex justify-between items-center px-[2rem] pt-[1.6rem] pb-[1rem] w-full z-10 bg-[#F5F8FF]">
      <div className="py-[0.7rem]">
        <HeaderText />
      </div>
      <div className="flex items-center">
        {scrollHeight > 190 && (
          <Link
            href={{
              pathname: "/search",
              query: { keyword_search: true },
            }}
            scroll={false}
          >
            <Button className="w-[12.5rem] h-full py-[0.6rem] mr-[1.2rem] body2-semibold">
              키워드로 공간 찾기
            </Button>
          </Link>
        )}
        <Link
          href={{
            pathname: "/search",
            query: { keyword_search: false },
          }}
        >
          <SearchIcon />
        </Link>
      </div>
    </header>
  );
}
