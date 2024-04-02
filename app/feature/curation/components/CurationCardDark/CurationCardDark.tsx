"use client";

import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import { CurationProps } from "@feature/curation/type";
import NoResult from "@common/assets/images/curationHomeNoImg.png";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import revalidateCurationScrap from "@feature/curation/actions/revalidateCurationScrap";
import LocationLine from "@common/assets/icons/location/LocationLine";
import Image from "next/image";
import revalidateCurationRandom from "@feature/curation/actions/revalidateCurationRandom";
import CurationScrapIcon from "../CurationScrapIcon/CurationScrapIcon";
import useToast from "@common/components/ui/toast/useToast";
import { validateToken } from "@common/utils/validate/validateToken";

export default function CurationCardDark({
  id,
  title,
  author,
  keyword,
  spaceCount,
  image,
  isScraped = true,
  toastOutside = false,
  outsideOpenToast,
  className,
}: Omit<CurationProps, "places"> & {
  toastOutside?: boolean;
  outsideOpenToast?: (text: string) => void;
  className?: string;
}) {
  const { isToastOpen, toastText, openToast } = useToast();

  const addScrap = async () => {
    const res = await fetch(`/api/curation/scrap/add/${id}`);
    return res.status;
  };

  const handleScrapAddClick = async () => {
    const token = validateToken();
    if (!token) {
      location.replace("/login");
    } else {
      if ((await addScrap()) === 200) {
        toastOutside
          ? outsideOpenToast && outsideOpenToast("큐레이션이 스크랩 되었습니다")
          : openToast("큐레이션이 스크랩 되었습니다");
        revalidateRelatedData();
      } else {
        alert("에러가 발생했습니다!");
        return;
      }
    }
  };

  const deleteScrap = async () => {
    const res = await fetch(`api/curation/scrap/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.status;
  };

  const handleScrapDeleteClick = async () => {
    const token = validateToken();
    if (!token) {
      location.replace("/login");
    } else {
      if ((await deleteScrap()) === 200) {
        toastOutside
          ? outsideOpenToast &&
            outsideOpenToast("큐레이션 스크랩이 해제되었습니다")
          : openToast("큐레이션 스크랩이 해제되었습니다");
        revalidateRelatedData();
      } else {
        alert("에러가 발생했습니다!");
        return;
      }
    }
  };

  const revalidateRelatedData = () => {
    revalidateCurationScrap();
    revalidateCurationRandom();
  };

  return (
    <div>
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
            <CurationScrapIcon
              isScraped={isScraped}
              backgroundBrightness="dark"
              toastInfo={{
                open: isToastOpen,
                text: toastText,
              }}
              className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer z-10"
              onClick={handleScrapDeleteClick}
            />
          ) : (
            <CurationScrapIcon
              isScraped={isScraped}
              backgroundBrightness="dark"
              toastInfo={{ open: isToastOpen, text: toastText }}
              className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer z-10"
              onClick={handleScrapAddClick}
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
    </div>
  );
}
