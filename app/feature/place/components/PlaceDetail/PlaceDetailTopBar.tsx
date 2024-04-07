"use client";

import LinkIcon from "@common/assets/icons/link/LinkIcon";
import BasicTopBar from "../../../../common/components/ui/topBar/BasicTopBar/BasicTopBar";
import { copyLink } from "@common/utils/text/copy-link";
import { usePathname } from "next/navigation";
import MapIcon from "@common/assets/icons/map/map";
import { useEffect, useState } from "react";
import Map from "@feature/map/components/Map/Map";
import { useRecoilState } from "recoil";
import { toastInfoSelector } from "@common/atom/toast";
import Toast from "@common/components/ui/toast/Toast";

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
  const [toast, setToast] = useRecoilState(toastInfoSelector);

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

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (toast.open) {
      timeoutId = setTimeout(() => {
        setToast((prev) => {
          return { ...prev, open: false };
        });
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [toast.open, setToast]);

  return (
    <>
      <BasicTopBar className={className}>
        <div className="w-full flex justify-end items-center relative">
          <MapIcon color="white" onClick={() => handleMapOpen(true)} />
          <LinkIcon className="ml-[1.6rem]" onClick={handleCopyLinkClick} />
        </div>
      </BasicTopBar>
      {mapOpen && (
        <Map
          handleMapOpen={handleMapOpen}
          placeData={[{ address: address, name, type, purpose, imgUrl }]}
          className="fixed top-[7rem] z-10"
        />
      )}
      <Toast open={toast.open} text={toast.text} />
    </>
  );
}
