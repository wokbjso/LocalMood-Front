"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import {
  PlaceInfoCardAdditionalProps,
  PlaceInfoCardTopProps,
} from "@/feature/place/components/PlaceInfo/type";
import RecordNoImage from "@/common/assets/images/record-no-img.png";
import { sliceText } from "@/common/utils/text/slice-text";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@/common/state/toast";
import { myCurationModalInfoSelector } from "@/common/state/my-curation-modal";
import ImageWrapper from "@/common/components/ui/wrapper/ImageWrapper";
import { validateLoggedIn } from "@/common/utils/validate/validate-logged-in";
import TextWithDivider from "@/common/components/ui/text/TextWithDivider";
import PlaceInfoCardScrapIcon from "../molecules/PlaceInfoCardScrapIcon";
import PlaceInfoCardRecordedBadge from "../molecules/PlaceInfoCardRecordedBadge";
import Title from "@/common/components/ui/text/Title";

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

  const getPathName =
    variant === "main"
      ? `/place/${id}`
      : variant === "record" && !isReviewed
      ? `/record/select/${id}`
      : variant === "mypage"
      ? `/place/${id}/more`
      : "";
  const getQuery = variant === "record" && !isReviewed ? { type, name } : null;
  const getImageSize =
    size === "small" ? "50vw" : direction === "horizontal" ? "20vw" : "100vw";

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
        pathname: getPathName,
        query: getQuery,
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
            "w-full h-[16rem] relative rounded-[8px]",
            direction === "horizontal" && "w-[8rem] h-[8rem] mr-[1.6rem]"
          )}
        >
          {variant === "record" && isReviewed && direction === "vertical" && (
            <PlaceInfoCardRecordedBadge text="기록 완료" />
          )}
          {variant === "record" && isReviewed && direction === "horizontal" && (
            <ImageWrapper text="기록 완료" className="w-[8rem] h-[8rem]" />
          )}
          <Image
            src={
              imgUrl !== ""
                ? imgUrl.replace("open?", "uc?export=download&")
                : RecordNoImage
            }
            alt="공간 사진"
            fill
            sizes={getImageSize}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            className={twMerge("rounded-[8px] object-cover", imgClassName)}
          />
        </div>
        <div
          className={twMerge("flex-col", size === "normal" ? "relative" : null)}
        >
          <div
            className={direction === "vertical" ? "w-[85%] pt-[1.6rem]" : ""}
          >
            {direction === "vertical" &&
              variant !== "record" &&
              size !== "small" && (
                <PlaceInfoCardScrapIcon
                  isScraped={isScraped}
                  cardSize={size}
                  onClick={handleScrap}
                />
              )}
            <Title className={size === "normal" ? "headline2" : "headline3"}>
              {direction === "vertical" && size === "small"
                ? sliceText(name, 8)
                : name}
            </Title>
            <TextWithDivider
              leftText={type === "RESTAURANT" ? "음식점" : "카페"}
              rightText={
                direction === "vertical" && size === "small"
                  ? sliceText(address, 9)
                  : address.split(" ").slice(0, 4).join(" ")
              }
              className="mt-[8px]"
              leftTextClassName={size === "normal" ? "" : "body3-semibold"}
              rightTextClassName={size === "normal" ? "" : "body3-medium"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
