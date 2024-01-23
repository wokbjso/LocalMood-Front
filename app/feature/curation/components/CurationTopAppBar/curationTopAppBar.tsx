"use client";

import BackIcon from "@common/assets/icons/arrow/arrow-left.svg";
import ShareIcon from "@common/assets/icons/share/share.svg";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { usePathname, useRouter } from "next/navigation";
import MenuIcon from "@common/assets/icons/menu/MenuIcon";
import useGetScrollHeight from "@common/hooks/useGetScrollHeight";
import { useState } from "react";
import CurationMenuModal from "../CurationModal/CurationMenuModal";
import { copyLink } from "@common/utils/copyLink";

interface CurationTopAppBarProps {
  id: number;
  variant?: string;
  mainText?: string;
}

export default function CurationTopAppBar({
  id,
  variant,
  mainText,
}: CurationTopAppBarProps) {
  const router = useRouter();

  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuClick = () => {
    setMenuModalOpen(true);
  };

  const handleLinkClick = async () => {
    copyLink("현재 pathname", setMenuModalOpen);
  };

  const handleBackClick = () => {
    router.back(); // 이전 페이지로 이동
  };
  const { scrollHeight } = useGetScrollHeight();

  return (
    <>
      <div>
        <div
          className={`w-full ${
            scrollHeight > 370 ? "fixed top-0 bg-white z-10" : ""
          }`}
        >
          <div
            className={`h-[5.4rem] px-[2rem] py-[1.8rem] ${
              scrollHeight > 370 ? "" : "pt-[5.3rem]"
            }`}
          >
            {scrollHeight > 370 ? (
              // 스크롤 시
              <div className="flex flex- start items-center justify-between">
                <div className="flex items-center" onClick={handleBackClick}>
                  <BackIcon />
                  <div className="w-[23.5rem] overflow-hidden whitespace-nowrap overflow-ellipsis text-black headline3-semibold">
                    {mainText}
                  </div>
                </div>
                <div className="flex gap-[0.8rem]">
                  {variant === "others" ? (
                    <>
                      <ScrapLine />
                      <ShareIcon onClick={handleLinkClick} />
                    </>
                  ) : (
                    <>
                      <ShareIcon onClick={handleLinkClick} />
                      <MenuIcon onClick={handleMenuClick} />
                    </>
                  )}
                </div>
              </div>
            ) : (
              // 스크롤 안 할 시
              <div>
                <div className="flex items-center justify-between">
                  <div className="pr-[25.5rem]" onClick={handleBackClick}>
                    <BackIcon />
                  </div>
                  <div className="flex gap-[0.8rem]">
                    {variant === "others" ? (
                      <>
                        <ScrapLine />
                        <ShareIcon onClick={handleLinkClick} />
                      </>
                    ) : (
                      <>
                        <ShareIcon onClick={handleLinkClick} />
                        <MenuIcon onClick={handleMenuClick} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {menuModalOpen && (
        <div className="fixed top-0 left-0 h-[100vh] w-full z-50">
          <CurationMenuModal id={id} handleMenuModalState={setMenuModalOpen} />
        </div>
      )}
    </>
  );
}
