"use client";

import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import LinkIcon from "@common/assets/icons/link/LinkIcon";
import { TopBarProps } from "../../../../common/components/ui/topBar/type";
import BasicTopBar from "../../../../common/components/ui/topBar/BasicTopBar/BasicTopBar";
import { copyLink } from "@common/utils/text/copy-link";
import { getSession } from "@common/utils/getSession";
import DeleteSpaceScrap from "@feature/place/queries/deleteScrapSpace";
import PostSpaceScrap from "@feature/place/queries/postSpaceScrap";
import { usePathname } from "next/navigation";
import MapIcon from "@common/assets/icons/map/map";
import { useEffect, useState } from "react";
import Map from "@feature/map/components/Map/Map";
import SaveModal from "@feature/record/components/Modal/SaveModal";
import revalidateScrapSpace from "@feature/place/utils/revalidateScrapSpace";
import Toast from "@common/components/ui/toast/Toast";
import revalidatePlaceDetailById from "@feature/place/utils/revalidatePlaceDetailById";
import revalidateHomeRecommend from "@feature/place/utils/revalidateHomeRecomment";

export default function PlaceDetailTopBar({
  id,
  isScraped,
  type,
  address,
  name,
  imgUrl,
  purpose,
  className,
}: Partial<TopBarProps> & {
  type: string;
  address: string;
  name: string;
  isScraped: boolean;
  id: number;
  imgUrl: string;
  purpose: string[];
}) {
  const pathname = usePathname();
  const [mapOpen, setMapOpen] = useState(false);
  const [openSaveModal, setOpenSaveModal] = useState(false);
  const [scrapState, setScrapState] = useState<boolean>(isScraped);
  const [openScrapToast, setOpenScrapToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const handleMapOpen = (state: boolean) => {
    setMapOpen(state);
  };
  const handleScrapClick = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const userInfo = await getSession();
    if (!userInfo) {
      location.replace("/login");
    } else {
      if (scrapState) {
        const res = await DeleteSpaceScrap(id as number);
        if (res.status === 200) {
          setOpenScrapToast(true);
          setToastText(`스크랩이 해제되었습니다`);
          setScrapState && setScrapState(false);
          revalidateScrapSpace();
          revalidateHomeRecommend();
          revalidatePlaceDetailById(id);
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      } else {
        const res = await PostSpaceScrap(id as number);
        if (res.status === 200) {
          setOpenScrapToast(true);
          setToastText(`스크랩 되었습니다`);
          setScrapState && setScrapState(true);
          setOpenSaveModal && setOpenSaveModal(true);
          revalidateScrapSpace();
          revalidateHomeRecommend();
          revalidatePlaceDetailById(id);
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      }
    }
  };
  const handleCopyLinkClick = () => {
    copyLink(pathname);
  };
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (openScrapToast) {
      timeoutId = setTimeout(() => {
        setOpenScrapToast(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [openScrapToast]);
  return (
    <>
      <BasicTopBar className={className}>
        <div className="w-full flex justify-end items-center relative">
          <MapIcon
            color="white"
            className="mr-[1.2rem]"
            onClick={() => handleMapOpen(true)}
          />
          {scrapState ? (
            <ScrapFill color="white" onClick={handleScrapClick} />
          ) : (
            <ScrapLine color="white" onClick={handleScrapClick} />
          )}

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
      {openSaveModal && (
        <SaveModal spaceId={id} handleModalFn={setOpenSaveModal} />
      )}
      <Toast open={openScrapToast} text={toastText} />
    </>
  );
}
