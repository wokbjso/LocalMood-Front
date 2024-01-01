import IndicatorShape from "./IndicatorShape";

interface IndicatorProps {
  index: number;
}

export default function Indicator({ index }: IndicatorProps) {
  return (
    <div className="flex">
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <IndicatorShape key={i} indicate={index === i} />
        ))}
    </div>
  );
}
