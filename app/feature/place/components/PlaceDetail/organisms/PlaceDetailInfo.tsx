"use client";

import { PLACE_SUB_TYPE } from "@/feature/place/constants/place-tag-category";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@/common/state/toast";
import { myCurationModalInfoSelector } from "@/common/state/myCurationModal";
import { validateLoggedIn } from "@/common/utils/validate/validateLoggedIn";
import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";
import ScrapFillIcon from "@/common/assets/icons/scrap/ScrapFillIcon";
import ScrapLineIcon from "@/common/assets/icons/scrap/ScrapLineIcon";
import TextWithDivider from "@/common/components/ui/text/TextWithDivider";
import PlaceDetailSubInfo from "./PlaceDetailSubInfo";

//Organism
export default function PlaceDetailInfo({
  id,
  name,
  type,
  subType,
  address,
  isScraped,
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
  | "isScraped"
  | "visitorNum"
  | "optionalService"
  | "dishDesc"
>) {
  const setToast = useSetRecoilState(toastInfoSelector);
  const setMyCurationModal = useSetRecoilState(myCurationModalInfoSelector);

  const handleScrapClick = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    if ((await validateLoggedIn()) === false) {
      location.replace("/login");
    } else {
      setMyCurationModal({
        open: true,
        spaceId: id,
      });
      setToast({
        open: true,
        text: "저장할 큐레이션을 선택해주세요",
      });
    }
  };
  return (
    <>
      <div className="flex-col relative">
        <div className="headline0 mb-[0.8rem] px-[2rem]">{name}</div>{" "}
        {isScraped ? (
          <ScrapFillIcon
            color="#9E9E9E"
            className="absolute top-0 right-[2rem]"
            onClick={handleScrapClick}
          />
        ) : (
          <ScrapLineIcon
            color="#9E9E9E"
            className="absolute top-0 right-[2rem]"
            onClick={handleScrapClick}
          />
        )}
        <TextWithDivider
          leftText={
            type === "CAFE" ? "카페" : subType && PLACE_SUB_TYPE[subType]
          }
          rightText={address}
          className="px-[2rem]"
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
