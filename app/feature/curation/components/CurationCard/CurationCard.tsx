"use client";

import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import { CurationProps } from "@feature/curation/type";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import LocationLine from "@common/assets/icons/location/LocationLine";
import NoResult from "@common/assets/images/curationHomeNoImg.png";
import Image from "next/image";
import useToast from "@common/hooks/useToast";
import revalidateCurationRandom from "@feature/curation/actions/revalidateCurationRandom";
import revalidateCurationScrap from "@feature/curation/actions/revalidateCurationScrap";
import CurationCardScrapIcon from "./CurationCardScrapIcon";
import CurationCardMenuIcon from "./CurationCardMenuIcon";
import useCurationMenuModal from "../CurationModal/CurationMenuModal/useCurationMenuModal";
import { validateToken } from "@common/utils/validate/validateToken";

export default function CurationCard({
  id,
  variant = "others",
  image,
  author,
  title,
  keyword,
  spaceCount,
  isScraped = false,
  className,
}: CurationProps & { className?: string }) {
  const { isMenuModalOpen, openMenuModal, handlers } = useCurationMenuModal();

  const { isToastOpen, toastText, openToast } = useToast();

  const curationScrapAdd = async () => {
    const res = await fetch(`/api/curation/scrap/add/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.status;
  };

  const curationScrapDelete = async () => {
    const res = await fetch(`/api/curation/scrap/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.status;
  };

  const revalidateRelatedData = () => {
    revalidateCurationRandom();
    revalidateCurationScrap();
  };

  const handleScrapIconClick = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const token = await validateToken();
    if (!token) {
      location.replace("/login");
    } else {
      if (isScraped) {
        if ((await curationScrapDelete()) === 200) {
          openToast("큐레이션 스크랩이 해제되었습니다");
          revalidateRelatedData();
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      } else {
        if ((await curationScrapAdd()) === 200) {
          openToast("큐레이션이 스크랩 되었습니다");
          revalidateRelatedData();
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      }
    }
  };

  const handleMenuClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    openMenuModal();
  };

  return (
    <>
      <Link
        href={{
          pathname: `/curation/detail/${id}`,
        }}
      >
        <div
          className={twMerge(
            "w-full min-h-[27.7rem] bg-white rounded-[8px] border-b-[0.1rem] border-x-[0.1rem] border-line-gray-3",
            className
          )}
        >
          <div className="w-full h-[16.5rem] bg-cover relative rounded-t-[8px] overflow-hidden">
            <Image
              alt="큐레이션 사진"
              src={image && image.length > 0 ? image[0] : NoResult}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              sizes="100vw,90vw"
              className="object-cover"
            />
            {variant === "others" && (
              <UserProfile
                size="small"
                userName={author}
                className="absolute bottom-[1.6rem] left-[1.6rem]"
              />
            )}
            <Chip className="body3-semibold rounded-[4px] bg-[#212121CC] flex items-center pr-[0.4rem] pl-[0.2rem] h-[2rem] absolute right-[1.6rem] bottom-[1.6rem]">
              <LocationLine />
              <span className="body3-semibold text-white ml-[0.2rem]">
                {spaceCount}
              </span>
            </Chip>
          </div>
          <div className="w-full pt-[1.6rem] pl-[1.6rem] pr-[0.8rem] pb-[2rem] relative rounded-b-[8px]">
            {variant === "others" ? (
              <CurationCardScrapIcon
                isScraped={isScraped}
                toastInfo={{
                  open: isToastOpen,
                  text: toastText,
                }}
                onClick={handleScrapIconClick}
              />
            ) : (
              <CurationCardMenuIcon
                menuModalInfo={{
                  open: isMenuModalOpen,
                  curationId: id,
                  hasCopyLink: true,
                  handleModalFn: handlers.handleMenuModalOpen,
                }}
                onClick={handleMenuClick}
              />
            )}
            <div className="max-w-[24.4rem] headline2 w-[70%] break-keep mb-[1.2rem] text-black">
              {title}
            </div>
            <div className="flex flex-wrap gap-[0.8rem]">
              {keyword.map((tag) => (
                <div key={tag}>
                  <span className="text-primary-normal body2-medium"># </span>
                  <span className="text-text-gray-6 body2-medium">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
