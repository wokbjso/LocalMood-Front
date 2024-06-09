"use client";

import UserProfile from "@/feature/user/components/UserProfile/molecules/UserProfile";
import { CurationProps } from "@/feature/curation/type";
import NoResult from "@/common/assets/images/curationHomeNoImg.png";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Image from "next/image";
import CurationScrapIcon from "../../CurationScrap/CurationScrapIcon";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@/common/state/toast";
import { validateLoggedIn } from "@/common/utils/validate/validateLoggedIn";
import useFetching from "@/common/hooks/useFetching";
import { useEffect } from "react";
import useCurationScrapIcon from "../../../hooks/CurationScrap/useCurationScrapIcon";
import revalidateCurationScrapRelatedData from "@/feature/curation/actions/revalidateCurationScrapRelatedData";
import SpaceCount from "@/common/components/ui/spaceCount/SpaceCount";
import UseCurationScrapClickCount from "@/feature/curation/hooks/CurationInfo/useCurationScrapClickCount";
import CurationInfoCardTagList from "./CurationInfoCardTagList";
import CurationInfoCardShadow from "../molecules/CurationInfoCardShadow";
import Title from "@/common/components/ui/text/Title";

//Molecule
export default function CurationInfoCardDark({
  id,
  title,
  author,
  keyword,
  spaceCount,
  image,
  isScraped = true,
  disableScrap = false,
  className,
}: Omit<CurationProps, "privacy"> & {
  disableScrap?: boolean;
  className?: string;
}) {
  const setToast = useSetRecoilState(toastInfoSelector);
  const { scraped, toggleScrap } = useCurationScrapIcon(isScraped);
  const { isFetching, changeFetching } = useFetching();
  const { clickCount, plusClickCount, resetClickCount } =
    UseCurationScrapClickCount();

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
      if (disableScrap) {
        if (clickCount > 0) return;
        else {
          plusClickCount();
          toggleScrap();
          setToast({
            open: true,
            text: "큐레이션 스크랩이 해제되었습니다",
          });
        }
      } else {
        plusClickCount();
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

  const handleIsFetching = () => {
    resetClickCount();
    toggleScrap();
    alert("이전 요청을 처리중입니다");
  };

  const handleQuerySuccess = async () => {
    await revalidateCurationScrapRelatedData().then(() => {
      changeFetching(false);
      resetClickCount();
    });
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (isFetching) {
        handleIsFetching();
        return;
      }
      if (clickCount % 2 === 0) return;
      if (scraped) {
        changeFetching(true);
        if ((await curationScrapAdd()) === 200) {
          await handleQuerySuccess();
        } else {
          handleScrapError();
        }
      } else {
        changeFetching(true);
        if ((await curationScrapDelete()) === 200) {
          await handleQuerySuccess();
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
          <CurationInfoCardShadow />
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
          <CurationScrapIcon
            isScraped={scraped}
            backgroundBrightness="dark"
            className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer z-20"
            onClick={handleScrapClick}
          />
          <SpaceCount
            spaceCount={spaceCount}
            className="absolute bottom-[1.6rem] right-[1.6rem] z-10"
          />{" "}
          <Link
            href={{
              pathname: `/curation/detail/${id}`,
            }}
          >
            <div className="w-full absolute top-0 pt-[1.6rem] pl-[1.6rem] z-10">
              <Title className="headline2 w-[70%] break-keep text-white">
                {title}
              </Title>
              <CurationInfoCardTagList
                keyword={keyword}
                className="mt-[12px]"
                textClassName="text-text-gray-4"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
