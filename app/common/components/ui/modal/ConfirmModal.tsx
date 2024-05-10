import CloseIcon from "@/common/assets/icons/close/CloseIcon";
import Modal from "./Modal";
import Button from "../buttons/Button/Button";

interface ConfirmModalProps {
  text: string;
  cancleText: string;
  confirmText: string;
  cancelFn: () => void;
  confirmFn: () => void;
}

export default function ConfirmModal({
  text,
  cancleText,
  confirmText,
  cancelFn,
  confirmFn,
}: ConfirmModalProps) {
  const handleCancleClick = () => {
    cancelFn();
  };

  const handleConfirmClick = () => {
    confirmFn();
  };
  return (
    <Modal className="px-[2rem]">
      <CloseIcon
        className="absolute right-[2.4rem] top-[4rem]"
        onClick={handleCancleClick}
      />
      <p className="text-black headline1 mt-[4.4rem]">{text}</p>
      <div className="flex mt-[4rem] gap-[1rem]">
        <Button
          className="bg-text-gray-4 text-background-gray-1"
          onClick={handleCancleClick}
        >
          {cancleText}
        </Button>
        <Button onClick={handleConfirmClick}>{confirmText}</Button>
      </div>
    </Modal>
  );
}
