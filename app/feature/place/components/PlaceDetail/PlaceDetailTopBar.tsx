"use client";

import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import LinkIcon from "@common/assets/icons/link/LinkIcon";
import { TopBarProps } from "../../../../common/components/ui/topBar/type";
import BasicTopBar from "../../../../common/components/ui/topBar/BasicTopBar/BasicTopBar";
import { copyLink } from "@common/utils/copyLink";
import { useState } from "react";

export default function PlaceDetailTopBar({
  id,
  scrapped,
  className,
}: Partial<TopBarProps>) {
  const [isScrapped, setIsScrapped] = useState(scrapped);
  const handleScrapClick = () => {
    setIsScrapped((prev) => !prev);
    //id 를 활용한 scrap 상태 변경 api 호출
  };
  const handleCopyLinkClick = () => {
    copyLink("현재 pathname");
  };
  return (
    <BasicTopBar className={className}>
      <div className="flex justify-end">
        {isScrapped ? (
          <ScrapFill color="white" onClick={handleScrapClick} />
        ) : (
          <ScrapLine color="white" onClick={handleScrapClick} />
        )}

        <LinkIcon className="ml-[0.8rem]" onClick={handleCopyLinkClick} />
      </div>
    </BasicTopBar>
  );
}
