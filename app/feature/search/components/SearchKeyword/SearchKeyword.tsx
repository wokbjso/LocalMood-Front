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
import useSearchKeyword from "./useSearchKeyword";
import Modal from "@common/components/ui/modal/Modal";

export default function SearchKeyword() {
  const searchParams = useSearchParams();
  const { cafeKeyword, restaurantKeyword, tabIndex, showResultAble, handlers } =
    useSearchKeyword();
  return (
    searchParams.get("keyword_search") === "true" && (
      <>
        <Modal className="h-[94%]">
          <Link
            href={{
              pathname: "/search",
              query: { keyword_search: false },
            }}
          >
            <CloseIcon className="absolute right-[2.4rem] top-[4rem]" />
          </Link>
          <Tab
            sections={[{ text: "음식점" }, { text: "카페" }]}
            onChange={handlers.changeTabIndex}
            className="pl-[2rem] w-[35%] mt-[4.3rem]"
          />
          <Divider className="h-[0.1rem] bg-line-gray-3" />
          <div className="h-full pt-[3.2rem] pb-[17rem] px-[2rem] overflow-y-scroll">
            {tabIndex === 0 &&
              Object.keys(RESTAURANT_CATEGORY).map((category, i) => (
                <section
                  key={category}
                  className={
                    i !== Object.keys(RESTAURANT_CATEGORY).length - 1
                      ? "mb-[4rem]"
                      : "mb-[2.7rem]"
                  }
                >
                  <div className="text-black headline3 mb-[1.2rem]">
                    {RESTAURANT_CATEGORY[category]}
                  </div>
                  <div className="flex flex-wrap gap-[0.6rem]">
                    {RESTARANT_KEYWORDS[RESTAURANT_CATEGORY[category]].map(
                      (keyword) => (
                        <Filter
                          key={keyword}
                          label={keyword}
                          selected={restaurantKeyword[category] === keyword}
                          variant={
                            category === "food" ? "showOptions" : undefined
                          }
                          onClick={() =>
                            handlers.changeKeywordData(category, keyword)
                          }
                        />
                      )
                    )}
                  </div>
                </section>
              ))}
            {tabIndex === 1 &&
              Object.keys(CAFE_CATEGORY).map((category, i) => (
                <section
                  key={category}
                  className={
                    i !== Object.keys(CAFE_CATEGORY).length - 1
                      ? "mb-[4rem]"
                      : "mb-[2.7rem]"
                  }
                >
                  <div className="text-black headline3 mb-[1.2rem]">
                    {CAFE_CATEGORY[category]}
                  </div>
                  <div className="flex flex-wrap gap-[0.6rem]">
                    {CAFE_KEYWORDS[CAFE_CATEGORY[category]].map((keyword) => (
                      <Filter
                        key={keyword}
                        label={keyword}
                        selected={cafeKeyword[category] === keyword}
                        onClick={() =>
                          handlers.changeKeywordData(category, keyword)
                        }
                      />
                    ))}
                  </div>
                </section>
              ))}
            <div className="flex justify-center">
              <Button disabled={!showResultAble}>결과보기</Button>
            </div>
          </div>
        </Modal>
      </>
    )
  );
}
