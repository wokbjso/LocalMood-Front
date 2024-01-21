import EditIcon from "@common/assets/icons/edit/edit.svg";
import DeleteIcon from "@common/assets/icons/delete/delete.svg";
import ShareIcon from "@common/assets/icons/share/share.svg";
import Modal from "@common/components/ui/modal/Modal";
import { useState } from "react";
import CurationDeleteConfirmModal from "./CurationDeleteConfirmModal";

interface CurationMenuModalProps {
  id: number;
  hasCopyLink?: boolean;
  handleMenuModalState: (state: boolean) => void;
}

export default function CurationMenuModal({
  id,
  hasCopyLink = false,
  handleMenuModalState,
}: CurationMenuModalProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleCurationDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleLinkCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      handleMenuModalState(false);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {
        <Modal>
          <div className="pl-[2rem] pt-[1.8rem]">
            <div className="flex items-center mb-[2rem]">
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
              <div
                className="flex items-center"
                onClick={() =>
                  handleLinkCopyClick(`'도메인주소'/curation/detail/${id}`)
                }
              >
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
