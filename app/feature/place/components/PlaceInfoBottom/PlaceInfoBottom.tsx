import { twMerge } from "tailwind-merge";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import { PlaceInfoProps } from "@feature/place/type";
import {
  CAFE_TAG_CATEGORY,
  RESTAURANT_TAG_CATEGORY,
} from "@feature/place/constants/place-tag-category";

export default function PlaceInfoBottom({
  type,
  keyword,
  purpose,
  interior,
  bestMenu,
  keywordCategoryNum,
  bottomClassName,
}: Pick<
  PlaceInfoProps,
  | "type"
  | "keyword"
  | "purpose"
  | "interior"
  | "bestMenu"
  | "keywordCategoryNum"
  | "bottomClassName"
>) {
  return (
    <div
      className={twMerge(
        "w-full mt-[1.6rem] flex flex-wrap gap-[0.8rem]",
        bottomClassName
      )}
    >
      {keywordCategoryNum === 1 &&
        keyword?.map((tag, i) => (
          <Chip key={tag + i}>
            <span className="body2-medium text-black">{tag}</span>
          </Chip>
        ))}
      {keywordCategoryNum && keywordCategoryNum >= 2 && (
        <div className="flex items-center mb-[0.9rem]">
          <div className="mr-[2rem]">
            <span className="body2-medium text-text-gray-6">방문목적</span>
          </div>
          <div className="flex flex-wrap gap-[0.8rem]">
            {purpose?.map((tag, i) => (
              <Chip key={tag + i}>{tag}</Chip>
            ))}
          </div>
        </div>
      )}
      {keywordCategoryNum && keywordCategoryNum >= 3 && (
        <div
          className={twMerge(
            "flex items-center",
            keywordCategoryNum > 2 && "mb-[0.9rem]"
          )}
        >
          <div className="mr-[2rem]">
            <span className="body2-medium text-text-gray-6">
              {type === "CAFE" ? "인테리어" : "대표메뉴"}
            </span>
          </div>
          <div className="flex flex-wrap gap-[0.8rem]">
            {type === "CAFE"
              ? interior?.map((tag, i) => <Chip key={tag + i}>{tag}</Chip>)
              : bestMenu?.map((tag, i) => <Chip key={tag + i}>{tag}</Chip>)}
          </div>
        </div>
      )}
    </div>
  );
}
