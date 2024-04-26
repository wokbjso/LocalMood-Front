"use client";

import UserProfile from "@feature/user/components/UserProfile/molecules/UserProfile";
import { CurationProps } from "@feature/curation/type";
import NoResult from "@common/assets/images/curationHomeNoImg.png";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import LocationLine from "@common/assets/icons/location/LocationLine";
import Image from "next/image";
import CurationScrapIcon from "../../CurationScrap/CurationScrapIcon";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@common/state/toast";
import { validateLoggedIn } from "@common/utils/validate/validateLoggedIn";
import useFetching from "@common/hooks/useFetching";
import { useEffect, useState } from "react";
import useCurationScrapIcon from "../../../hooks/CurationScrap/useCurationScrapIcon";
import revalidateCurationScrapRelatedData from "@feature/curation/actions/revalidateCurationScrapRelatedData";

//Molecule
export default function CurationInfoCardDark({
  id,
  title,
  author,
  keyword,
  spaceCount,
  image,
  isScraped = true,
  disableScrapDelete = false,
  className,
}: Omit<CurationProps, "places"> & {
  disableScrapDelete?: boolean;
  className?: string;
}) {
  const setToast = useSetRecoilState(toastInfoSelector);

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
      if (disableScrapDelete) {
        if (scrapClickCount > 0) return;
        else {
          setScrapClickCount((prev) => prev + 1);
          toggleScrap();
          setToast({
            open: true,
            text: "큐레이션 스크랩이 해제되었습니다",
          });
        }
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
    }
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
    <div>
      <div className={twMerge("w-[100%]", className)}>
        <div
          className="relative w-[100%] h-[16.5rem] rounded-[8px] overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
          }}
        >
          <div
            className="absolute top-0 w-[100%] h-[100%] z-10"
            style={{
              background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
            }}
          />
          <Image
            alt="큐레이션 스크랩 사진"
            src={image ? (image as string) : NoResult}
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            className="rounded-t-[8px] object-cover"
          />
          <UserProfile
            size="small"
            userName={author}
            className="absolute bottom-[1.6rem] left-[1.6rem] z-10"
          />
          {scraped ? (
            <CurationScrapIcon
              isScraped={scraped}
              backgroundBrightness="dark"
              className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer z-10"
              onClick={handleScrapClick}
            />
          ) : (
            <CurationScrapIcon
              isScraped={scraped}
              backgroundBrightness="dark"
              className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer z-10"
              onClick={handleScrapClick}
            />
          )}
          <div className="flex items-center absolute bottom-[1.6rem] right-[1.6rem] z-10">
            {<LocationLine />}
            <span className="ml-[0.2rem] body3-semibold text-white">
              {spaceCount}
            </span>
          </div>
          <Link
            href={{
              pathname: `/curation/detail/${id}`,
            }}
          >
            <div className="absolute top-0 headline2 w-[80%] pt-[1.6rem] pl-[1.6rem] break-keep text-white z-10">
              <span>{title}</span>
              <div className="flex flex-wrap gap-x-[0.8rem]">
                {keyword.map((tag) => (
                  <div key={tag}>
                    <span className="text-primary-normal body2-medium"># </span>
                    <span className="text-text-gray-4 body2-medium whitespace-nowrap">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
