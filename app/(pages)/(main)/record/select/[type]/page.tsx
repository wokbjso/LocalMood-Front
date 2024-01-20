"use client";
import { usePathname, useSearchParams } from "next/navigation";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";
import RecordEvaluation from "@feature/record/components/Evaluation/RecordEvaluation";
import RecordComplete from "@feature/record/components/RecordComplete/RecordComplete";
import PhotoUpload from "@feature/record/components/PhotoUpload/PhotoUpload";
import SelectKeyword from "@feature/record/components/Keyword/SelectKeyword";

export default function RecordSelect() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const name = searchParams.get("name") || "";
  const type = pathname.split("/").pop();

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
      <div>
        {type === "keyword" && (
          <SelectKeyword category={category} name={name} />
        )}
      </div>
      <div>{type === "evaluate" && renderEvaluateSelect()}</div>
      <div>{type === "photo" && renderPhotoSelect()}</div>
      <div>{type === "complete" && renderComplete()}</div>
    </div>
  );
}
