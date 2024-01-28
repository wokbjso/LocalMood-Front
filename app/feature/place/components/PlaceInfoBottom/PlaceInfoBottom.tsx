import { PLACE_TAG_CATEGORY } from "@feature/place/constants/place-tag-category";
import { twMerge } from "tailwind-merge";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import { PlaceInfoProps } from "@feature/place/type";

export default function PlaceInfoBottom({
  keyword,
  keywordCategoryNum,
  bottomClassName,
}: Pick<PlaceInfoProps, "keyword" | "keywordCategoryNum" | "bottomClassName">) {
  return (
    <div
      className={twMerge("w-full mt-[1.6rem] flex flex-wrap", bottomClassName)}
    >
      {keywordCategoryNum === 0
        ? keyword?.map((tag, i) => (
            <Chip
              key={tag + i}
              className={i !== keyword?.length - 1 ? "mr-[0.8rem]" : ""}
            >
              {tag}
            </Chip>
          ))
        : Object.keys(PLACE_TAG_CATEGORY)
            .slice(0, keywordCategoryNum)
            .map((category, i) => {
              return (
                <div
                  key={category}
                  className={twMerge(
                    "flex items-center",
                    keywordCategoryNum && i !== keywordCategoryNum - 1
                      ? "mb-[0.9rem]"
                      : ""
                  )}
                >
                  <div className="mr-[2rem]">
                    <span className="body2-medium text-text-gray-6">
                      {PLACE_TAG_CATEGORY[category]}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-[0.8rem]">
                    {keyword &&
                      keyword[category].map((tag, i) => (
                        <Chip key={tag + i}>{tag}</Chip>
                      ))}
                  </div>
                </div>
              );
            })}
    </div>
  );
}
