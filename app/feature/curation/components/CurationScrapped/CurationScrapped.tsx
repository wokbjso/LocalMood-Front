"use client";

import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import ScrapShadow from "@common/assets/icons/scrap/scrap-shadow.svg";
import { CurationProps } from "@feature/curation/type";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import NoResult from "@common/assets/images/curationHomeNoImg.png";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { getSession } from "@common/utils/session/getSession";
import revalidateCurationScrap from "@feature/curation/actions/revalidateCurationScrap";
import LocationLine from "@common/assets/icons/location/LocationLine";
import Image from "next/image";
import revalidateCurationRandom from "@feature/curation/actions/revalidateCurationRandom";

export default function CurationScrapped({
  id,
  title,
  author,
  keyword,
  spaceCount,
  image,
  isScraped = true,
  className,
}: Omit<CurationProps, "places"> & { className?: string }) {
  const handleScrap = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const auth_info = await getSession();
    const token = auth_info?.data?.accessToken;
    if (!token) {
      location.replace("/login");
    } else {
      if (isScraped) {
        const res = await fetch(`api/curation/scrap/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          revalidateCurationScrap();
          revalidateCurationRandom();
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      } else {
        const res = await fetch(`/api/curation/scrap/add/${id}`);
        if (res.status === 200) {
          revalidateCurationScrap();
          revalidateCurationRandom();
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      }
    }
  };
  return (
    <div className={twMerge("w-[100%]", className)}>
      <div
        className="relative w-[100%] h-[16.5rem] rounded-[8px] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
        }}
      >
        <div
          className="absolute top-0 w-[100%] h-[100%] z-10"
          style={{
            background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
          }}
        />
        <Image
          alt="큐레이션 스크랩 사진"
          src={image ? (image as string) : NoResult}
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          className="rounded-t-[8px] object-cover"
        />
        <UserProfile
          size="small"
          userName={author}
          className="absolute bottom-[1.6rem] left-[1.6rem] z-10"
        />
        {isScraped ? (
          <ScrapShadow
            className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer z-10"
            onClick={handleScrap}
          />
        ) : (
          <ScrapLine
            color="white"
            className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer z-10"
            onClick={handleScrap}
          />
        )}
        <div className="flex items-center absolute bottom-[1.6rem] right-[1.6rem] z-10">
          {<LocationLine />}
          <span className="ml-[0.2rem] body3-semibold text-white">
            {spaceCount}
          </span>
        </div>
        <Link
          href={{
            pathname: `/curation/detail/${id}`,
          }}
        >
          <div className="absolute headline2 w-[80%] pt-[1.6rem] pl-[1.6rem] break-keep text-white z-10">
            <span>{title}</span>
            <div className="flex flex-wrap gap-x-[0.8rem]">
              {keyword.map((tag) => (
                <div key={tag}>
                  <span className="text-primary-normal body2-medium"># </span>
                  <span className="text-text-gray-4 body2-medium whitespace-nowrap">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
