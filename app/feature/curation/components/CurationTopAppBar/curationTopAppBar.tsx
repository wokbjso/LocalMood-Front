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
import CurationScrapIcon from "../CurationScrapIcon/CurationScrapIcon";
import useCurationScrapIcon from "../CurationScrapIcon/useCurationScrapIcon";
import useFetching from "@common/hooks/useFetching";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@common/atom/toast";
import ShareIcon from "@common/assets/icons/share/ShareIcon";

interface CurationTopAppBarProps {
  inView: boolean;
  curationId: number;
  curationDetail: CurationDetailResponse;
  text?: string;
  variant?: string;
  className?: string;
}

export default function CurationTopAppBar({
  inView,
  curationId,
  curationDetail,
  text,
  variant,
  className,
}: CurationTopAppBarProps) {
  const setToast = useSetRecoilState(toastInfoSelector);

  const { scraped, toggleScrap } = useCurationScrapIcon(
    curationDetail.isScraped
  );
  const { isFetching, changeFetching } = useFetching();
  const { isMenuModalOpen, openMenuModal, handlers } = useCurationMenuModal();

  const pathname = usePathname();

  const handleMenuIconClick = () => {
    openMenuModal();
  };

  const handleCopyLinkClick = async () => {
    copyLink(pathname);
    setToast({
      open: true,
      text: "링크가 복사되었습니다",
    });
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

  const handleScrapDeleteClick = async () => {
    if (isFetching) {
      alert("이전 요청을 처리중입니다");
      return;
    }
    changeFetching(true);
    toggleScrap();
    setToast({
      open: true,
      text: "큐레이션 스크랩이 해제되었습니다",
    });
    if ((await deleteScrap()) === 200) {
      changeFetching(false);
      revalidateRelatedData();
    } else {
      toggleScrap();
      alert("에러가 발생했습니다.");
    }
  };

  const handleScrapAddClick = async () => {
    if (isFetching) {
      alert("이전 요청을 처리중입니다");
      return;
    }
    changeFetching(true);
    toggleScrap();
    setToast({
      open: true,
      text: "큐레이션이 스크랩 되었습니다",
    });
    if ((await addScrap()) === 200) {
      changeFetching(false);
      revalidateRelatedData();
    } else {
      toggleScrap();
      alert("에러가 발생했습니다.");
    }
  };

  return (
    <>
      <BasicTopBar
        color="#9E9E9E"
        className={!inView ? "bg-white fixed top-0 z-10" : ""}
      >
        <div className="w-[100%] flex items-center justify-between gap-[0.8rem]">
          <h1 className="headline3-semibold">
            {!inView && text && sliceText(text, 16)}
          </h1>
          <div className="flex items-center gap-[0.6rem]">
            {variant === "others" ? (
              <>
                {scraped ? (
                  <CurationScrapIcon
                    isScraped={scraped}
                    backgroundBrightness="light"
                    onClick={handleScrapDeleteClick}
                  />
                ) : (
                  <CurationScrapIcon
                    isScraped={scraped}
                    backgroundBrightness="light"
                    onClick={handleScrapAddClick}
                  />
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
