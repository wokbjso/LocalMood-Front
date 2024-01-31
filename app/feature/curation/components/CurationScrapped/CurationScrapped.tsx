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
  imgUrl,
  author,
  title,
  keyword,
  isScraped = true,
  className,
}: Omit<CurationProps, "places">) {
  const [scrapState, setScrapState] = useState(isScraped);
  const handleScrap = () => {
    setScrapState((prev) => !prev);
    //id 이용해서 scrap 해제 모달 창 띄우기 && delete api 호출
  };

  return (
    <div>
      <div className={twMerge("w-full", className)}>
        <div
          className="w-full h-[16.5rem] bg-cover relative rounded-[8px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(
              https://a.cdn-hotels.com/gdcs/production161/d1403/b5f1876a-9e64-4d13-ab7a-a0fd2cbc5224.jpg
          )`,
          }}
        >
          <UserProfile
            size="small"
            userName={author}
            className="absolute bottom-[1.6rem] left-[1.6rem]"
          />
          <div className="w-full p-[1.6rem] relative">
            {scrapState ? (
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
                  {/* 키워드 배열로 들어오면 수정 필요 */}
                  {["키워드1", "키워드2"].map((tag) => (
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
