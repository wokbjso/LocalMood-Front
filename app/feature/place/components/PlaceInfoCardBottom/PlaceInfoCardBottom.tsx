import { twMerge } from "tailwind-merge";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import {
  PlaceInfoCardAdditionalProps,
  PlaceInfoCardBottomProps,
  PlaceInfoCardTopProps,
} from "@feature/place/type";

export default function PlaceInfoCardBottom({
  type,
  keyword,
  purpose,
  interior,
  mood,
  bestMenu,
  keywordCategoryNum,
  bottomClassName,
}: Pick<PlaceInfoCardTopProps, "type"> &
  PlaceInfoCardBottomProps &
  Partial<PlaceInfoCardAdditionalProps>) {
  return (
    <div
      className={twMerge(
        "w-full mt-[1.6rem] flex flex-wrap gap-[0.8rem]",
        bottomClassName
      )}
    >
      {keywordCategoryNum === 1 &&
        keyword?.slice(0, 2).map((tag, i) => (
          <Chip key={tag + i}>
            <span className="body2-medium text-black">{tag}</span>
          </Chip>
        ))}
      {keywordCategoryNum && keywordCategoryNum >= 2 && (
        <div className="flex items-center">
          <div className="mr-[2rem]">
            <span className="body2-medium text-text-gray-6">방문목적</span>
          </div>
          <div className="flex flex-wrap gap-[0.8rem]">
            {purpose?.map((tag, i) => (
              <Chip key={tag + i}>
                <div className="body2-medium">{tag}</div>
              </Chip>
            ))}
          </div>
        </div>
      )}
      {keywordCategoryNum && keywordCategoryNum >= 2 && (
        <div
          className={twMerge("flex items-center", keywordCategoryNum > 2 && "")}
        >
          <div className="mr-[2rem]">
            <span className="body2-medium text-text-gray-6 whitespace-nowrap">
              {type === "CAFE" ? "인테리어" : "대표메뉴"}
            </span>
          </div>
          <div className="flex flex-wrap gap-[0.8rem]">
            {type === "CAFE"
              ? interior?.slice(0, 2).map((tag, i) => (
                  <Chip key={tag + i}>
                    <div className="body2-medium">{tag}</div>
                  </Chip>
                ))
              : bestMenu?.slice(0, 2).map(
                  (
                    tag,
                    i // Display only the first two items
                  ) => (
                    <Chip key={tag + i}>
                      <div className="body2-medium">{tag}</div>
                    </Chip>
                  )
                )}
          </div>
        </div>
      )}
      {keywordCategoryNum && keywordCategoryNum >= 3 && (
        <div
          className={twMerge(
            "flex items-center",
            keywordCategoryNum > 3 && "mb-[0.9rem]"
          )}
        >
          <div className="mr-[2rem]">
            <span className="body2-medium text-text-gray-6">공간무드</span>
          </div>
          <div className="flex flex-wrap gap-[0.8rem]">
            {mood?.map((tag, i) => (
              <Chip key={tag + i}>
                <div className="body2-medium">{tag}</div>
              </Chip>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
