"use client";

import { PLACE_SUB_TYPE } from "@feature/place/constants/place-tag-category";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@common/state/toast";
import { myCurationModalInfoSelector } from "@common/state/myCurationModal";
import { validateLoggedIn } from "@common/utils/validate/validateLoggedIn";
import PlaceDetailInfoMore from "./PlaceDetailInfoMore";
import { PlaceDetailInfoProps } from "@feature/place/queries/dto/place-detail";
import PlaceTypeAndAddress from "../../PlaceInfo/molecules/PlaceTypeAndAddress";

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
      <div className="flex-col px-[2rem] relative">
        <div className="headline0 mb-[0.8rem]">{name}</div>{" "}
        {isScraped ? (
          <ScrapFill
            color="#9E9E9E"
            className="absolute top-0 right-[2rem]"
            onClick={handleScrapClick}
          />
        ) : (
          <ScrapLine
            color="#9E9E9E"
            className="absolute top-0 right-[2rem]"
            onClick={handleScrapClick}
          />
        )}
        <PlaceTypeAndAddress
          type={type === "CAFE" ? "카페" : subType && PLACE_SUB_TYPE[subType]}
          address={address}
        />
        <PlaceDetailInfoMore
          type={type}
          visitorNum={visitorNum}
          optionalService={optionalService}
          dishDesc={dishDesc}
        />
      </div>
    </>
  );
}
