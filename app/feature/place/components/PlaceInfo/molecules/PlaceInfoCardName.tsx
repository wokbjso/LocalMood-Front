import { sliceText } from "@/common/utils/text/slice-text";
import { PlaceInfoCardTopProps } from "@/feature/place/components/PlaceInfo/type";

export default function PlaceInfoCardName({
  name,
  direction,
  size,
}: Pick<PlaceInfoCardTopProps, "name" | "direction" | "size">) {
  return (
    <span>
      {direction === "vertical" && size === "small" ? sliceText(name, 8) : name}
    </span>
  );
}
