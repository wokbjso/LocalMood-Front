"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Line from "@common/assets/icons/line/line.svg";
import Link from "next/link";
import {
  PlaceInfoCardAdditionalProps,
  PlaceInfoCardTopProps,
} from "@feature/place/type";
import RecordNoImage from "@common/assets/images/RecordNoImage.png";
import { sliceText } from "@common/utils/text/slice-text";
import PlaceInfoCardTopScrapIcon from "./PlaceInfoCardTopScrapIcon";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@common/state/toast";
import { myCurationModalInfoSelector } from "@common/state/myCurationModal";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import CheckIconSmall from "@common/assets/icons/check/CheckIconSmall";
import ImageWrapper from "@common/components/ui/imageWrapper/ImageWrapper";
import { validateLoggedIn } from "@common/utils/validate/validateLoggedIn";

//Molecule
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
  isReviewed,
  className,
  imgClassName,
}: PlaceInfoCardTopProps & Partial<PlaceInfoCardAdditionalProps>) {
  const setToast = useSetRecoilState(toastInfoSelector);
  const setMyCurationModal = useSetRecoilState(myCurationModalInfoSelector);

  const handleplaceInfoCardClick = () => {
    setToast({
      open: true,
      text: "이미 공간기록을 완료한 장소입니다",
    });
  };

  const handleScrap = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    if ((await validateLoggedIn()) === false) {
      location.replace("/login");
    } else {
      setMyCurationModal({
        open: true,
        spaceId: id,
      });
      setToast({
        open: true,
        text: "저장할 큐레이션을 선택해주세요",
      });
    }
  };

  return (
    <Link
      href={{
        pathname:
          variant === "main"
            ? `/place/${id}`
            : variant === "record" && !isReviewed
            ? `/record/select/${id}`
            : undefined,
        query: variant === "record" && !isReviewed ? { type, name } : null,
      }}
    >
      <div
        className={twMerge(
          "w-[100%] relative",
          direction === "horizontal" && "flex items-center",
          className
        )}
        onClick={
          variant === "record" && isReviewed
            ? handleplaceInfoCardClick
            : undefined
        }
      >
        <div
          className={twMerge(
            "w-full h-[16rem]",
            direction === "horizontal" && "w-[8rem] h-[8rem] mr-[1.6rem]"
          )}
        >
          {variant === "record" && isReviewed && direction === "vertical" && (
            <Chip className="flex items-center absolute bottom-[0.8rem] left-[0.8rem] px-[6px] h-[2rem] rounded-[4px] bg-primary-normal  z-10">
              <CheckIconSmall className="mr-[4px]" />
              <span className="body3-semibold text-white">기록 완료</span>
            </Chip>
          )}
          {variant === "record" && isReviewed && direction === "horizontal" && (
            <ImageWrapper text="기록 완료" className="w-[8rem] h-[8rem]" />
          )}
          <Image
            src={imgUrl ? imgUrl : RecordNoImage}
            alt="공간 사진"
            width={
              direction === "horizontal" ? 80 : size === "small" ? 163 : 335
            }
            height={direction === "horizontal" ? 80 : 160}
            layout="fixed"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            className={twMerge(
              "rounded-[8px] object-cover w-full h-full",
              imgClassName
            )}
          />
        </div>
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
                onClick={handleScrap}
              />
            )}
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
  );
}
