import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import Image from "next/image";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import GraphUpDownVote from "@common/components/ui/graph/GraphUpDownVote/GraphUpDownVote";
import { CAFE_TAG_CATEGORY } from "@feature/place/constants/place-tag-category";
import { twMerge } from "tailwind-merge";

interface PlaceReviewProps {
  image: string;
  name: string;
  type: string;
  address: string;
  author: string;
  createdAt: string;
  interior: string;
  purpose: string;
  mood: string;
  music: string;
  positiveEval: string;
  negativeEval: string;
  scrapped: boolean;
}

export default function PlaceReview({
  image,
  author,
  createdAt,
  purpose,
  interior,
  mood,
  music,
  positiveEval,
  negativeEval,
}: PlaceReviewProps) {
  const keyword: { [key: string]: string } = {
    purpose,
    interior,
    mood,
    music,
  };
  return (
    <div className="mb-[5.2rem]">
      <div className="flex items-start">
        <div className="w-[1.6rem] h-[1.6rem] relative mr-[0.8rem]">
          <Image
            src={image}
            alt="프로필 사진"
            fill
            sizes="10vw"
            className="rounded-full cursor-pointer"
          />
        </div>
        <div>
          <div className="mb-[1.2rem]">
            <div className="text-black headline3">{author}</div>
            <div className="body3-medium text-text-gray-6 mt-[0.8rem]">
              {createdAt}
            </div>
          </div>
          <div>
            {Object.keys(CAFE_TAG_CATEGORY).map((category, i) => (
              <div
                key={category}
                className={twMerge(
                  "flex items-center",
                  keyword[category] && "mb-[0.6rem]"
                )}
              >
                <span className="mr-[2rem] text-text-gray-7 body2-medium">
                  {keyword[category] && CAFE_TAG_CATEGORY[category]}
                </span>
                {category === "purpose" ? (
                  <Chip>{purpose}</Chip>
                ) : (
                  keyword[category] &&
                  keyword[category]
                    .split(",")
                    .slice(0, 1)
                    .map((k: string, i: number) => (
                      <Chip
                        key={k + i}
                        className="mr-[0.8rem] whitespace-nowrap"
                      >
                        {k}
                      </Chip>
                    ))
                )}
              </div>
            ))}
          </div>
          <div className="flex my-[1.6rem]">
            {Array(image)?.map((photo, i) => (
              <div
                key={photo + i}
                className="w-[15rem] h-[15rem] mr-[0.5rem] relative"
              >
                <Image alt="리뷰 사진" src={photo} fill sizes="" />
              </div>
            ))}
          </div>
          {positiveEval?.split(",").map((li) => (
            <GraphUpDownVote
              key={li}
              variant="unite"
              evaluation={li}
              like
              className="mb-[0.6rem]"
            />
          ))}
          {negativeEval?.split(",").map((li) => (
            <GraphUpDownVote
              key={li}
              variant="unite"
              evaluation={li}
              like={false}
              className="mb-[0.6rem]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
