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
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import revalidateCurationScrap from "@feature/curation/actions/revalidateCurationScrap";
import revalidateCurationDetail from "@feature/curation/actions/revalidateCurationDetail";

interface CurationTopAppBarProps {
  curationDetail: CurationDetailResponse;
  text?: string;
  variant?: string;
  className?: string;
}

export default function CurationTopAppBar({
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

  const handleScrapDelete = async () => {
    const res = await fetch(`/api/curation/scrap/delete/${curationDetail.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      revalidateCurationScrap();
      revalidateCurationDetail();
    } else {
      alert("에러가 발생했습니다.");
    }
  };

  const handleScrapAdd = async () => {
    const res = await fetch(`/api/curation/scrap/add/${curationDetail.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      revalidateCurationScrap();
      revalidateCurationDetail();
    } else {
      alert("에러가 발생했습니다.");
    }
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
                {curationDetail.isScraped ? (
                  <ScrapFill onClick={handleScrapDelete} />
                ) : (
                  <ScrapLine color="#9E9E9E" onClick={handleScrapAdd} />
                )}
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
          <CurationMenuModal
            id={curationDetail.id}
            handleMenuModalState={setMenuModalOpen}
          />
        </div>
      )}
      <Toast open={linkCopyToastOpen} text={toastText} />
    </>
  );
}
