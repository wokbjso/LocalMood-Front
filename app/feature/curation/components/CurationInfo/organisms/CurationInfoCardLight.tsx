"use client";

import UserProfile from "@/feature/user/components/UserProfile/molecules/UserProfile";
import { CurationProps } from "@/feature/curation/type";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Chip from "@/common/components/ui/buttons/Chip/Chip";
import CurationMenuIcon from "../../CurationMenu/CurationMenuIcon";
import CurationScrapIcon from "../../CurationScrap/CurationScrapIcon";
import useCurationScrapIcon from "../../../hooks/CurationScrap/useCurationScrapIcon";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@/common/state/toast";
import { validateLoggedIn } from "@/common/utils/validate/validateLoggedIn";
import { useEffect } from "react";
import useFetching from "@/common/hooks/useFetching";
import revalidateCurationScrapRelatedData from "@/feature/curation/actions/revalidateCurationScrapRelatedData";
import UseCurationScrapClickCount from "@/feature/curation/hooks/CurationInfo/useCurationScrapClickCount";
import SpaceCount from "@/common/components/ui/spaceCount/SpaceCount";
import CurationInfoCardTagList from "./CurationInfoCardTagList";
import Title from "@/common/components/ui/text/Title";
import UseHandleModal from "@/common/hooks/useHandleModal";
import CurationImages from "../molecules/CurationImages";

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
  variant?: "others" | "my";
  className?: string;
}) {
  const setToast = useSetRecoilState(toastInfoSelector);
  const {
    isOpened: isCurationMenuModalOpened,
    openModal: openCurationMenuModal,
    closeModal: closeCurationMenuModal,
  } = UseHandleModal();
  const { scraped, toggleScrap } = useCurationScrapIcon(isScraped);
  const { isFetching, changeFetching } = useFetching();
  const { clickCount, plusClickCount, resetClickCount } =
    UseCurationScrapClickCount();

  const checkTitleHasSpace =
    title.split("").filter((word) => word === "").length > 0;

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
      plusClickCount();
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
    openCurationMenuModal();
  };

  const handleScrapError = () => {
    toggleScrap();
    alert("오류가 발생했습니다");
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
        resetClickCount();
        toggleScrap();
        alert("이전 요청을 처리중입니다");
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
        prefetch
      >
        <div
          className={twMerge(
            "w-full h-[16.5rem] bg-cover relative rounded-t-[8px] overflow-hidden",
            image && image.length >= 3 ? "flex" : ""
          )}
        >
          <CurationImages image={image} />
          {variant === "others" && (
            <UserProfile
              size="small"
              userName={author}
              className="absolute bottom-[1.6rem] left-[1.6rem]"
            />
          )}
          <Chip className="body3-semibold rounded-[4px] bg-[#212121CC] flex items-center pr-[0.4rem] pl-[0.2rem] h-[2rem] absolute right-[1.6rem] bottom-[1.6rem]">
            <SpaceCount spaceCount={spaceCount} />
          </Chip>
        </div>
      </Link>
      <div className="w-[100%] pt-[1.6rem] pl-[1.6rem] pr-[0.8rem] pb-[2rem] relative rounded-b-[8px]">
        {variant === "others" ? (
          <CurationScrapIcon
            isScraped={scraped}
            backgroundBrightness="light"
            className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
            onClick={handleScrapClick}
          />
        ) : (
          <CurationMenuIcon
            menuModalInfo={{
              isOpened: isCurationMenuModalOpened,
              hasCopyLink: true,
              curationInfo: {
                id,
                privacy,
                keyword,
                title,
              },
              closeModal: closeCurationMenuModal,
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
          <Title
            className={twMerge(
              "headline2 w-[70%] break-keep mb-[12px]",
              checkTitleHasSpace ? "" : "break-all"
            )}
          >
            {title}
          </Title>
          <CurationInfoCardTagList
            keyword={keyword}
            textClassName="text-text-gray-6"
          />
        </Link>
      </div>
    </div>
  );
}
