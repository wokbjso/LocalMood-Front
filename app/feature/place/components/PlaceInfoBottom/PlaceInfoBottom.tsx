import { PLACE_TAG_CATEGORY } from "@feature/place/constants/place-tag-category";
import { twMerge } from "tailwind-merge";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import { PlaceInfoProps } from "@feature/place/type";

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
        tags?.map((tag, i) => <Chip key={tag.detail + i}>{tag.detail}</Chip>)}
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
                <span className="body2-medium text-text-gray-6">
                  {category}
                </span>
              </div>
              <div className="flex flex-wrap gap-[0.8rem]">
                {tags
                  ?.filter((f) => f.category === category)
                  .map((tag, i) => (
                    <Chip key={tag.category + i}>{tag.detail}</Chip>
                  ))}
              </div>
            </div>
          );
        })}
      {variant === "curation" &&
        PLACE_TAG_CATEGORY.slice(0, 3).map((category, i) => {
          return (
            <div
              key={category}
              className={twMerge(
                "flex items-center",
                i !== PLACE_TAG_CATEGORY.length - 1 && "mb-[0.9rem]"
              )}
            >
              <div className="mr-[2rem]">
                <span className="body2-medium text-text-gray-6">
                  {category}
                </span>
              </div>
              <div className="flex flex-wrap gap-[0.8rem]">
                {tags
                  ?.filter((f) => f.category === category)
                  .map((tag, i) => (
                    <Chip key={tag.detail + i}>{tag.detail}</Chip>
                  ))}
              </div>
            </div>
          );
        })}
      {variant === "scrapped" &&
        PLACE_TAG_CATEGORY.slice(0, 4).map((category, i) => {
          return (
            <div
              key={category}
              className={twMerge(
                "flex items-center",
                i !== PLACE_TAG_CATEGORY.length - 1 && "mb-[0.9rem]"
              )}
            >
              <div className="mr-[2rem]">
                <span className="body2-medium text-text-gray-6">
                  {category}
                </span>
              </div>
              <div className="flex flex-wrap gap-[0.8rem]">
                {tags
                  ?.filter((f) => f.category === category)
                  .map((tag, i) => (
                    <Chip key={tag.detail + i}>{tag.detail}</Chip>
                  ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
