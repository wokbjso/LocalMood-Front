"use client";
import { usePathname, useSearchParams } from "next/navigation";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";
import RecordComplete from "@feature/record/components/RecordComplete/RecordComplete";
import PhotoUpload from "@feature/record/components/PhotoUpload/PhotoUpload";
import SelectKeyword from "@feature/record/components/Keyword/SelectKeyword";
import SelectEvaluation from "@feature/record/components/Evaluation/SelectEvaluation";

export default function RecordSelect() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const name = searchParams.get("name") || "";
  const type = pathname.split("/").pop();

  const renderPhotoSelect = () => {
    return (
      <div>
        <PlaceRecordTopBar
          showIndicator={true}
          indicatorIndex={2}
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
          <SelectKeyword type={type} category={category} name={name} />
        )}
      </div>
      <div>
        {type === "evaluate" && (
          <SelectEvaluation type={type} category={category} name={name} />
        )}
      </div>
      <div>{type === "photo" && renderPhotoSelect()}</div>
      <div>{type === "complete" && renderComplete()}</div>
    </div>
  );
}
