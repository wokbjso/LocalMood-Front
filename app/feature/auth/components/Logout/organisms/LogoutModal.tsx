import Modal from "@/common/components/ui/modal/Modal";
import UseOutsideClick from "@/common/hooks/useOutsideClick";
import UserProfileIcon from "@/common/assets/icons/user/UserProfileIcon";
import { ModalContent } from "@/common/components/ui/modal/ModalContent";
import { useSetRecoilState } from "recoil";
import { isModalOpenSelector } from "@/common/state/modal-open";

//Organism
export default function LogoutModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const setIsLogoutConfirmModalOpened = useSetRecoilState(
    isModalOpenSelector("confirm")
  );

  const { ref } = UseOutsideClick<HTMLDivElement>(true, closeModal);

  const handleLogoutClick = () => {
    setIsLogoutConfirmModalOpened(true);
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
    </>
  );
}
