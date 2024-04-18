"use client";

import LinkIcon from "@common/assets/icons/link/LinkIcon";
import { copyLink } from "@common/utils/text/copy-link";
import { usePathname } from "next/navigation";
import MapIcon from "@common/assets/icons/map/map";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@common/state/toast";
import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import UseMap from "@feature/map/components/Map/useMap";

interface PlaceDetailTopBar {
  type: string;
  address: string;
  name: string;
  imgUrl: string;
  purpose: string[];
  className: string;
}

export default function PlaceDetailTopBar({
  type,
  address,
  name,
  imgUrl,
  purpose,
  className,
}: PlaceDetailTopBar) {
  const setToast = useSetRecoilState(toastInfoSelector);

  const { isOpened, openMap, closeMap } = UseMap();

  const pathname = usePathname();

  const handleMapOpen = (state: boolean) => {
    openMap();
  };

  const handleCopyLinkClick = () => {
    copyLink(pathname);
    setToast({
      open: true,
      text: "링크가 복사되었어요",
    });
  };

  return (
    <>
      <ArrowBackTopBar className={className}>
        <div className="w-full flex justify-end items-center relative">
          <MapIcon
            mapInfo={{
              isOpened,
              placeData: [{ address, name, type, purpose, imgUrl }],
              closeMap,
              className: "fixed top-[7rem] left-0 z-20",
            }}
            color="white"
            onClick={() => handleMapOpen(true)}
          />
          <LinkIcon className="ml-[1.6rem]" onClick={handleCopyLinkClick} />
        </div>
      </ArrowBackTopBar>
    </>
  );
}
