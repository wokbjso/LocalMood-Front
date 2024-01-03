import { PLACE_TAG_CATEGORY } from "@feature/place/constants/place-tag-category";
import { twMerge } from "tailwind-merge";
import { PlaceInfoProps } from "../PlaceInfoMain/PlaceInfoMain";
import Chip from "@common/ui/buttons/Chip/Chip";

export default function PlaceInfoBottom({
  variant,
  tags,
}: Pick<PlaceInfoProps, "variant" | "tags">) {
  return (
    <div
      className={twMerge(
        "w-full mt-[1.6rem]",
        variant === "home" && "flex flex-wrap gap-[0.8rem]"
      )}
    >
      {variant === "home" &&
        tags.map((tag) => <Chip key={tag.detail}>{tag.detail}</Chip>)}
      {variant === "home_search" &&
        PLACE_TAG_CATEGORY.slice(0, 2).map((category, i) => {
          return (
            <div
              key={category}
              className={twMerge(
                "flex items-center",
                i !== PLACE_TAG_CATEGORY.length - 1 && "mb-[0.9rem]"
              )}
            >
              <div className="mr-[2rem]">
                <span className="body2-medium text-gray-6">{category}</span>
              </div>
              <div className="flex flex-wrap gap-[0.8rem]">
                {tags
                  .filter((f) => f.category === category)
                  .map((tag) => (
                    <Chip key={tag.detail}>{tag.detail}</Chip>
                  ))}
              </div>
            </div>
          );
        })}
      {variant === "curation" &&
        PLACE_TAG_CATEGORY.map((category, i) => {
          return (
            <div
              key={category}
              className={twMerge(
                "flex items-center",
                i !== PLACE_TAG_CATEGORY.length - 1 && "mb-[0.9rem]"
              )}
            >
              <div className="mr-[2rem]">
                <span className="body2-medium text-gray-6">{category}</span>
              </div>
              <div className="flex flex-wrap gap-[0.8rem]">
                {tags
                  .filter((f) => f.category === category)
                  .map((tag) => (
                    <Chip key={tag.detail}>{tag.detail}</Chip>
                  ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
