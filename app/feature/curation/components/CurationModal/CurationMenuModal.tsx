import EditIcon from "@common/assets/icons/edit/edit.svg";
import DeleteIcon from "@common/assets/icons/delete/delete.svg";
import ShareIcon from "@common/assets/icons/share/share.svg";
import Modal from "@common/components/ui/modal/Modal";
import { useState } from "react";
import CloseIcon from "@common/assets/icons/close/CloseIcon";
import Button from "@common/components/ui/buttons/Button/Button";

interface CurationMenuModalProps {
  hasCopyLink?: boolean;
  handleMenuModalState: (state: boolean) => void;
}

export default function CurationMenuModal({
  hasCopyLink = false,
  handleMenuModalState,
}: CurationMenuModalProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleCurationDeleteClick = () => {
    setDeleteModalOpen(true);
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
              <div className="flex items-center">
                <ShareIcon />
                <span className="body1 text-black ml-[1.2rem]">링크복사</span>
              </div>
            )}
          </div>
        </Modal>
      }
      {deleteModalOpen && (
        <Modal className="px-[2rem]">
          <CloseIcon className="absolute right-[2.4rem] top-[4rem]" />
          <p className="text-black headline1 mt-[4.4rem]">
            정말 삭제하시겠습니까?
          </p>
          <div className="flex mt-[4rem] gap-[1rem]">
            <Button
              className="bg-text-gray-4 text-background-gray-1"
              onClick={() => handleMenuModalState(false)}
            >
              취소하기
            </Button>
            <Button>삭제하기</Button>
          </div>
        </Modal>
      )}
    </>
  );
}
