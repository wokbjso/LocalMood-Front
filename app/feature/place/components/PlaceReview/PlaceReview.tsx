import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import Image from "next/image";
import PlaceInfoBottom from "../PlaceInfoBottom/PlaceInfoBottom";
import { PLACE_TAG_CATEGORY } from "@feature/place/constants/place-tag-category";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import GraphUpDownVote from "@common/components/ui/graph/GraphUpDownVote/GraphUpDownVote";

interface PlaceReviewProps {
  id: number;
  profile_img: string;
  user_name: string;
  review_date: string;
  tags: {
    [key: string]: string[];
  };
  review_photos?: string[];
  evaluation?: {
    likes: string[];
    dislikes: string[];
  };
}

export default function PlaceReview({
  id,
  profile_img,
  user_name,
  review_date,
  tags,
  review_photos,
  evaluation,
}: PlaceReviewProps) {
  return (
    <div className="mb-[5.2rem]">
      <div className="flex items-start">
        <div className="w-[1.6rem] h-[1.6rem] relative mr-[0.8rem]">
          <Image
            src={profile_img}
            alt="프로필 사진"
            fill
            className="rounded-full cursor-pointer"
          />
        </div>
        <div>
          <div className="mb-[1.2rem]">
            <div className="text-black headline3">{user_name}</div>
            <div className="body3-medium text-text-gray-6 mt-[0.8rem]">
              {review_date}
            </div>
          </div>
          <div>
            {Object.keys(PLACE_TAG_CATEGORY).map((category, i) => (
              <div key={category} className="flex items-center mb-[0.6rem]">
                <span className="mr-[2rem] text-text-gray-7 body2-medium">
                  {PLACE_TAG_CATEGORY[category]}
                </span>
                {tags[category].map((li) => (
                  <Chip key={li} className="mr-[0.4rem]">
                    {li}
                  </Chip>
                ))}
              </div>
            ))}
          </div>
          <div className="flex my-[1.6rem]">
            {review_photos?.map((photo, i) => (
              <div
                key={photo + i}
                className="w-[15rem] h-[15rem] mr-[0.5rem] relative"
              >
                <Image alt="리뷰 사진" src={photo} fill />
              </div>
            ))}
          </div>
          {evaluation?.likes.map((li) => (
            <GraphUpDownVote
              key={li}
              variant="unite"
              evaluation={li}
              like
              className="mb-[0.6rem]"
            />
          ))}
          {evaluation?.dislikes.map((li) => (
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
