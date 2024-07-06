"use client";

import MenuIcon from "@/common/assets/icons/menu/MenuIcon";
import { twMerge } from "tailwind-merge";
import Title from "../text/Title";
import { useSetRecoilState } from "recoil";
import { isModalOpenSelector } from "@/common/state/modal-open";

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
  const setIsLogoutModalOpened = useSetRecoilState(
    isModalOpenSelector("logout")
  );

  const handleMenuIconClick = () => {
    setIsLogoutModalOpened(true);
  };

  return (
    <div
      className={twMerge(
        "flex justify-between items-center mb-[1.2rem] pt-[3.8rem]",
        className
      )}
    >
      <Title className={twMerge("headline1", textClassName)}>{text}</Title>
      {hasMenu && <MenuIcon onClick={handleMenuIconClick} />}
    </div>
  );
}
