"use client";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import { useState } from "react";
import {
  CAFE_CATEGORY_EVALUATIONS,
  CAFE_EVALUATIONS,
  RESTAURANT_CATEGORY_EVALUATIONS,
  RESTAURANT_EVALUATIONS,
} from "@feature/record/constants/evaluate-keywords";
import BottomAppBar from "../BottomAppBar/BottomAppBar";

export default function RecordEvaluationContent({
  category,
  type,
}: {
  category: string;
  type: string;
}): JSX.Element {
  const [selectedFilters, setSelectedFilters] = useState<
    { category: string; keyword: string }[]
  >([]);
  const hasFiltersSelected = selectedFilters.length > 0;

  const handleFilterClick = (category: string, keyword: string) => {
    const filtersForCurrentCategory = selectedFilters.filter(
      (filter) => filter.category === category
    );

    // 카테고리당 필터 선택 개수 3개로 제한
    if (filtersForCurrentCategory.length >= 3) {
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
      <div>
        <div className="flex flex-col items-start pt-[3.2rem] pb-[22rem] px-[2rem] overflow-y-scroll">
          {category === "카페" &&
            CAFE_CATEGORY_EVALUATIONS.map((category, i) => (
              <section
                key={category}
                className={
                  i !== CAFE_CATEGORY_EVALUATIONS.length - 1
                    ? "mb-[4rem]"
                    : "mb-[1.2rem]"
                }
              >
                <div className="flex items-start gap-[0.6rem]">
                  <div className="text-black headline3-semibold mb-[1.2rem]">
                    {category}
                  </div>
                  <div className="headline3-semibold text-text-gray-6">0/3</div>
                </div>
                <div className="flex flex-wrap gap-[0.6rem]">
                  {Object.keys(CAFE_EVALUATIONS).indexOf(category) === i &&
                    CAFE_EVALUATIONS[category].map((keyword) => {
                      const isDisabled =
                        selectedFilters.filter(
                          (filter) => filter.category === category
                        ).length >= 3;

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
          <div className="pt-[1.4rem]">
            {(category === "양식" || category === "한식") &&
              RESTAURANT_CATEGORY_EVALUATIONS.map((category, i) => (
                <section
                  key={category}
                  className={
                    i !== RESTAURANT_CATEGORY_EVALUATIONS.length - 1
                      ? "mb-[4rem]"
                      : "mb-[2.7rem]"
                  }
                >
                  <div className="flex items-start gap-[0.6rem]">
                    <div className="text-black headline3-semibold mb-[1.2rem]">
                      {category}
                    </div>
                    <div className="headline3-semibold text-text-gray-6">
                      0/3
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-[0.6rem]">
                    {Object.keys(RESTAURANT_EVALUATIONS).indexOf(category) ===
                      i &&
                      RESTAURANT_EVALUATIONS[category].map((keyword) => {
                        const isDisabled =
                          selectedFilters.filter(
                            (filter) => filter.category === category
                          ).length >= 3;

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
        </div>
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
