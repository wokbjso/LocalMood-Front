"use client";

import ElectricCordIcon from "@common/assets/icons/electric-cord/ElectricCordIcon";
import HeartIcon from "@common/assets/icons/heart/HeartIcon";
import LampIcon from "@common/assets/icons/lamp/LampIcon";
import MusicIcon from "@common/assets/icons/music/MusicIcon";
import PetIcon from "@common/assets/icons/pet/PetIcon";
import WindowIcon from "@common/assets/icons/window/WindowIcon";
import WineIcon from "@common/assets/icons/wine/Wine";
import HomeHeader from "@common/components/layout/Header/HomeHeader";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import Button from "@common/components/ui/buttons/Button/Button";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface HomeBannerProps {
  textNormalFirst: string;
  textBold: string;
  textNormalLast: string;
  buttonLabel: string;
}

export default function HomeBanner({
  textNormalFirst,
  textBold,
  textNormalLast,
  buttonLabel,
}: HomeBannerProps) {
  const [ref, inView] = useInView({
    threshold: 1,
  });
  const [test, setTest] = useState<number[]>([]);
  const HEADER_KEYWORD = [
    { icon: HeartIcon, label: "연인과의 데이트" },
    { icon: MusicIcon, label: "잔잔한 음악" },
    { icon: LampIcon, label: "따뜻한 조명" },
    { icon: WineIcon, label: "와인" },
    { icon: ElectricCordIcon, label: "콘센트 있음" },
    { icon: PetIcon, label: "애견동반 가능" },
    { icon: WindowIcon, label: "통창뷰" },
  ];
  return (
    <>
      <HomeHeader setShowBtn={!inView} />
      <p className="header-light pb-[2.4rem] px-[2rem] pt-[5.4rem] bg-background-secondary-light">
        {textNormalFirst}
        <br />
        <span className="header-main"> {textBold}</span>
        {textNormalLast}
      </p>
      <div className="overflow-hidden">
        <ul className="flex no-wrap">
          <div className="header-slider1 flex pb-[2rem] bg-background-secondary-light ">
            {HEADER_KEYWORD.map((keyword, i) => (
              <li key={keyword.label + i}>
                <Chip className="whitespace-nowrap px-[1.12rem] flex items-center h-[3.2rem] mr-[1rem]">
                  {<keyword.icon />}
                  <span className="pl-[0.4rem]">{keyword.label}</span>
                </Chip>
              </li>
            ))}
          </div>
          <div className="header-slider2 flex pb-[2rem] bg-background-secondary-light">
            {HEADER_KEYWORD.map((keyword, i) => (
              <li key={keyword.label + i}>
                <Chip className="whitespace-nowrap px-[1.12rem] flex items-center h-[3.2rem] mr-[1rem]">
                  {<keyword.icon />}
                  <span className="pl-[0.4rem]">{keyword.label}</span>
                </Chip>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div
        className="flex justify-center pb-[2rem] bg-background-secondary-light"
        ref={ref}
      >
        {/* search 하는 페이지로 이동 시 키워드 선택 모달 바로 뜨도록 쿼리로 상태 전달 */}
        <LinkLayout
          routeUrl="/search"
          query={{ keyword_search: true }}
          className="w-full flex justify-center px-[2rem]"
        >
          <Button className="w-full">{buttonLabel}</Button>
        </LinkLayout>
      </div>
    </>
  );
}
