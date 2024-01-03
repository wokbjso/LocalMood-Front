"use client";

import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import ScrapShadow from "@common/assets/icons/scrap/scrap-shadow.svg";
import ScrapLine from "@common/assets/icons/scrap/scrap-line.svg";
import { useState } from "react";
import { CurationProps } from "@feature/curation/type";

export default function CurationScrapped({
  id,
  curationPhoto,
  userImg,
  userName,
  mainText,
  hashTags,
  scrapped = false,
  onClick,
}: Omit<CurationProps, "variant">) {
  const [isScrapped, setIsScrapped] = useState<boolean>(scrapped);
  const handleScrap = () => {
    setIsScrapped((prev) => !prev);
  };
  return (
    <div className="w-full" onClick={onClick}>
      <div
        className="w-full h-[16.5rem] bg-cover relative opacity-75"
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
        <div className="w-full p-[1.6rem] relative">
          {isScrapped ? (
            <ScrapShadow
              className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
              onClick={handleScrap}
            />
          ) : (
            <ScrapLine
              className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
              onClick={handleScrap}
            />
          )}
          <div className="headline2 w-[68%] break-keep mb-[1.2rem] text-white">
            {mainText}
          </div>
          <div className="flex flex-wrap gap-[0.8rem]">
            {hashTags.map((tag) => (
              <div key={tag}>
                <span className="text-primary-normal body2-medium"># </span>
                <span className="text-gray-4 body2-medium">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
