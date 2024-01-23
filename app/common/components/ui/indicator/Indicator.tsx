import { twMerge } from "tailwind-merge";
import IndicatorShape from "./IndicatorShape";
import { useState } from "react";

interface IndicatorProps {
  indicatorIndex: number;
  className?: string;
  handleIndicator: (index: number) => void;
}

export default function Indicator({
  indicatorIndex,
  className,
  handleIndicator,
}: IndicatorProps) {
  const indicatorChange = (index: number) => {
    handleIndicator(index);
  };
  console.log(indicatorIndex);
  return (
    <div className={twMerge("flex", className)}>
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <IndicatorShape
            key={i}
            indicate={indicatorIndex === i}
            onClick={() => indicatorChange(i)}
          />
        ))}
    </div>
  );
}
