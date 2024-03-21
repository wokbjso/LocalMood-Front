"use client";

import ShareIcon from "@common/assets/icons/share/share.svg";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { usePathname } from "next/navigation";
import MenuIcon from "@common/assets/icons/menu/MenuIcon";
import { useEffect, useState } from "react";
import CurationMenuModal from "../CurationModal/CurationMenuModal";
import { copyLink } from "@common/utils/text/copy-link";
import MapIcon from "@common/assets/icons/map/map";
import Map from "@feature/map/components/Map/Map";
import { CurationDetailResponse } from "@feature/curation/queries/dto/curation-detail";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import { sliceText } from "@common/utils/text/slice-text";
import Toast from "@common/components/ui/toast/Toast";

interface CurationTopAppBarProps {
  id: number;
  curationDetail: CurationDetailResponse;
  text?: string;
  variant?: string;
  className?: string;
}

export default function CurationTopAppBar({
  id,
  curationDetail,
  text,
  variant,
  className,
}: CurationTopAppBarProps) {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [linkCopyToastOpen, setLinkCopyToastOpen] = useState(false);
  const [toastText, setToastText] = useState("");
  const pathname = usePathname();
  const [mapPlaceData, setMapPlaceData] = useState<
    {
      address: string;
      name: string;
      type: string;
      purpose: string[];
      imgUrl: string;
    }[]
  >([]);

  const handleMenuClick = () => {
    setMenuModalOpen(true);
  };

  const handleCopyLinkClick = async () => {
    copyLink(pathname);
    setLinkCopyToastOpen(true);
    setToastText("링크가 복사되었어요");
  };

  const handleMapClick = (state: boolean) => {
    setMapOpen(state);
  };

  useEffect(() => {
    setMapPlaceData(
      curationDetail.spaceDetails.map((space) => {
        return {
          address: space.address,
          name: space.name,
          type: space.type,
          purpose: space.purpose.split(","),
          imgUrl: space.imageUrls[0],
        };
      })
    );
  }, [curationDetail]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (linkCopyToastOpen) {
      timeoutId = setTimeout(() => {
        setLinkCopyToastOpen(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [linkCopyToastOpen]);
  return (
    <>
      <BasicTopBar color="#9E9E9E" className={className}>
        <div className="w-[100%] flex items-center justify-between gap-[0.8rem]">
          <h1 className="headline3-semibold">{text && sliceText(text, 16)}</h1>
          <div className="flex items-center gap-[0.6rem]">
            <MapIcon
              className="mr-[0.4rem]"
              onClick={() => handleMapClick(true)}
            />
            {variant === "others" ? (
              <>
                <ScrapLine color="#9E9E9E" />
                <ShareIcon onClick={handleCopyLinkClick} />
              </>
            ) : (
              <>
                <ShareIcon onClick={handleCopyLinkClick} />
                <MenuIcon onClick={handleMenuClick} />
              </>
            )}
          </div>
        </div>
      </BasicTopBar>
      {mapOpen && (
        <Map
          placeData={mapPlaceData}
          zoom={13}
          handleMapOpen={handleMapClick}
          className="fixed top-[7rem] z-10"
        />
      )}
      {menuModalOpen && (
        <div className="w-[100%] h-[100%] fixed top-0 left-0 z-50">
          <CurationMenuModal id={id} handleMenuModalState={setMenuModalOpen} />
        </div>
      )}
      <Toast open={linkCopyToastOpen} text={toastText} />
    </>
  );
}
