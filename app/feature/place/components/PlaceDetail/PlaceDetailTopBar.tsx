"use client";

import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import LinkIcon from "@common/assets/icons/link/LinkIcon";
import { TopBarProps } from "../../../../common/components/ui/topBar/type";
import BasicTopBar from "../../../../common/components/ui/topBar/BasicTopBar/BasicTopBar";
import { copyLink } from "@common/utils/copyLink";
import { useState } from "react";
import { getSession } from "@common/utils/getSession";
import DeleteSpaceScrap from "@feature/place/queries/deleteScrapSpace";
import revalidateScrapSpace from "@feature/place/utils/revalidateScrapSpace";
import PostSpaceScrap from "@feature/place/queries/postSpaceScrap";

export default function PlaceDetailTopBar({
  id,
  isScraped,
  className,
}: Partial<TopBarProps>) {
  const [scrapState, setScrapState] = useState(isScraped);
  const handleScrapClick = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const userInfo = await getSession();
    if (!userInfo) {
      location.replace("/login");
    } else {
      if (scrapState) {
        const res = await DeleteSpaceScrap(id as number);
        if (res.status === 200) {
          revalidateScrapSpace();
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      } else {
        const res = await PostSpaceScrap(id as number);
        if (res.status === 200) {
          revalidateScrapSpace();
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      }
    }
  };
  const handleCopyLinkClick = () => {
    copyLink("현재 pathname");
  };
  return (
    <BasicTopBar className={className}>
      <div className="flex justify-end">
        {scrapState ? (
          <ScrapFill color="white" onClick={handleScrapClick} />
        ) : (
          <ScrapLine color="white" onClick={handleScrapClick} />
        )}

        <LinkIcon className="ml-[0.8rem]" onClick={handleCopyLinkClick} />
      </div>
    </BasicTopBar>
  );
}
