"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Line from "@common/assets/icons/line/line.svg";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import Link from "next/link";
import {
  PlaceInfoAdditionalProps,
  PlaceInfoTopProps,
} from "@feature/place/type";
import { getSession } from "@common/utils/session/getSession";
import PostSpaceScrap from "@feature/place/queries/postSpaceScrap";
import DeleteSpaceScrap from "@feature/place/queries/deleteScrapSpace";
import SaveModal from "@feature/record/components/Modal/SaveModal";
import NoResult from "@common/assets/images/curationHomeNoImg.png";
import { sliceText } from "@common/utils/text/slice-text";
import UsePlaceInfoTop from "./usePlaceInfoTop";
import revalidateHomeRecommend from "@feature/place/utils/revalidateHomeRecomment";
import revalidateScrapSpace from "@feature/place/utils/revalidateScrapSpace";
import Toast from "@common/components/ui/toast/Toast";
import revalidatePlaceDetailById from "@feature/place/utils/revalidatePlaceDetailById";
import revalidateSearchPlaceText from "@feature/search/utils/revalidateSearchPlaceText";

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
  className,
  imgClassName,
}: PlaceInfoTopProps & Partial<PlaceInfoAdditionalProps>) {
  const { openCurationSaveModal, openScrapToast, toastText, handlers } =
    UsePlaceInfoTop();
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
        const res = await DeleteSpaceScrap(id);
        if (res.status === 200) {
          handlers.openScrapToast(true);
          handlers.changeToastText("스크랩이 해제되었습니다");
          const timeoutId = setTimeout(() => {
            revalidateScrapSpace();
            revalidateSearchPlaceText(name);
            revalidatePlaceDetailById(id);
            revalidateHomeRecommend();
          }, 1200);
          return () => clearTimeout(timeoutId);
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      } else {
        const res = await PostSpaceScrap(id);
        if (res.status === 200) {
          handlers.changeOpenCurationSaveModal(true);
          handlers.openScrapToast(true);
          handlers.changeToastText("저장할 큐레이션을 선택해주세요");
          revalidateScrapSpace();
          revalidateSearchPlaceText(name);
          revalidatePlaceDetailById(id);
          revalidateHomeRecommend();
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      }
    }
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
        >
          <div
            className={twMerge(
              "w-full h-[16rem] relative",
              direction === "horizontal" && "w-[8rem] h-[8rem] mr-[1.6rem]"
            )}
          >
            <Image
              src={imgUrl ? imgUrl : NoResult}
              alt="공간 사진"
              fill
              sizes="100vw,50vw"
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
              {direction === "vertical" ? (
                isScraped ? (
                  <ScrapFill
                    className={twMerge(
                      "absolute right-[0.6rem]",
                      size === "small" && "top-[0.8rem]"
                    )}
                    color={size === "small" ? "white" : undefined}
                    onClick={handleScrap}
                  />
                ) : (
                  <ScrapLine
                    className={twMerge(
                      "absolute right-[0.6rem]",
                      size === "small" && "top-[0.8rem]"
                    )}
                    color={size === "small" ? "white" : undefined}
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
      {openCurationSaveModal && (
        <SaveModal
          spaceId={id}
          handleModalFn={handlers.changeOpenCurationSaveModal}
        />
      )}
      <Toast open={openScrapToast} text={toastText} />
    </>
  );
}
