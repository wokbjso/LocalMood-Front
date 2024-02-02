"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Line from "@common/assets/icons/line/line.svg";
import { useState } from "react";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import Link from "next/link";
import { PlaceInfoProps } from "@feature/place/type";
import { getSession } from "@common/utils/getSession";
import PostSpaceScrap from "@feature/place/queries/postSpaceScrap";
import revalidateScrapSpace from "@feature/place/utils/revalidateScrapSpace";
import DeleteSpaceScrap from "@feature/place/queries/deleteScrapSpace";
import SaveModal from "@feature/record/components/Modal/SaveModal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PlaceInfoTop({
  id,
  variant,
  direction,
  size,
  name,
  imgUrl,
  type,
  address,
  isScraped,
  onClick,
  className,
  imgClassName,
}: PlaceInfoProps) {
  const [openSaveModal, setOpenSaveModal] = useState(false);
  const [scrapState, setScrapState] = useState<boolean>(isScraped);
  const handleScrap = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const userInfo = await getSession();
    if (!userInfo) {
      location.replace("/login");
    } else {
      if (scrapState) {
        const res = await DeleteSpaceScrap(id);
        if (res.status === 200) {
          revalidateScrapSpace();
          location.reload();
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      } else {
        const res = await PostSpaceScrap(id);
        if (res.status === 200) {
          setScrapState(true);
          setOpenSaveModal(true);
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      }
    }
  };

  const sliceText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <>
      <Link
        href={{
          pathname:
            variant === "main" ? `/place/${id}` : `/record/select/${id}`,
          query: variant === "record" ? { type, name } : null,
        }}
      >
        <div
          className={twMerge(
            "w-full relative",
            direction === "horizontal" && "flex items-center",
            className
          )}
          onClick={onClick}
        >
          <div
            className={twMerge(
              "w-full h-[16rem] relative",
              direction === "horizontal" && "w-[8rem] h-[8rem] mr-[1.6rem]"
            )}
          >
            <Image
              src={imgUrl}
              alt="공간 사진"
              fill
              sizes="100vw"
              className={twMerge("rounded-[8px]", imgClassName)}
            />
          </div>
          <div
            className={twMerge(
              "flex-col",
              size === "normal" ? "relative" : null
            )}
          >
            <div
              className={twMerge(
                direction === "vertical" && "w-[85%] pt-[1.6rem]",
                size === "normal" ? "headline2" : "headline3"
              )}
            >
              {variant !== "record" ? (
                scrapState ? (
                  <ScrapFill
                    className="absolute right-[0.6rem]"
                    onClick={handleScrap}
                  />
                ) : (
                  <ScrapLine
                    className="absolute right-[0.6rem]"
                    onClick={handleScrap}
                  />
                )
              ) : null}

              <span>
                {direction === "vertical" && size === "small"
                  ? sliceText(name, 8)
                  : name}
              </span>
              <div className="flex items-center mt-[0.8rem]">
                <span
                  className={twMerge(
                    "text-text-gray-6 whitespace-nowrap",
                    size === "normal" ? "body2-semibold" : "body3-semibold"
                  )}
                >
                  {type === "RESTAURANT" ? "음식점" : "카페"}
                </span>
                <Line className="mx-[0.8rem]" />
                <span
                  className={twMerge(
                    "text-text-gray-5",
                    size === "normal" ? "body2-medium" : "body3-medium"
                  )}
                >
                  {direction === "vertical" && size === "small"
                    ? sliceText(address, 9)
                    : address.split(" ").slice(0, 4).join(" ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {openSaveModal && (
        <SaveModal spaceId={id} handleModalFn={setOpenSaveModal} />
      )}
    </>
  );
}
