"use client";

import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import ScrapShadow from "@common/assets/icons/scrap/scrap-shadow.svg";
import { useState } from "react";
import { CurationProps } from "@feature/curation/type";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { getSession } from "@common/utils/getSession";
import DeleteCurationScrap from "@feature/curation/queries/deleteCurationScrap";
import revalidateCurationScrap from "@feature/curation/utils/revalidateCurationScrap";
import PostCurationScrap from "@feature/curation/queries/postCurationScrap";

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
  const handleScrap = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const userInfo = await getSession();
    if (!userInfo) {
      location.replace("/login");
    } else {
      if (scrapState) {
        const res = await DeleteCurationScrap(id);
        if (res.status === 200) {
          revalidateCurationScrap();
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      } else {
        const res = await PostCurationScrap(id);
        if (res.status === 200) {
          revalidateCurationScrap();
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      }
    }
  };

  return (
    <div>
      <div className={twMerge("w-full", className)}>
        <div
          className="w-full h-[16.5rem] bg-cover relative rounded-[8px]"
          style={{
            backgroundImage: `url(
             ${imgUrl}
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
