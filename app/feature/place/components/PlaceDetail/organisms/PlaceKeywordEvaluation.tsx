import LinkLayout from "@/common/components/layout/Link/LinkLayout";
import Button from "@/common/components/ui/buttons/Button/Button";
import GraphUpDownVote from "@/common/components/ui/graph/GraphUpDownVote/GraphUpDownVote";
import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";

//Organism
export default function PlaceKeywordEvaluation({
  id,
  mainText,
  positiveEval,
  negativeEval,
}: Pick<PlaceDetailInfoProps, "id" | "positiveEval" | "negativeEval"> & {
  mainText: string;
}) {
  return (
    <div className="pt-[3.6rem] px-[2rem] pb-[3rem]">
      <h1 className="text-black headline2 mb-[1.2rem]">{mainText}</h1>
      <div className="mb-[2rem]">
        <div className="flex flex-col items-start gap-[0.4rem] mb-[0.4rem]">
          {positiveEval &&
            positiveEval.map((li, i) => (
              <GraphUpDownVote
                key={li[i] + i}
                evaluation={li[0]}
                percentage={li[1]}
                like={true}
              />
            ))}
        </div>
        <div className="flex flex-col items-end">
          {negativeEval &&
            negativeEval.map((li, i) => (
              <GraphUpDownVote
                key={li[i] + i}
                evaluation={li[0]}
                percentage={li[1]}
                like={false}
                className={i === 0 ? "mb-[0.4rem]" : ""}
              />
            ))}
        </div>
      </div>
      <LinkLayout routeUrl={`/place/${id}/more`} prefetch>
        <Button variant="line" className="w-full h-[4rem]">
          기록 전체 보기
        </Button>
      </LinkLayout>
    </div>
  );
}
