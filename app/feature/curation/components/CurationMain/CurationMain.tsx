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

export default function CurationMain({
  id,
  variant = "others",
  image,
  author,
  title,
  keyword,
  spaceCount,
  scrapped = false,
  className,
}: CurationProps) {
  const { isScrapped, isMenuOpened, handlers } = UseCurationMain(scrapped);

  const handleScrapClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    //scrap 상태와 id 를 가지고 scrap 상태 변하는 api 생성
    e.preventDefault();
    handlers.changeScrapState(id);
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
        <div>
          <div
            className={twMerge(
              "w-full h-[27.7rem] bg-white rounded-[8px]",
              className
            )}
          >
            <div>
              <div
                className="w-full h-[16.5rem] bg-cover relative rounded-t-[8px]"
                style={{
                  backgroundImage: `url(
            ${image && image[0]}
          )`,
                }}
              >
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
              <div className="w-full p-[1.6rem] relative border-b-[0.1rem] border-x-[0.1rem] border-line-gray-3 rounded-b-[8px]">
                {variant === "others" ? (
                  isScrapped ? (
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
                      <span className="text-primary-normal body2-medium">
                        #{" "}
                      </span>
                      <span className="text-text-gray-6 body2-medium">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
    </>
  );
}
