"use client";
import {
  CAFE_CATEGORY,
  CAFE_KEYWORDS,
} from "@feature/search/constants/search-keywords";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import BottomAppBar from "../BottomAppBar/BottomAppBar";
import { useState } from "react";
import {
  RESTARANT_KEYWORDS,
  RESTAURANT_CATEGORY,
} from "@feature/record/constants/select-keywords";

export default function RecordKeywordContent({
  type,
  category,
}: {
  type: string;
  category: string;
}): JSX.Element {
  const [selectedFilters, setSelectedFilters] = useState<
    { category: string; keyword: string }[]
  >([]);
  const hasFiltersSelected = selectedFilters.length > 0;

  const handleFilterClick = (category: string, keyword: string) => {
    const filtersForCurrentCategory = selectedFilters.filter(
      (filter) => filter.category === category
    );

    // 카테고리당 필터 선택 개수 2개로 제한
    if (filtersForCurrentCategory.length >= 2) {
      return;
    }
    // filter가 이미 선택되었는지 확인
    const filterIndex = selectedFilters.findIndex(
      (filter) => filter.keyword === keyword
    );

    if (filterIndex !== -1) {
      // Filter is already selected, remove it
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter, index) => index !== filterIndex)
      );
    } else {
      // Filter is not selected, add it
      setSelectedFilters((prevFilters) => [
        ...prevFilters,
        { category, keyword },
      ]);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-start h-full pt-[3.2rem] pb-[22rem] pl-[2.05rem] pr-[1.95rem] overflow-y-scroll">
        {category === "카페" &&
          CAFE_CATEGORY.map((category, i) => (
            <section
              key={category}
              className={
                i !== CAFE_CATEGORY.length - 1 ? "mb-[4rem]" : "mb-[2.7rem]"
              }
            >
              <div className="text-black headline3 mb-[1.2rem]">{category}</div>
              <div className="flex flex-wrap gap-[0.6rem]">
                {Object.keys(CAFE_KEYWORDS).indexOf(category) === i &&
                  CAFE_KEYWORDS[category].map((keyword) => {
                    const isDisabled =
                      selectedFilters.filter(
                        (filter) => filter.category === category
                      ).length >= 2;

                    return (
                      <Filter
                        key={keyword}
                        label={keyword}
                        onClick={() => handleFilterClick(category, keyword)}
                        disabled={isDisabled}
                      />
                    );
                  })}
              </div>
            </section>
          ))}
        {(category === "양식" || category === "한식") &&
          RESTAURANT_CATEGORY.map((category, i) => (
            <section
              key={category}
              className={
                i !== RESTAURANT_CATEGORY.length - 1
                  ? "mb-[4rem]"
                  : "mb-[2.7rem]"
              }
            >
              <div className="text-black headline3 mb-[1.2rem]">{category}</div>
              <div className="flex flex-wrap gap-[0.6rem]">
                {Object.keys(RESTARANT_KEYWORDS).indexOf(category) === i &&
                  RESTARANT_KEYWORDS[category].map((keyword) => {
                    const isDisabled =
                      selectedFilters.filter(
                        (filter) => filter.category === category
                      ).length >= 2;

                    return (
                      <Filter
                        key={keyword}
                        label={keyword}
                        onClick={() => handleFilterClick(category, keyword)}
                        disabled={isDisabled}
                      />
                    );
                  })}
              </div>
            </section>
          ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <BottomAppBar
          hasFiltersSelected={hasFiltersSelected}
          type={type}
          category={category}
        />
      </div>
    </div>
  );
}
