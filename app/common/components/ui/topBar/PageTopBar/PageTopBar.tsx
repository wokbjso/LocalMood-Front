"use client";

import MenuIcon from "@/common/assets/icons/menu/MenuIcon";
import LogoutModal from "@/feature/auth/components/Logout/organisms/LogoutModal";
import UseLogoutModal from "@/feature/auth/hooks/Logout/useLogoutModal";
import { twMerge } from "tailwind-merge";

interface PageTopBarProps {
  text: string;
  hasMenu?: boolean;
  className?: string;
  textClassName?: string;
}

//Molecule
export default function PageTopBar({
  text,
  hasMenu = false,
  className,
  textClassName,
}: PageTopBarProps) {
  const { isOpen, openModal, closeModal } = UseLogoutModal();

  const handleMenuIconClick = () => {
    openModal();
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
      <LogoutModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
