"use client";

import LinkIcon from "@common/assets/icons/link/LinkIcon";
import BasicTopBar from "../../../../common/components/ui/topBar/BasicTopBar/BasicTopBar";
import { copyLink } from "@common/utils/text/copy-link";
import { usePathname } from "next/navigation";
import MapIcon from "@common/assets/icons/map/map";
import { useState } from "react";
import Map from "@feature/map/components/Map/Map";

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
  const pathname = usePathname();
  const [mapOpen, setMapOpen] = useState(false);
  const handleMapOpen = (state: boolean) => {
    setMapOpen(state);
  };
  const handleCopyLinkClick = () => {
    copyLink(pathname);
  };
  return (
    <>
      <BasicTopBar className={className}>
        <div className="w-full flex justify-end items-center relative">
          <MapIcon color="white" onClick={() => handleMapOpen(true)} />
          <LinkIcon className="ml-[0.8rem]" onClick={handleCopyLinkClick} />
        </div>
      </BasicTopBar>
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
