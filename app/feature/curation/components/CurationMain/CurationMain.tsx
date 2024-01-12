"use client";

import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import ScrapFill from "@common/assets/icons/scrap/scrap-fill.svg";
import Menu from "@common/assets/icons/menu/menu.svg";
import { useState } from "react";
import { CurationProps } from "@feature/curation/type";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { twMerge } from "tailwind-merge";

export default function CurationMain({
  id,
  curationPhoto,
  variant,
  userImg,
  userName,
  mainText,
  hashTags,
  scrapped = false,
  onClick,
  className,
}: CurationProps) {
  const [isScrapped, setIsScrapped] = useState<boolean>(scrapped);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleScrap = () => {
    setIsScrapped((prev) => !prev);
  };
  const handleMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };
  return (
    <div
      className={twMerge(
        "w-full h-[27.7rem] bg-white rounded-[8px]",
        className
      )}
      onClick={onClick}
    >
      <div
        className="w-full h-[16.5rem] bg-cover relative rounded-t-[8px]"
        style={{
          backgroundImage: `url(
            ${curationPhoto && curationPhoto[0]}
          )`,
        }}
      >
        <UserProfile
          size="small"
          userImg={userImg}
          userName={userName}
          className="absolute bottom-[1.6rem] left-[1.6rem]"
        />
      </div>
      <div className="w-full p-[1.6rem] relative">
        {variant === "home" ? (
          isScrapped ? (
            <ScrapFill
              className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
              onClick={handleScrap}
            />
          ) : (
            <ScrapLine
              className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
              onClick={handleScrap}
            />
          )
        ) : (
          <Menu
            className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
            onClick={handleMenu}
          />
        )}
        <div className="max-w-[24.4rem] headline2 w-[70%] break-keep mb-[1.2rem] text-black">
          {mainText}
        </div>
        <div className="flex flex-wrap gap-[0.8rem]">
          {hashTags.map((tag) => (
            <div key={tag}>
              <span className="text-primary-normal body2-medium"># </span>
              <span className="text-text-gray-6 body2-medium">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
