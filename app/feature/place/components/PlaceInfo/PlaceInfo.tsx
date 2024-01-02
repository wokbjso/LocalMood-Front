import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Line from "@common/assets/icons/line/line.svg";
import Chip from "@common/ui/buttons/Chip/Chip";
import { PLACE_TAG_CATEGORY } from "@feature/place/constants/place-tag-category";

interface PlaceTags {
  category: string;
  detail: string;
}

interface PlaceInfoProps {
  variant?: "home" | "search" | "curation";
  placeName: string;
  category: string;
  location: string;
  tags: PlaceTags[];
  onClick: () => void;
  className?: string;
}

export default function PlaceInfo({
  variant = "home",
  placeName,
  category,
  location,
  tags,
  onClick,
  className,
}: PlaceInfoProps) {
  return (
    <div className={twMerge("w-[33.5rem]", className)} onClick={onClick}>
      <div className="w-full h-[16rem] relative">
        <Image
          src="https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg"
          alt="공간 사진"
          fill
        />
      </div>
      <div className="flex-col mt-[1.6rem]">
        <div className="headline2 mb-[0.8rem]">{placeName}</div>
        <div className="flex">
          <span className="body2-semibold text-gray-6">{category}</span>
          <Line className="mx-[0.8rem]" />
          <span className="body2-medium text-gray-5">{location}</span>
        </div>
      </div>
      <div className="mt-[1.6rem] w-full">
        {PLACE_TAG_CATEGORY.map((category, i) => {
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
              <div>
                {tags
                  .filter((f) => f.category === category)
                  .map((tag) => (
                    <Chip key={tag.detail} className="mr-[0.8rem]">
                      {tag.detail}
                    </Chip>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
