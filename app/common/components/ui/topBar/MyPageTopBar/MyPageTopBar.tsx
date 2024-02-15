"use client";

import MenuIcon from "@common/assets/icons/menu/MenuIcon";
import LogoutModal from "@feature/auth/components/LogoutModal/LogoutModal";
import { useState } from "react";

export default function MyPageTopBar({ text }: { text: string }) {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  return (
    <div className="flex justify-between items-center mb-[1.2rem] pt-[3.8rem]">
      {logoutModalOpen && <LogoutModal handleFn={setLogoutModalOpen} />}
      <span className="text-black headline1">{text}</span>
      <MenuIcon onClick={() => setLogoutModalOpen(true)} />
    </div>
  );
}
