import RecordKeywordContent from "@feature/record/components/Keyword/RecordKeywordContent";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";

interface SelectKeyword {
  category: string;
  name: string;
}

export default function SelectKeyword({ category, name }: SelectKeyword) {
  return (
    <div>
      <PlaceRecordTopBar
        showIndicator={true}
        indicatorIndex={0}
        text={`${name}를 나타내는 키워드를 골라주세요`}
      />
      <RecordKeywordContent category={category} />
    </div>
  );
}
