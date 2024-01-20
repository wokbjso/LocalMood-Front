"use client";
import { usePathname } from "next/navigation";
import RecordKeyword from "@feature/record/components/Keyword/RecordKeyword";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";
import RecordEvaluation from "@feature/record/components/Evaluation/RecordEvaluation";
import RecordComplete from "@feature/record/components/RecordComplete/RecordComplete";
import PhotoUpload from "@feature/record/components/PhotoUpload/PhotoUpload";

export default function RecordSelect() {
  const pathname = usePathname();

  const type = pathname.split("/").pop();

  const renderKeywordSelect = () => {
    return (
      <div>
        <PlaceRecordTopBar
          showIndicator={true}
          text="나이스워크투데이를 나타내는 키워드를 골라주세요"
        />
        <RecordKeyword category={"cafe"} />
      </div>
    );
  };
  const renderEvaluateSelect = () => {
    return (
      <div>
        <PlaceRecordTopBar
          showIndicator={true}
          text="특별히 좋았던 점과 아쉬운 점이 있었나요?"
        />
        <RecordEvaluation category={"restaurant"} />
      </div>
    );
  };
  const renderPhotoSelect = () => {
    return (
      <div>
        <PlaceRecordTopBar
          showIndicator={true}
          text="방문한 사진을 업로드해주세요!"
        />
        <PhotoUpload />
      </div>
    );
  };
  const renderComplete = () => {
    return (
      <div>
        <RecordComplete />
      </div>
    );
  };

  return (
    <div>
      <div>{type === "keyword" && renderKeywordSelect()}</div>
      <div>{type === "evaluate" && renderEvaluateSelect()}</div>
      <div>{type === "photo" && renderPhotoSelect()}</div>
      <div>{type === "complete" && renderComplete()}</div>
    </div>
  );
}
