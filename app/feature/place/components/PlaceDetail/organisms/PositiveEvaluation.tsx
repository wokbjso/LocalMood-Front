import GraphUpDownVote from "@/common/components/ui/graph/GraphUpDownVote/GraphUpDownVote";
import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";
import { twMerge } from "tailwind-merge";

export default function PositiveEvaluation({
  positiveEval,
  className,
}: Pick<PlaceDetailInfoProps, "positiveEval"> & { className?: string }) {
  return (
    <div className={twMerge("flex flex-col items-start", className)}>
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
  );
}
