import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import Button from "@common/components/ui/buttons/Button/Button";
import GraphUpDownVote from "@common/components/ui/graph/GraphUpDownVote/GraphUpDownVote";

interface PlaceDetailKeywordEvaluationProps {
  id: number;
  mainText: string;
  category: string;
  likes: { comment: string; percentage: string }[];
  dislikes: { comment: string; percentage: string }[];
}

export default function PlaceDetailKeywordEvaluation({
  id,
  mainText,
  category,
  likes,
  dislikes,
}: PlaceDetailKeywordEvaluationProps) {
  return (
    <div className="pt-[3.6rem] px-[2rem] pb-[3rem]">
      <div className="text-black headline2 mb-[1.2rem]">{mainText}</div>
      <div className="mb-[2rem]">
        <div className="mb-[0.4rem]">
          {likes.map((li, i) => (
            <GraphUpDownVote
              key={li.comment}
              evaluation={li.comment}
              percentage={li.percentage}
              like={true}
              className={i === 0 ? "mb-[0.4rem]" : ""}
            />
          ))}
        </div>
        <div className="flex flex-col items-end">
          {dislikes.map((li, i) => (
            <GraphUpDownVote
              key={li.comment}
              evaluation={li.comment}
              percentage={li.percentage}
              like={false}
              className={i === 0 ? "mb-[0.4rem]" : ""}
            />
          ))}
        </div>
      </div>
      <LinkLayout
        routeUrl={`/place/${
          category === "카페" ? "cafe" : "restaurant"
        }/${id}/more`}
      >
        <Button variant="line">기록 전체 보기</Button>
      </LinkLayout>
    </div>
  );
}
