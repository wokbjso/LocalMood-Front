"use client";

import LinkIcon from "@/common/assets/icons/link/LinkIcon";
import { copyLink } from "@/common/utils/text/copy-link";
import { usePathname } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@/common/state/toast";
import ArrowBackTopBar from "@/common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import UseMap from "@/common/components/ui/map/Map/useMap";
import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";
import MapIcon from "@/common/assets/icons/map/mapIcon";

//Organism
export default function PlaceDetailTopBar({
  type,
  address,
  name,
  imgUrl,
  purpose,
  className,
}: Pick<PlaceDetailInfoProps, "type" | "address" | "name" | "purpose"> & {
  imgUrl: string;
  className?: string;
}) {
  const pathname = usePathname();

  const setToast = useSetRecoilState(toastInfoSelector);

  const { isOpened, openMap, closeMap } = UseMap();

  const handleMapIconClick = () => {
    openMap();
  };

  const handleLinkIconClick = () => {
    copyLink(pathname);
    setToast({
      open: true,
      text: "링크가 복사되었어요",
    });
  };

  return (
    <ArrowBackTopBar className={className}>
      <div className="flex justify-end items-center">
        <MapIcon
          mapInfo={{
            isOpened,
            placeData: [{ address, name, type, purpose, imgUrl }],
            closeMap,
            className: "fixed top-[7rem] left-0 z-20",
          }}
          color="white"
          onClick={handleMapIconClick}
        />
        <LinkIcon className="ml-[1.6rem]" onClick={handleLinkIconClick} />
      </div>
    </ArrowBackTopBar>
  );
}
