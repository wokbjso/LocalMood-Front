"use client";

import Button from "@common/components/ui/buttons/Button/Button";
import HomeTopBar from "@common/components/ui/topBar/HomeTopBar/HomeTopBar";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import KeywordInfiniteScroller from "../infiniteScroller/KeywordInfiniteScroller";

interface HomeBannerProps {
  textNormalFirst: string;
  textBold: string;
  textNormalLast: string;
  buttonLabel: string;
}

//Organism
export default function HomeBanner({
  textNormalFirst,
  textBold,
  textNormalLast,
  buttonLabel,
}: HomeBannerProps) {
  const [inViewRef, inView] = useInView({
    threshold: 1,
  });

  return (
    <>
      <HomeTopBar showBtn={!inView} />
      <p className="header-light pb-[2.4rem] px-[2rem] pt-[5.4rem] bg-background-secondary-light">
        {textNormalFirst}
        <br />
        <span className="header-main"> {textBold}</span>
        {textNormalLast}
      </p>
      <KeywordInfiniteScroller />
      <div
        className="flex justify-center pb-[2rem] bg-background-secondary-light"
        ref={inViewRef}
      >
        {/* search 하는 페이지로 이동 시 키워드 선택 모달 바로 뜨도록 쿼리로 상태 전달 */}
        <Link
          href={{
            pathname: "/search",
            query: { keyword_search: true },
          }}
          className="w-full flex justify-center px-[2rem]"
        >
          <Button className="w-full">{buttonLabel}</Button>
        </Link>
      </div>
    </>
  );
}
