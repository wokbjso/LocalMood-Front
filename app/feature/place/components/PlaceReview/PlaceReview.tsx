import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import Image from "next/image";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import GraphUpDownVote from "@common/components/ui/graph/GraphUpDownVote/GraphUpDownVote";
import { CAFE_TAG_CATEGORY } from "@feature/place/constants/place-tag-category";

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
  name,
  type,
  address,
  author,
  createdAt,
  purpose,
  interior,
  mood,
  music,
  positiveEval,
  negativeEval,
  scrapped,
}: PlaceReviewProps) {
  return (
    <div className="mb-[5.2rem]">
      <div className="flex items-start">
        <div className="w-[1.6rem] h-[1.6rem] relative mr-[0.8rem]">
          <Image
            src={image}
            alt="프로필 사진"
            fill
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
              <div key={category} className="flex items-center mb-[0.6rem]">
                <span className="mr-[2rem] text-text-gray-7 body2-medium">
                  {CAFE_TAG_CATEGORY[category]}
                </span>
                {i === 0 && <Chip>{purpose}</Chip>}
                {i === 1 &&
                  interior &&
                  interior.split(",").map((li) => <Chip key={li}>{li}</Chip>)}
                {i === 2 &&
                  mood &&
                  mood?.split(",").map((li) => <Chip key={li}>{li}</Chip>)}
                {i === 3 &&
                  music &&
                  music?.split(",").map((li) => <Chip key={li}>{li}</Chip>)}
              </div>
            ))}
          </div>
          <div className="flex my-[1.6rem]">
            {Array(image)?.map((photo, i) => (
              <div
                key={photo + i}
                className="w-[15rem] h-[15rem] mr-[0.5rem] relative"
              >
                <Image alt="리뷰 사진" src={photo} fill />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
