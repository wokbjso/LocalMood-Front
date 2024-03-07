import Modal from "@common/components/ui/modal/Modal";
import UserIcon from "@common/assets/icons/user/UserProfile";
import Link from "next/link";
import UseOutsideClick from "@common/hooks/useOutsideClick";
import { signOut } from "next-auth/react";

export default function LogoutModal({
  handleFn,
}: {
  handleFn: (state: boolean) => void;
}) {
  const { ref } = UseOutsideClick<HTMLDivElement>(handleFn);
  return (
    <Modal ref={ref}>
      <Link
        href={{
          pathname: "/",
        }}
      >
        <div className="flex items-center pl-[2rem] mt-[1.8rem]">
          <UserIcon />
          <span className="body1 text-black ml-[1.2rem]">로그아웃</span>
        </div>
      </Link>
    </Modal>
  );
}
