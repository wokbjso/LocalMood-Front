"use client";

import CloseIcon from "@common/assets/icons/close/CloseIcon";
import Divider from "@common/components/ui/divider/Divider";
import Tab from "@common/components/ui/tab/Tab";
import {
  CAFE_CATEGORY,
  CAFE_KEYWORDS,
  KOREAN_OPTION,
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
  const {
    cafeKeyword,
    restaurantKeyword,
    tabIndex,
    openKoreanOption,
    koreanOptionIndex,
    showResultAble,
    handlers,
  } = useSearchKeyword();
  const handleKeywordClick = (category: string, keyword: string) => {
    if (keyword === "한식") {
      if (openKoreanOption) {
        handlers.changeOpenKoreanOption(false);
      } else {
        handlers.changeOpenKoreanOption(true);
      }
    }
    if (category === "food" && keyword !== "한식" && openKoreanOption) {
      handlers.changeOpenKoreanOption(false);
    }
    handlers.changeKeywordData(category, keyword);
  };

  const handleKoreanOptionClick = (index: number) => {
    handlers.changeKoreanOptionIndex(index);
  };

  function setEmptyKeysToAll(obj: { [key: string]: string }) {
    const modifiedObj = obj;
    for (const key in modifiedObj) {
      if (modifiedObj[key] === "") {
        modifiedObj[key] = "ALL";
      }
    }
    return modifiedObj;
  }

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
          <div className="h-full w-full pt-[3.2rem] pb-[17rem] px-[2rem] overflow-y-scroll">
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
                          selected={
                            keyword === "한식"
                              ? openKoreanOption
                              : restaurantKeyword[category] === keyword
                          }
                          variant={
                            keyword === "한식" ? "showOptions" : undefined
                          }
                          onClick={() => handleKeywordClick(category, keyword)}
                        />
                      )
                    )}
                    {category === "subType" &&
                      openKoreanOption &&
                      KOREAN_OPTION.map((option, i) => (
                        <Filter
                          key={option}
                          label={option}
                          selected={koreanOptionIndex === i}
                          onClick={() => handleKoreanOptionClick(i)}
                        />
                      ))}
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

            <div className="absolute bottom-[2.3rem] left-8 right-8">
              <Link
                href={{
                  pathname: "/search/results",
                  query: {
                    keyword:
                      tabIndex === 0
                        ? JSON.stringify(setEmptyKeysToAll(restaurantKeyword))
                        : JSON.stringify(setEmptyKeysToAll(cafeKeyword)),
                  },
                }}
              >
                <Button disabled={!showResultAble} className="w-full">
                  결과보기
                </Button>
              </Link>
            </div>
          </div>
        </Modal>
      </>
    )
  );
}
