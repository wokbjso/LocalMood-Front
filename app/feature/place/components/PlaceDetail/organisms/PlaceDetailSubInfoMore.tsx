import Label from "@/common/components/ui/text/Label";
import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";

export default function PlaceDetailSubInfoMore({
  type,
  dishDesc,
}: Pick<PlaceDetailInfoProps, "type" | "dishDesc">) {
  const formattedDishDesc = dishDesc?.split(",").join("・");

  return (
    <div className="px-[20px] pb-[20px]">
      <Label className="body2-medium">{type === "CAFE" ? "🍰" : "🍷"}</Label>
      &nbsp; &nbsp;
      <Label className="body2-medium text-text-gray-8">
        {formattedDishDesc}
      </Label>
    </div>
  );
}
