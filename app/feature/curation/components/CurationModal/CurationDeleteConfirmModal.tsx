import CloseIcon from "@common/assets/icons/close/CloseIcon";
import Button from "@common/components/ui/buttons/Button/Button";
import Modal from "@common/components/ui/modal/Modal";
import DeleteCuration from "@feature/curation/queries/deleteCuration";
import revalidateMyCuration from "@feature/curation/utils/revalidateMyCuration";

interface CurationDeleteConfirmModalProps {
  id: number;
  handleMenuModalState: (state: boolean) => void;
  handleDeleteModalState: (state: boolean) => void;
}

export default function CurationDeleteConfirmModal({
  id,
  handleMenuModalState,
  handleDeleteModalState,
}: CurationDeleteConfirmModalProps) {
  const handleAbortClick = () => {
    handleMenuModalState(false);
  };

  const handleCloseClick = () => {
    handleDeleteModalState(false);
  };

  const handleDeleteConfirmClick = async () => {
    const res = await DeleteCuration(id);
    if (res.status === 200) {
      revalidateMyCuration();
      location.replace("/curation");
    } else {
      alert("에러");
    }
  };

  return (
    <Modal className="px-[2rem]">
      <CloseIcon
        className="absolute right-[2.4rem] top-[4rem]"
        onClick={handleCloseClick}
      />
      <p className="text-black headline1 mt-[4.4rem]">정말 삭제하시겠습니까?</p>
      <div className="flex mt-[4rem] gap-[1rem]">
        <Button
          className="bg-text-gray-4 text-background-gray-1"
          onClick={handleAbortClick}
        >
          취소하기
        </Button>
        <Button onClick={handleDeleteConfirmClick}>삭제하기</Button>
      </div>
    </Modal>
  );
}