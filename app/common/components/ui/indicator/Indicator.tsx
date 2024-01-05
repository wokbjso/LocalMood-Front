import { twMerge } from "tailwind-merge";
import IndicatorShape from "./IndicatorShape";

interface IndicatorProps {
  index: number;
  className?: string;
}

export default function Indicator({ index, className }: IndicatorProps) {
  return (
    <div className={twMerge("flex", className)}>
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <IndicatorShape key={i} indicate={index === i} />
        ))}
    </div>
  );
}
