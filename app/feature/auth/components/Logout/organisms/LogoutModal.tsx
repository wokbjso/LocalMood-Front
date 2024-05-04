import Modal from "@common/components/ui/modal/Modal";
import UseOutsideClick from "@common/hooks/useOutsideClick";
import { useState } from "react";
import ConfirmModal from "@common/components/ui/modal/ConfirmModal";
import UserProfileIcon from "@common/assets/icons/user/UserProfileIcon";

//Organism
export default function LogoutModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { ref } = UseOutsideClick<HTMLDivElement>(true, closeModal);
  const [logoutConfirmModalOpen, setLogoutConfirmModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setLogoutConfirmModalOpen(true);
  };

  const handleCancleClick = () => {
    setLogoutConfirmModalOpen(false);
  };

  const handleConfirmClick = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      alert("로그아웃 되었습니다");
      location.replace("/");
    }
  };
  return (
    <>
      <Modal ref={ref}>
        <div
          className="flex items-center pl-[2rem] mt-[1.8rem]"
          onClick={handleLogoutClick}
        >
          <UserProfileIcon />
          <span className="body1 text-black ml-[1.2rem]">로그아웃</span>
        </div>
      </Modal>
      {logoutConfirmModalOpen && (
        <ConfirmModal
          text="로그아웃 하시겠습니까?"
          cancleText="취소하기"
          confirmText="로그아웃"
          cancelFn={handleCancleClick}
          confirmFn={handleConfirmClick}
        />
      )}
    </>
  );
}
