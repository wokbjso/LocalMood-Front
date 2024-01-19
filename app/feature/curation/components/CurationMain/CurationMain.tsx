"use client";

import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import { useState } from "react";
import { CurationProps } from "@feature/curation/type";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { twMerge } from "tailwind-merge";
import CurationMenu from "./CurationMenu";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import Link from "next/link";
import MenuIcon from "@common/assets/icons/menu/MenuIcon";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import LocationLine from "@common/assets/icons/location/LocationLine";

export default function CurationMain({
  id,
  variant = "others",
  curationPhoto,
  userImg,
  userName,
  mainText,
  hashTags,
  scrapped = false,
  onClick,
  className,
  places,
}: CurationProps) {
  const [isScrapped, setIsScrapped] = useState<boolean>(scrapped);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleScrap = () => {
    setIsScrapped((prev) => !prev);
    //api 문서에 맞게 해당 큐레이션 scrap 상태 바꾸는 api 호출
  };
  const handleCurationMenuClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsMenuOpened(true);
  };
  const handleCloseMenuModal = () => {
    setIsMenuOpened(false);
  };

  return (
    <>
      <Link
        href={{
          pathname: `/curation/detail/${userName}/${id}`,
        }}
      >
        <div>
          <div
            className={twMerge(
              "w-full h-[27.7rem] bg-white rounded-[8px]",
              className
            )}
          >
            <div>
              <div
                className="w-full h-[16.5rem] bg-cover relative rounded-t-[8px]"
                style={{
                  backgroundImage: `url(
            ${curationPhoto && curationPhoto[0]}
          )`,
                }}
              >
                {variant === "others" && (
                  <UserProfile
                    size="small"
                    userImg={userImg}
                    userName={userName}
                    className="absolute bottom-[1.6rem] left-[1.6rem]"
                  />
                )}
                <Chip className="body3-semibold rounded-[4px] bg-[#212121CC] flex items-center pr-[0.4rem] pl-[0.2rem] h-[2rem] absolute right-[1.6rem] bottom-[1.6rem]">
                  <LocationLine />
                  <span className="body3-semibold text-white ml-[0.2rem]">
                    {places}
                  </span>
                </Chip>
              </div>
              <div className="w-full p-[1.6rem] relative">
                {variant === "others" ? (
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
                  <MenuIcon
                    className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
                    onClick={handleCurationMenuClick}
                  />
                )}
                <div className="max-w-[24.4rem] headline2 w-[70%] break-keep mb-[1.2rem] text-black">
                  {mainText}
                </div>
                <div className="flex flex-wrap gap-[0.8rem]">
                  {hashTags.map((tag) => (
                    <div key={tag}>
                      <span className="text-primary-normal body2-medium">
                        #{" "}
                      </span>
                      <span className="text-text-gray-6 body2-medium">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {isMenuOpened && (
        <>
          <div className="h-[100vh] w-full bg-black absolute bottom-0 left-0 z-10 opacity-[0.4]" />
          <div className="fixed overflow-y-hidden top-[62.1rem] bottom-0 left-0 z-10 right-0">
            <CurationMenu />
          </div>
        </>
      )}
    </>
  );
}
