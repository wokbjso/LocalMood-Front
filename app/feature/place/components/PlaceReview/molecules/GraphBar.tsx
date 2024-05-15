import { CSSProperties } from "react";
import { RecordPurposeGraphBarProps } from "./RecordPurposeGraphBar";

export default function GraphBar({
  percentage,
}: Pick<RecordPurposeGraphBarProps, "percentage">) {
  return (
    <div className="w-full h-[1.2rem] rounded-[10px] bg-background-gray-2">
      <div
        className="h-full bg-primary-normal rounded-[10px] fill-graph"
        style={
          {
            "--percentage": `${percentage}`,
          } as CSSProperties
        }
      />
    </div>
  );
}
