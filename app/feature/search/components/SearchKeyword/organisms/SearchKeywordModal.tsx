"use client";

import CloseIcon from "@common/assets/icons/close/CloseIcon";
import Divider from "@common/components/ui/divider/Divider";
import Tab from "@common/components/ui/tab/Tab";
import {
  CAFE_CATEGORY,
  RESTAURANT_CATEGORY,
} from "@feature/search/constants/search-keywords";
import Button from "@common/components/ui/buttons/Button/Button";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Modal from "@common/components/ui/modal/Modal";
import { useRecoilValue } from "recoil";
import { searchSortState } from "@feature/search/state/sortState";
import useSearchKeywordModal from "../../../hooks/SearchKeyword/useSearchKeywordModal";
import KeywordSection from "./KeywordSection";
import KeywordFoodSection from "./KeywordRestaurantFoodSection";

interface SearchKeywordModalProps {
  dependOnParams?: boolean;
  closeModal?: () => void;
}

//Organism
export default function SearchKeywordModal({
  dependOnParams = true,
  closeModal,
}: SearchKeywordModalProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  const params = new URLSearchParams(searchParams);

  const sortState = useRecoilValue(searchSortState);

  const {
    cafeKeyword,
    restaurantKeyword,
    tabIndex,
    openKoreanOption,
    koreanOptionIndex,
    showResultAble,
    handlers,
  } = useSearchKeywordModal();

  const handleCloseIconClick = () => {
    if (dependOnParams) {
      params.set("keyword_search", "false");
      push(`${pathname}?${params.toString()}`);
    } else {
      closeModal && closeModal();
    }
  };

  const handleShowKeywordResultClick = () => {
    closeModal && closeModal();
  };

  return (
    <Modal className="h-[94%]">
      <CloseIcon
        className="absolute right-[2.4rem] top-[4rem]"
        onClick={handleCloseIconClick}
      />
      <Tab
        startIndex={tabIndex}
        sections={[{ text: "음식점" }, { text: "카페" }]}
        onChange={handlers.handleTabIndex}
        className="pl-[2rem] w-[35%] mt-[4.3rem]"
      />
      <Divider className="h-[0.1rem] bg-line-gray-3" />
      <div className="h-full w-full pt-[3.2rem] pb-[17rem] px-[2rem] overflow-y-scroll">
        {tabIndex === 0 &&
          Object.keys(RESTAURANT_CATEGORY).map((category, i) =>
            category === "subType" ? (
              <KeywordFoodSection
                key="subType"
                openKoreanOption={openKoreanOption}
                restaurantKeyword={restaurantKeyword}
                koreanOptionIndex={koreanOptionIndex}
                handleRestaurantSubType={handlers.handleRestaurantSubType}
                handleKoreanOptionIndex={handlers.handleKoreanOptionIndex}
              />
            ) : (
              <KeywordSection
                key={category}
                type="RESTAURANT"
                category={category}
                keywordData={restaurantKeyword}
                handleKeywordData={handlers.handleKeywordData}
                className={
                  i !== Object.keys(CAFE_CATEGORY).length - 1
                    ? "mb-[40px]"
                    : "mb-[27px]"
                }
              />
            )
          )}
        {tabIndex === 1 &&
          Object.keys(CAFE_CATEGORY).map((category, i) => (
            <KeywordSection
              key={category}
              type="CAFE"
              category={category}
              keywordData={cafeKeyword}
              handleKeywordData={handlers.handleKeywordData}
              className={
                i !== Object.keys(CAFE_CATEGORY).length - 1
                  ? "mb-[40px]"
                  : "mb-[27px]"
              }
            />
          ))}
        <div className="absolute left-8 right-8 bottom-0 h-[7.5rem] bg-white">
          <Link
            href={{
              pathname: "/search/results",
              query: {
                keyword:
                  tabIndex === 0
                    ? JSON.stringify(restaurantKeyword)
                    : JSON.stringify(cafeKeyword),
                sort: sortState,
              },
            }}
            prefetch
          >
            <Button
              disabled={!showResultAble}
              className="w-full"
              onClick={handleShowKeywordResultClick}
            >
              결과보기
            </Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}
