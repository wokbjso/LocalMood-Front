"use client";

import {
  isModalOpen,
  isModalOpenSelector,
} from "@/common/state/handleModalOpen";
import LogoutModal from "@/feature/auth/components/Logout/organisms/LogoutModal";
import { useRecoilState } from "recoil";
import ConfirmModal from "../../ui/modal/ConfirmModal";

export default function LogoutModalProvider() {
  const [isLogoutModalOpened, setIsLogoutModalOpened] = useRecoilState(
    isModalOpenSelector("logout")
  );

  const [isLogoutConfirmModalOpened, setIsLogoutConfirmModalOpened] =
    useRecoilState(isModalOpen("confirm"));

  const handleLogoutModalClose = () => {
    setIsLogoutModalOpened(false);
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

  const handleCancleClick = () => {
    setIsLogoutModalOpened(false);
    setIsLogoutConfirmModalOpened(false);
  };

  const handleConfirmClick = async () => {
    if ((await logout()) === 200) {
      alert("로그아웃 되었습니다");
      location.replace("/");
    }
  };

  return (
    <>
      <LogoutModal
        isOpen={isLogoutModalOpened}
        closeModal={handleLogoutModalClose}
      />
      <ConfirmModal
        isOpen={isLogoutConfirmModalOpened}
        text="로그아웃 하시겠습니까?"
        cancleText="취소하기"
        confirmText="로그아웃"
        cancelFn={handleCancleClick}
        confirmFn={handleConfirmClick}
      />
    </>
  );
}
