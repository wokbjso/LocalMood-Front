import { twMerge } from "tailwind-merge";
import IndicatorShape from "./IndicatorShape";
import { useState } from "react";

interface IndicatorProps {
  indicatorIndex: number;
  clickAble?: boolean;
  className?: string;
  handleIndicatorIndex?: (index: number) => void;
}

export default function Indicator({
  indicatorIndex,
  clickAble,
  className,
  handleIndicatorIndex,
}: IndicatorProps) {
  const indicatorChange = (index: number) => {
    handleIndicatorIndex && handleIndicatorIndex(index);
  };
  return (
    <div className={twMerge("flex", className)}>
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <IndicatorShape
            key={i}
            indicate={indicatorIndex === i}
            onClick={clickAble ? () => indicatorChange(i) : undefined}
          />
        ))}
    </div>
  );
}
