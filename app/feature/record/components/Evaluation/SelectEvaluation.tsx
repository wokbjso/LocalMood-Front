import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";
import RecordEvaluationContent from "@feature/record/components/Evaluation/RecordEvaluationContent";

interface SelectEvaluation {
  type: string;
  category: string;
  name: string;
}

export default function SelectEvaluation({
  type,
  category,
  name,
}: SelectEvaluation) {
  return (
    <div>
      <PlaceRecordTopBar
        showIndicator={true}
        indicatorIndex={1}
        text="특별히 좋았던 점과 아쉬운 점이 있었나요?"
      />
      <RecordEvaluationContent category={category} />
    </div>
  );
}
