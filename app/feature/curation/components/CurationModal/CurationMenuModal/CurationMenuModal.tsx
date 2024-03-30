import EditIcon from "@common/assets/icons/edit/edit.svg";
import ShareIcon from "@common/assets/icons/share/share.svg";
import Modal from "@common/components/ui/modal/Modal";
import { useEffect, useState } from "react";
import UseOutsideClick from "@common/hooks/useOutsideClick";
import { copyLink } from "@common/utils/text/copy-link";
import ConfirmModal from "@common/components/ui/modal/ConfirmModal";
import revalidateMyCuration from "@feature/curation/actions/revalidateMyCuration";
import DeleteIcon from "@common/assets/icons/delete/DeleteIcon";
import revalidateScrapSpace from "@feature/place/actions/revalidateScrapSpace";
import revalidatePlaceDetail from "@feature/place/actions/revalidatePlaceDetail";
import { usePathname } from "next/navigation";
import Toast from "@common/components/ui/toast/Toast";

interface CurationMenuModalProps {
  open: boolean;
  triggeredAt: "card" | "topBar";
  curationId: number;
  hasCopyLink?: boolean;
  handleModalFn: (state: boolean) => void;
}

export default function CurationMenuModal({
  open,
  triggeredAt,
  curationId,
  hasCopyLink = false,
  handleModalFn,
}: CurationMenuModalProps) {
  const { ref } = UseOutsideClick<HTMLDivElement>(open, handleModalFn);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [linkCopyToastOpen, setLinkCopyToastOpen] = useState(false);
  const [toastText, setToastText] = useState("");
  const pathname = usePathname();
  const handleCurationEditClick = () => {
    //편집하기 로직
  };

  const handleCurationDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleLinkCopyClick = async () => {
    copyLink(pathname + `/${curationId}`);
    setLinkCopyToastOpen(true);
    setToastText("링크가 복사되었어요");
  };

  const handleCancleClick = () => {
    setDeleteModalOpen(false);
  };

  const handleConfirmClick = async () => {
    const res = await fetch("/api/curation/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(curationId),
    });
    if (res.status === 200) {
      if (triggeredAt === "topBar") {
        location.replace("/curation");
      }
      revalidateMyCuration();
      revalidateScrapSpace();
      revalidatePlaceDetail();
    } else {
      alert("에러가 발생했습니다");
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
      {open && (
        <Modal ref={ref}>
          <div className="pl-[2rem] pt-[1.8rem]">
            <div
              className="flex items-center mb-[2rem]"
              onClick={handleCurationEditClick}
            >
              <EditIcon />
              <span className="body1 text-black ml-[1.2rem]">편집하기</span>
            </div>
            <div
              className="flex items-center mb-[2rem]"
              onClick={handleCurationDeleteClick}
            >
              <DeleteIcon />
              <span className="body1 text-black ml-[1.2rem]">삭제하기</span>
            </div>
            {hasCopyLink && (
              <div className="flex items-center" onClick={handleLinkCopyClick}>
                <ShareIcon />
                <span className="body1 text-black ml-[1.2rem]">링크복사</span>
              </div>
            )}
          </div>
        </Modal>
      )}
      {deleteModalOpen && (
        <ConfirmModal
          text="정말 삭제하시겠습니까?"
          cancleText="취소하기"
          confirmText="삭제하기"
          cancelFn={handleCancleClick}
          confirmFn={handleConfirmClick}
        />
      )}
      <Toast open={linkCopyToastOpen} text={toastText} />
    </>
  );
}
