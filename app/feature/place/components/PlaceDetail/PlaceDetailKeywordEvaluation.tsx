import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import Button from "@common/components/ui/buttons/Button/Button";
import GraphUpDownVote from "@common/components/ui/graph/GraphUpDownVote/GraphUpDownVote";

interface PlaceDetailKeywordEvaluationProps {
  id: number;
  mainText: string;
  type: string;
  positiveEval: string[] | null;
  negativeEval: string[] | null;
}

export default function PlaceDetailKeywordEvaluation({
  id,
  mainText,
  type,
  positiveEval,
  negativeEval,
}: PlaceDetailKeywordEvaluationProps) {
  return (
    <div className="pt-[3.6rem] px-[2rem] pb-[3rem]">
      <div className="text-black headline2 mb-[1.2rem]">{mainText}</div>
      <div className="mb-[2rem]">
        <div className="flex flex-col items-start gap-[0.4rem]">
          {positiveEval &&
            positiveEval.map((li, i) => (
              <GraphUpDownVote
                key={li[i]}
                evaluation={li[0]}
                percentage={li[1] + "%"}
                like={true}
                className={i === 0 ? "" : ""}
              />
            ))}
        </div>
        <div className="flex flex-col items-end">
          {negativeEval &&
            negativeEval.map((li, i) => (
              <GraphUpDownVote
                key={li[i]}
                evaluation={li[0]}
                percentage={li[1] + "%"}
                like={false}
                className={i === 0 ? "mb-[0.4rem]" : ""}
              />
            ))}
        </div>
      </div>
      <LinkLayout routeUrl={`/place//${id}/more`}>
        <Button variant="line" className="w-full">
          기록 전체 보기
        </Button>
      </LinkLayout>
    </div>
  );
}
