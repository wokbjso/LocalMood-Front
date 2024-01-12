"use client";

import CloseIcon from "@common/assets/icons/close/CloseIcon";
import Divider from "@common/components/ui/divider/Divider";
import Tab from "@common/components/ui/tab/Tab";

import {
  CAFE_CATEGORY,
  CAFE_KEYWORDS,
  RESTARANT_KEYWORDS,
  RESTAURANT_CATEGORY,
} from "@feature/search/constants/search-keywords";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import Button from "@common/components/ui/buttons/Button/Button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SearchKeyword() {
  const searchParams = useSearchParams();
  const closeClicked = () => {};
  let tabIndex = 0;
  return (
    searchParams.get("keyword_search") === "true" && (
      <>
        <div className="w-full h-[100vh] absolute bg-black opacity-[0.5]" />
        <div
          className="w-full h-[94%] absolute bottom-0 bg-white rounded-t-[14px] overflow-y-hidden"
          style={{
            animationName: "slide-modal",
            animationDuration: "0.6s",
          }}
        >
          <div className="flex justify-center items-center mb-[4.3rem] w-full h-[2.1rem] rounded-t-[10px]">
            <div className="w-[3.6rem] h-[0.5rem] bg-text-gray-4 rounded-[2.5px]" />
            <Link
              href={{
                pathname: "/search",
                query: { keyword_search: false },
              }}
            >
              <CloseIcon
                className="absolute right-[2.4rem] top-[4rem]"
                onClick={closeClicked}
              />
            </Link>
          </div>
          <Tab
            sections={[{ text: "음식점" }, { text: "카페" }]}
            className="pl-[2rem] w-[35%]"
          />
          <Divider className="h-[0.1rem] bg-line-gray-3" />
          <div className="h-full pt-[3.2rem] pb-[22rem] px-[2rem] overflow-y-scroll">
            {tabIndex === 0 &&
              CAFE_CATEGORY.map((category, i) => (
                <section
                  key={category}
                  className={
                    i !== CAFE_CATEGORY.length - 1 ? "mb-[4rem]" : "mb-[2.7rem]"
                  }
                >
                  <div className="text-black headline3 mb-[1.2rem]">
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-[0.6rem]">
                    {Object.keys(CAFE_KEYWORDS).indexOf(category) === i &&
                      CAFE_KEYWORDS[category].map((keyword) => (
                        <Filter key={keyword} label={keyword} />
                      ))}
                  </div>
                </section>
              ))}
            {tabIndex === 1 &&
              RESTAURANT_CATEGORY.map((category, i) => (
                <section
                  key={category}
                  className={
                    i !== RESTAURANT_CATEGORY.length - 1
                      ? "mb-[4rem]"
                      : "mb-[2.7rem]"
                  }
                >
                  <div className="text-black headline3 mb-[1.2rem]">
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-[0.6rem]">
                    {Object.keys(RESTARANT_KEYWORDS).indexOf(category) === i &&
                      RESTARANT_KEYWORDS[category].map((keyword) => (
                        <Filter
                          key={keyword}
                          label={keyword}
                          variant={
                            category === "음식" ? "showOptions" : undefined
                          }
                        />
                      ))}
                  </div>
                </section>
              ))}
            <div className="flex justify-center">
              <Button>결과보기</Button>
            </div>
          </div>
        </div>
      </>
    )
  );
}
