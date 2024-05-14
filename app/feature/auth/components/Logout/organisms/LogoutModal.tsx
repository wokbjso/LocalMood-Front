import Modal from "@/common/components/ui/modal/Modal";
import UseOutsideClick from "@/common/hooks/useOutsideClick";
import ConfirmModal from "@/common/components/ui/modal/ConfirmModal";
import UserProfileIcon from "@/common/assets/icons/user/UserProfileIcon";
import { ModalContent } from "@/common/components/ui/modal/ModalContent";
import UseLogoutModal from "@/feature/auth/hooks/Logout/useLogoutModal";

//Organism
export default function LogoutModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const { ref } = UseOutsideClick<HTMLDivElement>(true, closeModal);
  const {
    isOpen: isConfirmModalOpen,
    openModal: openConfirmModal,
    closeModal: closeConfirmModal,
  } = UseLogoutModal();

  const handleLogoutClick = () => {
    openConfirmModal();
  };

  const handleCancleClick = () => {
    closeConfirmModal();
  };

  const logout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.status;
  };

  const handleConfirmClick = async () => {
    if ((await logout()) === 200) {
      alert("로그아웃 되었습니다");
      location.replace("/");
    }
  };
  return (
    <>
      {isOpen && (
        <Modal ref={ref}>
          <ModalContent>
            <ModalContent.IconBox
              icon={<UserProfileIcon />}
              text="로그아웃"
              onClick={handleLogoutClick}
            />
          </ModalContent>
        </Modal>
      )}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        text="로그아웃 하시겠습니까?"
        cancleText="취소하기"
        confirmText="로그아웃"
        cancelFn={handleCancleClick}
        confirmFn={handleConfirmClick}
      />
    </>
  );
}
