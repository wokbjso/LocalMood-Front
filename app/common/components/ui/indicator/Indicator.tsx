import { twMerge } from "tailwind-merge";
import IndicatorShape from "./IndicatorShape";

interface IndicatorProps {
  index: number;
  className?: string;
  handleIndicator: (index: number) => void;
}

export default function Indicator({
  index,
  className,
  handleIndicator,
}: IndicatorProps) {
  const indicatorChange = (index: number) => {
    handleIndicator(index);
  };
  return (
    <div className={twMerge("flex", className)}>
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <IndicatorShape
            key={i}
            indicate={index === i}
            onClick={() => indicatorChange(i)}
          />
        ))}
    </div>
  );
}
