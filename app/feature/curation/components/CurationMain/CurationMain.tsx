"use client";

import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import { CurationProps } from "@feature/curation/type";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { twMerge } from "tailwind-merge";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import Link from "next/link";
import MenuIcon from "@common/assets/icons/menu/MenuIcon";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import LocationLine from "@common/assets/icons/location/LocationLine";
import CurationMenuModal from "../CurationModal/CurationMenuModal";
import UseCurationMain from "./useCurationMain";
import { getSession } from "@common/utils/session/getSession";
import NoResult from "@common/assets/images/curationHomeNoImg.png";
import Toast from "@common/components/ui/toast/Toast";
import Image from "next/image";

export default function CurationMain({
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
  const { isMenuOpened, openScrapToast, toastText, handlers } =
    UseCurationMain(isScraped);

  const handleScrapClick = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const auth_info = await getSession();
    const token = auth_info?.data?.accessToken;
    if (!token) {
      location.replace("/login");
    } else {
      handlers.changeScrapState(id);
    }
  };

  const handleMenuClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    handlers.changeMenuModalState(true);
  };

  return (
    <>
      <Link
        href={{
          pathname: `/curation/detail/${id}`,
        }}
      >
        <div className={twMerge("w-full  bg-white rounded-[8px]", className)}>
          <div className="w-full h-[16.5rem] bg-cover relative rounded-t-[8px] overflow-hidden">
            <Image
              alt="큐레이션 사진"
              src={image && image.length > 0 ? image[0] : NoResult}
              fill
              sizes="100vw"
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
          <div className="w-full pt-[1.6rem] pl-[1.6rem] pr-[0.8rem] pb-[2rem] relative border-b-[0.1rem] border-x-[0.1rem] border-line-gray-3 rounded-b-[8px]">
            {variant === "others" ? (
              isScraped ? (
                <ScrapFill
                  className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
                  onClick={handleScrapClick}
                />
              ) : (
                <ScrapLine
                  className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
                  onClick={handleScrapClick}
                />
              )
            ) : (
              <MenuIcon
                className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
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
      {isMenuOpened && (
        <CurationMenuModal
          id={id}
          hasCopyLink
          handleMenuModalState={handlers.changeMenuModalState}
        />
      )}
      <Toast open={openScrapToast} text={toastText} />
    </>
  );
}
