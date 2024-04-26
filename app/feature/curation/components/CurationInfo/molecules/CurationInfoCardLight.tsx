"use client";

import UserProfile from "@feature/user/components/UserProfile/UserProfile";
import { CurationProps } from "@feature/curation/type";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import LocationLine from "@common/assets/icons/location/LocationLine";
import NoResult from "@common/assets/images/curationHomeNoImg.png";
import Image from "next/image";
import useCurationMenuModal from "../../CurationMenu/useCurationMenuModal";
import CurationMenuIcon from "../../CurationMenu/CurationMenuIcon";
import CurationScrapIcon from "../../CurationScrap/CurationScrapIcon";
import useCurationScrapIcon from "../../CurationScrap/useCurationScrapIcon";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@common/state/toast";
import { validateLoggedIn } from "@common/utils/validate/validateLoggedIn";
import { useEffect, useState } from "react";
import useFetching from "@common/hooks/useFetching";
import revalidateCurationScrapRelatedData from "@feature/curation/actions/revalidateCurationScrapRelatedData";

//Molecule
export default function CurationInfoCardLight({
  id,
  variant = "others",
  image,
  author,
  title,
  keyword,
  privacy,
  spaceCount,
  isScraped = false,
  className,
}: CurationProps & {
  className?: string;
}) {
  const setToast = useSetRecoilState(toastInfoSelector);

  const { isOpened, openModal, closeModal } = useCurationMenuModal();

  const { scraped, toggleScrap } = useCurationScrapIcon(isScraped);

  const { isFetching, changeFetching } = useFetching();

  const [scrapClickCount, setScrapClickCount] = useState(0);

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

  const handleScrapClick = async () => {
    if ((await validateLoggedIn()) === false) {
      location.replace("/login");
    } else {
      setScrapClickCount((prev) => prev + 1);
      toggleScrap();
      setToast({
        open: true,
        text: scraped
          ? "큐레이션 스크랩이 해제되었습니다"
          : "큐레이션이 스크랩 되었습니다",
      });
    }
  };

  const handleMenuClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    openModal();
  };

  const handleScrapError = () => {
    toggleScrap();
    alert("오류가 발생했습니다");
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (isFetching) {
        setScrapClickCount(0);
        toggleScrap();
        alert("이전 요청을 처리중입니다");
        return;
      }
      if (scrapClickCount % 2 === 0) return;
      if (scraped) {
        changeFetching(true);
        if ((await curationScrapAdd()) === 200) {
          await revalidateCurationScrapRelatedData().then(() => {
            changeFetching(false);
            setScrapClickCount(0);
          });
        } else {
          handleScrapError();
        }
      } else {
        changeFetching(true);
        if ((await curationScrapDelete()) === 200) {
          await revalidateCurationScrapRelatedData().then(() => {
            changeFetching(false);
            setScrapClickCount(0);
          });
        } else {
          handleScrapError();
        }
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scraped]);

  return (
    <div
      className={twMerge(
        "w-[100%] min-h-[27.7rem] bg-white rounded-[8px] border-b-[0.1rem] border-x-[0.1rem] border-line-gray-3",
        className
      )}
    >
      <Link
        href={{
          pathname: `/curation/detail/${id}`,
        }}
      >
        <div className="w-full h-[16.5rem] bg-cover relative rounded-t-[8px] overflow-hidden">
          <Image
            alt="큐레이션 사진"
            src={image && image.length > 0 ? image[0] : NoResult}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            sizes="100vw"
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
      </Link>
      <div className="w-[100%] pt-[1.6rem] pl-[1.6rem] pr-[0.8rem] pb-[2rem] relative rounded-b-[8px]">
        {variant === "others" ? (
          scraped ? (
            <CurationScrapIcon
              isScraped={scraped}
              backgroundBrightness="light"
              className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
              onClick={handleScrapClick}
            />
          ) : (
            <CurationScrapIcon
              isScraped={scraped}
              backgroundBrightness="light"
              className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
              onClick={handleScrapClick}
            />
          )
        ) : (
          <CurationMenuIcon
            menuModalInfo={{
              isOpened,
              hasCopyLink: true,
              curationInfo: {
                id,
                privacy,
                keyword,
                title,
              },
              closeModal,
            }}
            showAt="card"
            className="absolute top-[1.6rem] right-[1.2rem]"
            onClick={handleMenuClick}
          />
        )}
        <Link
          href={{
            pathname: `/curation/detail/${id}`,
          }}
        >
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
        </Link>
      </div>
    </div>
  );
}
