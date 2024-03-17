"use client";

import MenuIcon from "@common/assets/icons/menu/MenuIcon";
import LogoutModal from "@feature/auth/components/LogoutModal/LogoutModal";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface PageTopBarProps {
  text: string;
  hasMenu?: boolean;
  className?: string;
  textClassName?: string;
}

export default function PageTopBar({
  text,
  hasMenu = false,
  className,
  textClassName,
}: PageTopBarProps) {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const handleMenuIconClick = () => {
    setLogoutModalOpen(true);
  };
  return (
    <div
      className={twMerge(
        "flex justify-between items-center mb-[1.2rem] pt-[3.8rem]",
        className
      )}
    >
      <span className={twMerge("text-black headline1", textClassName)}>
        {text}
      </span>
      {hasMenu && <MenuIcon onClick={handleMenuIconClick} />}
      {logoutModalOpen && <LogoutModal handleFn={setLogoutModalOpen} />}
    </div>
  );
}
