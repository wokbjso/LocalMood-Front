import { PLACE_TAG_CATEGORY } from "@feature/place/constants/place-tag-category";
import { twMerge } from "tailwind-merge";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import { PlaceInfoProps } from "@feature/place/type";

export default function PlaceInfoBottom({
  tags,
  tagsCategoryNum,
}: Pick<PlaceInfoProps, "tags" | "tagsCategoryNum">) {
  return (
    <div className="w-full mt-[1.6rem] flex flex-wrap gap-[0.8rem]">
      {tagsCategoryNum === 0 &&
        tags?.interior.map((tag, i) => <Chip key={tag + i}>{tag}</Chip>)}
      {/* {variant === "home_search" &&
        Object.keys(PLACE_TAG_CATEGORY)
          .slice(0, 2)
          .map((category, i) => {
            return (
              <div
                key={category}
                className={twMerge(
                  "flex items-center",
                  i !== 1 && "mb-[0.9rem]"
                )}
              >
                <div className="mr-[2rem]">
                  <span className="body2-medium text-text-gray-6">
                    {PLACE_TAG_CATEGORY[category]}
                  </span>
                </div>
                <div className="flex flex-wrap gap-[0.8rem]">
                  {tags &&
                    tags[category].map((tag, i) => (
                      <Chip key={tag + i}>{tag}</Chip>
                    ))}
                </div>
              </div>
            );
          })}
      {variant === "curation" &&
        Object.keys(PLACE_TAG_CATEGORY)
          .slice(0, 3)
          .map((category, i) => {
            return (
              <div
                key={category}
                className={twMerge(
                  "flex items-center",
                  i !== 2 && "mb-[0.9rem]"
                )}
              >
                <div className="mr-[2rem]">
                  <span className="body2-medium text-text-gray-6">
                    {PLACE_TAG_CATEGORY[category]}
                  </span>
                </div>
                <div className="flex flex-wrap gap-[0.8rem]">
                  {tags &&
                    tags[category].map((tag, i) => (
                      <Chip key={tag + i}>{tag}</Chip>
                    ))}
                </div>
              </div>
            );
          })}
      {variant === "scrapped" &&
        Object.keys(PLACE_TAG_CATEGORY)
          .slice(0, 4)
          .map((category, i) => {
            return (
              <div
                key={category}
                className={twMerge(
                  "flex items-center",
                  i !== 3 && "mb-[0.9rem]"
                )}
              >
                <div className="mr-[2rem]">
                  <span className="body2-medium text-text-gray-6">
                    {PLACE_TAG_CATEGORY[category]}
                  </span>
                </div>
                <div className="flex flex-wrap gap-[0.8rem]">
                  {tags &&
                    tags[category].map((tag, i) => (
                      <Chip key={tag + i}>{tag}</Chip>
                    ))}
                </div>
              </div>
            );
          })} */}
    </div>
  );
}
