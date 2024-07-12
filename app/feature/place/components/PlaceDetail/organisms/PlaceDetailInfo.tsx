import { PLACE_SUB_TYPE } from "@/feature/place/constants/place-tag-category";
import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";
import TextWithDivider from "@/common/components/ui/text/TextWithDivider";
import PlaceDetailSubInfo from "./PlaceDetailSubInfo";
import Title from "@/common/components/ui/text/Title";
import dynamic from "next/dynamic";
import GetPlaceDetail from "@/feature/place/queries/getPlaceDetail";
const PlaceScrapIcon = dynamic(() => import("../molecules/PlaceScrapIcon"), {
  ssr: false,
});

//Organism
export default async function PlaceDetailInfo({
  id,
  name,
  type,
  subType,
  address,
  visitorNum,
  optionalService,
  dishDesc,
}: Pick<
  PlaceDetailInfoProps,
  | "id"
  | "name"
  | "type"
  | "subType"
  | "address"
  | "visitorNum"
  | "optionalService"
  | "dishDesc"
>) {
  return (
    <>
      <div className="flex-col relative">
        <Title className="mb-[8px] px-[20px] headline0">{name}</Title>
        <PlaceScrapIcon id={id} />
        <TextWithDivider
          leftText={
            type === "CAFE" ? "카페" : subType && PLACE_SUB_TYPE[subType]
          }
          rightText={address}
          className="px-[20px] mb-[24px]"
        />
        <PlaceDetailSubInfo
          type={type}
          visitorNum={visitorNum}
          optionalService={optionalService}
          dishDesc={dishDesc}
        />
      </div>
    </>
  );
}
