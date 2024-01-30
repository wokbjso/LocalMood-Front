import EditIcon from "@common/assets/icons/edit/edit.svg";
import DeleteIcon from "@common/assets/icons/delete/delete.svg";
import ShareIcon from "@common/assets/icons/share/share.svg";
import Modal from "@common/components/ui/modal/Modal";
import { useState } from "react";
import CurationDeleteConfirmModal from "./CurationDeleteConfirmModal";
import UseOutsideClick from "@common/hooks/useOutsideClick";
import { copyLink } from "@common/utils/copyLink";

interface CurationMenuModalProps {
  id: string;
  hasCopyLink?: boolean;
  handleMenuModalState: (state: boolean) => void;
}

export default function CurationMenuModal({
  id,
  hasCopyLink = false,
  handleMenuModalState,
}: CurationMenuModalProps) {
  const { ref } = UseOutsideClick<HTMLDivElement>(handleMenuModalState);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleCurationEditClick = () => {
    //편집하기 로직
  };

  const handleCurationDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleLinkCopyClick = async () => {
    copyLink("큐레이션 주소", setDeleteModalOpen);
  };

  return (
    <>
      {
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
      }
      {deleteModalOpen && (
        <CurationDeleteConfirmModal
          id={id}
          handleMenuModalState={handleMenuModalState}
          handleDeleteModalState={setDeleteModalOpen}
        />
      )}
    </>
  );
}
