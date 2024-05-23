import Image from "next/image";
import Chip from "@/common/components/ui/buttons/Chip/Chip";
import GraphUpDownVote from "@/common/components/ui/graph/GraphUpDownVote/GraphUpDownVote";
import { twMerge } from "tailwind-merge";
import { PLACE_CATEGORY } from "@/feature/place/constants/place-tag-category";
import { PlaceRecordProps } from "@/feature/place/queries/dto/place-record";

//Organism
export default function PlaceRecord({
  image,
  author,
  createdAt,
  purpose,
  interior,
  mood,
  music,
  positiveEval,
  negativeEval,
}: PlaceRecordProps & { purpose: string }) {
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
            src={"/default_user.png"}
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
            {Object.keys(PLACE_CATEGORY).map((category, i) => (
              <div
                key={category}
                className={twMerge(
                  "flex items-center",
                  keyword[category] && "mb-[0.6rem]"
                )}
              >
                <span className="mr-[2rem] text-text-gray-7 body2-medium">
                  {keyword[category] && PLACE_CATEGORY[category]}
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
          <div
            className={twMerge(
              "flex",
              image.length > 0 ? "my-[16px]" : "my-[8px]"
            )}
          >
            {image?.map((img, i) => (
              <div
                key={img + i}
                className="w-[15rem] h-[15rem] mr-[0.5rem] relative"
              >
                <Image
                  alt="리뷰 사진"
                  src={img}
                  fill
                  sizes="40vw"
                  className="rounded-[8px]"
                />
              </div>
            ))}
          </div>
          {positiveEval &&
            positiveEval
              ?.split(",")
              .map((li) => (
                <GraphUpDownVote
                  key={li}
                  variant="unite"
                  evaluation={li}
                  like
                  className="mb-[0.6rem]"
                />
              ))}
          {negativeEval &&
            negativeEval
              ?.split(",")
              .map((li) => (
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
