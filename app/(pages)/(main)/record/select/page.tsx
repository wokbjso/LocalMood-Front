import RecordKeyword from "@feature/record/components/Keyword/RecordKeyword";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";

export default function RecordSelect() {
  return (
    <div>
      <PlaceRecordTopBar
        showIndicator={true}
        text="나이스워크투데이를 나타내는 키워드를 골라주세요"
      />
      <RecordKeyword category={"cafe"} />
    </div>
  );
}
