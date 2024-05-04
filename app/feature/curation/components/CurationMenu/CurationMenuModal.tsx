import Modal from "@common/components/ui/modal/Modal";
import { useState } from "react";
import UseOutsideClick from "@common/hooks/useOutsideClick";
import { copyLink } from "@common/utils/text/copy-link";
import ConfirmModal from "@common/components/ui/modal/ConfirmModal";
import DeleteIcon from "@common/assets/icons/delete/DeleteIcon";
import { usePathname } from "next/navigation";
import ShareIcon from "@common/assets/icons/share/ShareIcon";
import { useSetRecoilState } from "recoil";
import { toastInfo } from "@common/state/toast";
import CurationMakeModal from "../CurationMake/organisms/CurationMakeModal";
import useDeleteCuration from "@feature/curation/queries/useDeleteCuration";
import { queryFetchingSelector } from "@common/state/queryFetching";
import EditIcon from "@common/assets/icons/edit/EditIcon";

interface CurationMenuModalProps {
  open: boolean;
  triggeredAt: "card" | "topBar";
  curationInfo: {
    id: number;
    privacy?: boolean;
    keyword: string[];
    title: string;
  };
  hasCopyLink?: boolean;
  closeModal: () => void;
}

export default function CurationMenuModal({
  open,
  triggeredAt,
  curationInfo,
  hasCopyLink = false,
  closeModal,
}: CurationMenuModalProps) {
  const { mutate: deleteCuration } = useDeleteCuration({ triggeredAt });

  const setToast = useSetRecoilState(toastInfo);
  const setIsQueryLoading = useSetRecoilState(queryFetchingSelector);

  const { ref } = UseOutsideClick<HTMLDivElement>(open, closeModal);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editCurationOpen, setEditCurationOpen] = useState(false);
  const pathname = usePathname();
  const handleCurationEditClick = () => {
    setEditCurationOpen(true);
  };

  const handleCurationDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleLinkCopyClick = async () => {
    copyLink(pathname + `/${curationInfo.id}`);
    setToast({
      open: true,
      text: "링크가 복사되었어요",
    });
    closeModal();
  };

  const handleCancleClick = () => {
    setDeleteModalOpen(false);
  };

  const handleCloseEditCuration = () => {
    setEditCurationOpen(false);
  };

  const handleConfirmClick = async () => {
    closeModal();
    setIsQueryLoading(true);
    deleteCuration({ curationId: curationInfo.id });
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
      <CurationMakeModal
        open={editCurationOpen}
        closeModal={handleCloseEditCuration}
        curationInfo={curationInfo}
        editMode
      />
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
