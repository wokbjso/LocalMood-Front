import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";

export default function PlaceDetailInfoMore({
  type,
  dishDesc,
}: Pick<PlaceDetailInfoProps, "type" | "dishDesc">) {
  const formattedDishDesc = dishDesc?.split(",").join("・");

  return (
    <div className="pt-[1.2rem] px-[20px] pb-[20px]">
      <span className="body2-medium">{type === "CAFE" ? "🍰" : "🍷"}</span>
      &nbsp; &nbsp;
      <span className="body2-medium text-text-gray-8">{formattedDishDesc}</span>
    </div>
  );
}
