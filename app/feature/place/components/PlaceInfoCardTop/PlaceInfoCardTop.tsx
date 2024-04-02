"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Line from "@common/assets/icons/line/line.svg";
import Link from "next/link";
import {
  PlaceInfoCardAdditionalProps,
  PlaceInfoCardTopProps,
} from "@feature/place/type";
import NoResult from "@common/assets/images/curationHomeNoImg.png";
import { sliceText } from "@common/utils/text/slice-text";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import PlaceInfoCardTopScrapIcon from "./PlaceInfoCardTopScrapIcon";
import { validateToken } from "@common/utils/validate/validateToken";
import useOpenMyCurationModal from "@feature/curation/components/CurationModal/MyCurationModal/useOpenMyCurationModal";
import useToastActions from "@common/components/layout/ContextProvider/useToastAction";

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
  const { isModalOpen, openModal, handlers } = useOpenMyCurationModal();
  const { openToast } = useToastActions();

  const handleScrap = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const token = await validateToken();
    if (!token) {
      location.replace("/login");
    } else {
      openModal();
      openToast("저장할 큐레이션을 선택해주세요");
    }
  };

  return (
    <div
      className={twMerge(
        "w-[100%] relative",
        direction === "horizontal" && "flex items-center",
        className
      )}
    >
      <Link
        href={{
          pathname:
            variant === "main"
              ? `/place/${id}`
              : variant === "record"
              ? `/record/select/${id}`
              : undefined,
          query: variant === "record" ? { type, name } : null,
        }}
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
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            sizes="100vw,50vw"
            className={twMerge("rounded-[8px] object-cover", imgClassName)}
          />
        </div>
      </Link>
      <div
        className={twMerge("flex-col", size === "normal" ? "relative" : null)}
      >
        <div
          className={twMerge(
            direction === "vertical" && "w-[85%] pt-[1.6rem]",
            size === "normal" ? "headline2" : "headline3"
          )}
        >
          {direction === "vertical" && variant !== "record" && (
            <PlaceInfoCardTopScrapIcon
              isScraped={isScraped}
              cardSize={size}
              curationModalInfo={{
                open: isModalOpen,
                title: "저장할 큐레이션",
                spaceId: id,
                myCurationData,
                handleModalFn: handlers.handleCurationModal,
              }}
              onClick={handleScrap}
            />
          )}
          <Link
            href={{
              pathname:
                variant === "main"
                  ? `/place/${id}`
                  : variant === "record"
                  ? `/record/select/${id}`
                  : undefined,
              query: variant === "record" ? { type, name } : null,
            }}
          >
            <span>
              {direction === "vertical" && size === "small"
                ? sliceText(name, 8)
                : name}
            </span>
          </Link>
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
  );
}
