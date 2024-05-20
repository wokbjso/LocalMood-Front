import { CSSProperties } from "react";
import { PlaceRecordPurposeGraphBarProps } from "./PlaceRecordPurposeGraphBar";

export default function GraphBar({
  percentage,
}: Pick<PlaceRecordPurposeGraphBarProps, "percentage">) {
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
