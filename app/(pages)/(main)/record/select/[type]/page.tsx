"use client";
import { usePathname, useSearchParams } from "next/navigation";
import RecordComplete from "@feature/record/components/RecordComplete/RecordComplete";
import SelectKeyword from "@feature/record/components/Keyword/SelectKeyword";
import SelectEvaluation from "@feature/record/components/Evaluation/SelectEvaluation";
import SelectPhoto from "@feature/record/components/PhotoUpload/SelectPhoto";

export default function RecordSelect() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const name = searchParams.get("name") || "";
  const type = pathname.split("/").pop();

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
      <div>
        {type === "photo" && (
          <SelectPhoto type={type} category={category} name={name} />
        )}
      </div>
      <div>{type === "complete" && <RecordComplete />}</div>
    </div>
  );
}
