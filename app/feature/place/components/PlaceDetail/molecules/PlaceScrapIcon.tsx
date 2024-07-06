"use client";

import ScrapFillIcon from "@/common/assets/icons/scrap/ScrapFillIcon";
import ScrapLineIcon from "@/common/assets/icons/scrap/ScrapLineIcon";
import { myCurationModalInfoSelector } from "@/common/state/myCurationModal";
import { toastInfoSelector } from "@/common/state/toast";
import { validateLoggedIn } from "@/common/utils/validate/validate-logged-in";
import useGetPlaceScrapState from "@/feature/place/queries/useGetPlaceScrapState";
import { useSetRecoilState } from "recoil";

export default function PlaceScrapIcon({ id }: { id: number }) {
  const { data: placeScrapState } = useGetPlaceScrapState(id);
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
  return placeScrapState?.isScraped === true ? (
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
  );
}
