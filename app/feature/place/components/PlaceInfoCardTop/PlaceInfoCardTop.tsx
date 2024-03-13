"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Line from "@common/assets/icons/line/line.svg";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import Link from "next/link";
import {
  PlaceInfoCardAdditionalProps,
  PlaceInfoCardTopProps,
} from "@feature/place/type";
import { getSession } from "@common/utils/session/getSession";
import NoResult from "@common/assets/images/curationHomeNoImg.png";
import { sliceText } from "@common/utils/text/slice-text";
import Toast from "@common/components/ui/toast/Toast";
import UsePlaceInfoCardTop from "./usePlaceInfoCardTop";
import SavePlaceModal from "@feature/curation/components/CurationModal/SavePlaceModal/SavePlaceModal";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";

export default function PlaceInfoCardTop({
  id,
  variant,
  direction,
  size,
  name,
  imgUrl,
  type,
  address,
  isScraped,
  myCurationData,
  className,
  imgClassName,
}: PlaceInfoCardTopProps &
  Partial<PlaceInfoCardAdditionalProps> & {
    myCurationData?: MyCurationResponse;
  }) {
  const { openCurationSaveModal, openScrapToast, toastText, handlers } =
    UsePlaceInfoCardTop();
  const handleScrap = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const auth_info = await getSession();
    const token = auth_info?.data?.accessToken;
    if (!token) {
      location.replace("/login");
    } else {
      handlers.changeOpenCurationSaveModal(true);
      handlers.openScrapToast(true);
      handlers.changeToastText(`저장할 큐레이션을 선택해주세요`);
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
              {direction === "vertical" && variant !== "record" ? (
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
        <SavePlaceModal
          myCurationData={myCurationData}
          spaceId={id}
          handleModalFn={handlers.changeOpenCurationSaveModal}
        />
      )}
      <Toast open={openScrapToast} text={toastText} />
    </>
  );
}
