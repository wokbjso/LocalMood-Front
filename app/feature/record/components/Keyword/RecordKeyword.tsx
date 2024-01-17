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
import BottomAppBar from "../BottomAppBar/BottomAppBar";

export default function RecordKeyword({
  category,
}: {
  category: string;
}): JSX.Element {
  return (
    <div>
      <div className="flex flex-col items-start h-full pt-[3.2rem] pb-[22rem] pl-[2.05rem] pr-[1.95rem] overflow-y-scroll">
        {category === "cafe" &&
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
                    <Filter key={keyword} label={keyword} />
                  ))}
              </div>
            </section>
          ))}
        {category === "restaurant" &&
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
                    />
                  ))}
              </div>
            </section>
          ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <BottomAppBar />
      </div>
    </div>
  );
}
