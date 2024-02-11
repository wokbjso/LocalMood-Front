"use client";

import HeaderText from "@common/assets/icons/header/HeaderText";
import SearchIcon from "@common/assets/icons/search/search.svg";
import Button from "@common/components/ui/buttons/Button/Button";
import useGetScrollHeight from "@common/hooks/useGetScrollHeight";
import Link from "next/link";
import { ReactNode } from "react";

interface HomeHeaderProps {
  showWhenScroll: ReactNode;
}

export default function HomeHeader({ showWhenScroll }: HomeHeaderProps) {
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
            {showWhenScroll}
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
