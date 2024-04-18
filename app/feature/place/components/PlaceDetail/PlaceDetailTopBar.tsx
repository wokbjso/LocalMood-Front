"use client";

import LinkIcon from "@common/assets/icons/link/LinkIcon";
import { copyLink } from "@common/utils/text/copy-link";
import { usePathname } from "next/navigation";
import MapIcon from "@common/assets/icons/map/map";
import { useState } from "react";
import Map from "@feature/map/components/Map/Map";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@common/state/toast";
import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";

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

  const [mapOpen, setMapOpen] = useState(false);
  const pathname = usePathname();
  const handleMapOpen = (state: boolean) => {
    setMapOpen(state);
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
          <MapIcon color="white" onClick={() => handleMapOpen(true)} />
          <LinkIcon className="ml-[1.6rem]" onClick={handleCopyLinkClick} />
        </div>
      </ArrowBackTopBar>
      {mapOpen && (
        <Map
          handleMapOpen={handleMapOpen}
          placeData={[{ address: address, name, type, purpose, imgUrl }]}
          className="fixed top-[7rem] z-10"
        />
      )}
    </>
  );
}
