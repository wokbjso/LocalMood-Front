import EditIcon from "@common/assets/icons/edit/edit.svg";
import Modal from "@common/components/ui/modal/Modal";
import { useState } from "react";
import UseOutsideClick from "@common/hooks/useOutsideClick";
import { copyLink } from "@common/utils/text/copy-link";
import ConfirmModal from "@common/components/ui/modal/ConfirmModal";
import revalidateMyCuration from "@feature/curation/actions/revalidateMyCuration";
import DeleteIcon from "@common/assets/icons/delete/DeleteIcon";
import revalidateScrapSpace from "@feature/place/actions/revalidateScrapSpace";
import revalidatePlaceDetail from "@feature/place/actions/revalidatePlaceDetail";
import { usePathname } from "next/navigation";
import ShareIcon from "@common/assets/icons/share/ShareIcon";
import { useSetRecoilState } from "recoil";
import { toastInfo } from "@common/state/toast";

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
  const setToast = useSetRecoilState(toastInfo);
  const { ref } = UseOutsideClick<HTMLDivElement>(open, handleModalFn);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const pathname = usePathname();
  const handleCurationEditClick = () => {
    alert("서비스 준비중입니다");
    //편집하기 로직
  };

  const handleCurationDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleLinkCopyClick = async () => {
    copyLink(pathname + `/${curationId}`);
    setToast({
      open: true,
      text: "링크가 복사되었어요",
    });
    handleModalFn(false);
  };

  const handleCancleClick = () => {
    setDeleteModalOpen(false);
  };

  const deleteCuration = async () => {
    const res = await fetch("/api/curation/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(curationId),
    });

    return res.status;
  };

  const revalidateRelatedData = () => {
    revalidateMyCuration();
    revalidateScrapSpace();
    revalidatePlaceDetail();
  };

  const handleConfirmClick = async () => {
    setToast({
      open: true,
      text: "큐레이션이 삭제되었습니다",
    });
    if (triggeredAt === "topBar") {
      location.replace("/curation");
    }
    if ((await deleteCuration()) === 200) {
      revalidateRelatedData();
    } else {
      alert("큐레이션 삭제 중 에러가 발생했습니다");
    }
  };

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
    </>
  );
}
