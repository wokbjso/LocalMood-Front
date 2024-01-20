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
                  CAFE_KEYWORDS[category].map((keyword) => (
                    <Filter
                      key={keyword}
                      label={keyword}
                      onClick={() => handleFilterClick(keyword)}
                    />
                  ))}
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
                  RESTARANT_KEYWORDS[category].map((keyword) => (
                    <Filter
                      key={keyword}
                      label={keyword}
                      variant={category === "음식" ? "showOptions" : undefined}
                      onClick={() => handleFilterClick(keyword)}
                    />
                  ))}
              </div>
            </section>
          ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <BottomAppBar hasFiltersSelected={hasFiltersSelected} />
      </div>
    </div>
  );
}
