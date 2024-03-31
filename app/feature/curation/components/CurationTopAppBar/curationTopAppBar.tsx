"use client";

import { usePathname } from "next/navigation";
import { copyLink } from "@common/utils/text/copy-link";
import { CurationDetailResponse } from "@feature/curation/queries/dto/curation-detail";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import { sliceText } from "@common/utils/text/slice-text";
import revalidateCurationScrap from "@feature/curation/actions/revalidateCurationScrap";
import revalidateCurationDetail from "@feature/curation/actions/revalidateCurationDetail";
import useCurationMenuModal from "../CurationModal/CurationMenuModal/useCurationMenuModal";
import CurationMenuIcon from "../CurationMenuIcon/CurationMenuIcon";
import useToast from "@common/hooks/useToast";
import CopyLinkIcon from "@common/components/ui/copy/CopyIcon";
import CurationScrapIcon from "../CurationScrapIcon/CurationScrapIcon";

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

  const { isToastOpen, toastText, openToast } = useToast();

  const pathname = usePathname();

  const handleMenuIconClick = () => {
    openMenuModal();
  };

  const handleCopyLinkClick = async () => {
    copyLink(pathname);
    openToast("링크가 복사되었습니다");
  };

  const deleteScrap = async () => {
    const res = await fetch(`/api/curation/scrap/delete/${curationDetail.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.status;
  };

  const addScrap = async () => {
    const res = await fetch(`/api/curation/scrap/add/${curationDetail.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.status;
  };

  const revalidateRelatedData = () => {
    revalidateCurationScrap();
    revalidateCurationDetail();
  };

  const handleScrapDelete = async () => {
    if ((await deleteScrap()) === 200) {
      openToast("큐레이션 스크랩이 해제되었습니다");
      revalidateRelatedData();
    } else {
      alert("에러가 발생했습니다.");
    }
  };

  const handleScrapAdd = async () => {
    if ((await addScrap()) === 200) {
      openToast("큐레이션이 스크랩 되었습니다");
      revalidateRelatedData();
    } else {
      alert("에러가 발생했습니다.");
    }
  };

  return (
    <>
      <BasicTopBar color="#9E9E9E" className={className}>
        <div className="w-[100%] flex items-center justify-between gap-[0.8rem]">
          <h1 className="headline3-semibold">{text && sliceText(text, 16)}</h1>
          <div className="flex items-center gap-[0.6rem]">
            {variant === "others" ? (
              <>
                {curationDetail.isScraped ? (
                  <CurationScrapIcon
                    isScraped={curationDetail.isScraped}
                    backgroundBrightness="light"
                    toastInfo={{
                      open: isToastOpen,
                      text: toastText,
                    }}
                    onClick={handleScrapDelete}
                  />
                ) : (
                  <CurationScrapIcon
                    isScraped={curationDetail.isScraped}
                    backgroundBrightness="light"
                    toastInfo={{
                      open: isToastOpen,
                      text: toastText,
                    }}
                    onClick={handleScrapAdd}
                  />
                )}
                <CopyLinkIcon
                  toastInfo={{
                    open: isToastOpen,
                    text: toastText,
                  }}
                  onClick={handleCopyLinkClick}
                />
              </>
            ) : (
              <>
                <CopyLinkIcon
                  toastInfo={{
                    open: isToastOpen,
                    text: toastText,
                  }}
                  onClick={handleCopyLinkClick}
                />
                <CurationMenuIcon
                  menuModalInfo={{
                    open: isMenuModalOpen,
                    curationId,
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
