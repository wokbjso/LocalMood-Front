import GraphUpDownVote from "@/common/components/ui/graph/GraphUpDownVote/GraphUpDownVote";
import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";

export default function NegativeEvaluation({
  negativeEval,
}: Pick<PlaceDetailInfoProps, "negativeEval">) {
  return (
    <div className="flex flex-col items-end">
      {negativeEval &&
        negativeEval[0].map((li, i) => (
          <GraphUpDownVote
            key={li[i] + i}
            evaluation={li[0]}
            percentage={Number(li[1])}
            like={false}
            className={i === 0 ? "mb-[0.4rem]" : ""}
          />
        ))}
    </div>
  );
}
