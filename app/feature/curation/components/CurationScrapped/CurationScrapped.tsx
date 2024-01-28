"use client";

import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import ScrapShadow from "@common/assets/icons/scrap/scrap-shadow.svg";
import { useState } from "react";
import { CurationProps } from "@feature/curation/type";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function CurationScrapped({
  id,
  image,
  author,
  title,
  keyword,
  scrapped = true,
  className,
}: Omit<CurationProps, "places">) {
  const [isScrapped, setIsScrapped] = useState(scrapped);
  const handleScrap = () => {
    setIsScrapped((prev) => !prev);
    //id 이용해서 scrap 해제 모달 창 띄우기 && delete api 호출
  };

  return (
    <div>
      <div className={twMerge("w-full", className)}>
        <div
          className="w-full h-[16.5rem] bg-cover relative rounded-[8px]"
          style={{
            backgroundImage: `url(
            ${image && image[0]}
          )`,
          }}
        >
          <UserProfile
            size="small"
            userName={author}
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
                color="white"
                className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
                onClick={handleScrap}
              />
            )}
            <Link
              href={{
                pathname: `/curation/detail/${id}`,
              }}
            >
              <div className="headline2 w-[70%] break-keep mb-[1.2rem] text-white">
                <span>{title}</span>
                <div className="flex flex-wrap gap-[0.8rem]">
                  {keywords.map((tag) => (
                    <div key={tag}>
                      <span className="text-primary-normal body2-medium">
                        #{" "}
                      </span>
                      <span className="text-text-gray-4 body2-medium">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
