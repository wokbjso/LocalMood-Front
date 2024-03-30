"use client";

import ShareIcon from "@common/assets/icons/share/share.svg";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { copyLink } from "@common/utils/text/copy-link";
import { CurationDetailResponse } from "@feature/curation/queries/dto/curation-detail";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import { sliceText } from "@common/utils/text/slice-text";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import revalidateCurationScrap from "@feature/curation/actions/revalidateCurationScrap";
import revalidateCurationDetail from "@feature/curation/actions/revalidateCurationDetail";
import useCurationMenuModal from "../CurationModal/CurationMenuModal/useCurationMenuModal";
import CurationMenuIcon from "../CurationMenuIcon/CurationMenuIcon";

interface CurationTopAppBarProps {
  curationId: number;
  curationDetail: CurationDetailResponse;
  text?: string;
  variant?: string;
  className?: string;
}

export default function CurationTopAppBar({
  curationId,
  curationDetail,
  text,
  variant,
  className,
}: CurationTopAppBarProps) {
  const { isMenuModalOpen, openMenuModal, handlers } = useCurationMenuModal();

  const [linkCopyToastOpen, setLinkCopyToastOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuIconClick = () => {
    openMenuModal();
  };

  const handleCopyLinkClick = async () => {
    copyLink(pathname);
    setLinkCopyToastOpen(true);
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
                <CurationMenuIcon
                  menuModalInfo={{
                    open: isMenuModalOpen,
                    curationId,
                    hasCopyLink: true,
                    handleModalFn: handlers.handleMenuModalOpen,
                  }}
                  showAt="topBar"
                  onClick={handleMenuIconClick}
                />
              </>
            )}
          </div>
        </div>
      </BasicTopBar>
    </>
  );
}
