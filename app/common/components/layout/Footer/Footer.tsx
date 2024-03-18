"use client";

import { twMerge } from "tailwind-merge";
import Home from "@common/assets/icons/home/Home";
import Record from "@common/assets/icons/record/Record";
import Curation from "@common/assets/icons/curation/Curation";
import UserProfile from "@common/assets/icons/user/UserProfile";
import useFooter from "./useFooter";
import Link from "next/link";

export default function Footer() {
  const FOOTER_CATEGORY = [
    {
      icon: Home,
      text: "홈",
      navigateTo: "/",
    },
    {
      icon: Record,
      text: "공간기록",
      navigateTo: "/record",
    },
    {
      icon: Curation,
      text: "큐레이션",
      navigateTo: "/curation",
    },
    {
      icon: UserProfile,
      text: "마이페이지",
      navigateTo: "/mypage",
    },
  ];
  const { footerState, handlers } = useFooter();
  return (
    <footer className="flex justify-between w-full bg-background-gray-1 px-[3.2rem] pt-[0.8rem] pb-[1.2rem] fixed bottom-0 z-10">
      {FOOTER_CATEGORY.map((category, i) => (
        <Link
          key={category.text}
          href={{
            pathname: category.navigateTo,
          }}
        >
          <div
            className="px-[1.2rem] flex flex-col items-center cursor-pointer"
            onClick={() => handlers.handleFooterState(i)}
          >
            <category.icon color={footerState === i ? "#32D5BA" : "#BDBDBD"} />
            <span
              className={twMerge(
                "mt-[0.6rem]",
                footerState === i ? "text-primary-normal" : "text-text-gray-5"
              )}
            >
              {category.text}
            </span>
          </div>
        </Link>
      ))}
    </footer>
  );
}
