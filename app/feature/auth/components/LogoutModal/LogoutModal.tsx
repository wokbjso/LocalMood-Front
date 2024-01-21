"use client";

import Modal from "@common/components/ui/modal/Modal";
import UserIcon from "@common/assets/icons/user/UserProfile";
import Link from "next/link";

export default function LogoutModal() {
  return (
    <Modal className="pb-[4rem]">
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
