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

export default function RecordEvaluation({
  category,
}: {
  category: string;
}): JSX.Element {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const hasFiltersSelected = selectedFilters.length > 0;

  const handleFilterClick = (label: string) => {
    // filter가 이미 선택되었는지 확인
    if (selectedFilters.includes(label)) {
      // Filter is already selected, remove it
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== label)
      );
    } else {
      // Filter is not selected, add it
      setSelectedFilters((prevFilters) => [...prevFilters, label]);
    }
  };
  return (
    <div>
      <div>
        <div className="flex flex-col items-start pt-[3.2rem] pb-[22rem] px-[2rem] overflow-y-scroll">
          {category === "cafe" &&
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
                    CAFE_EVALUATIONS[category].map((keyword) => (
                      <Filter
                        key={keyword}
                        label={keyword}
                        onClick={() => handleFilterClick(keyword)}
                      />
                    ))}
                </div>
              </section>
            ))}
          <div className="pt-[1.4rem]">
            {category === "restaurant" &&
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
                      RESTAURANT_EVALUATIONS[category].map((keyword) => (
                        <Filter
                          key={keyword}
                          label={keyword}
                          variant={
                            category === "음식" ? "showOptions" : undefined
                          }
                          onClick={() => handleFilterClick(keyword)}
                        />
                      ))}
                  </div>
                </section>
              ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <BottomAppBar hasFiltersSelected={hasFiltersSelected} />
      </div>
    </div>
  );
}
