"use client";

import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import LinkIcon from "@common/assets/icons/link/LinkIcon";
import { TopBarProps } from "../../../../common/components/ui/topBar/type";
import BasicTopBar from "../../../../common/components/ui/topBar/BasicTopBar/BasicTopBar";
import { copyLink } from "@common/utils/copyLink";
import { getSession } from "@common/utils/getSession";
import DeleteSpaceScrap from "@feature/place/queries/deleteScrapSpace";
import PostSpaceScrap from "@feature/place/queries/postSpaceScrap";
import { usePathname } from "next/navigation";

export default function PlaceDetailTopBar({
  id,
  isScraped,
  handleScrapState,
  className,
}: Partial<TopBarProps>) {
  const pathname = usePathname();
  const handleScrapClick = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const userInfo = await getSession();
    if (!userInfo) {
      location.replace("/login");
    } else {
      if (isScraped) {
        const res = await DeleteSpaceScrap(id as number);
        if (res.status === 200) {
          handleScrapState && handleScrapState(false);
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      } else {
        const res = await PostSpaceScrap(id as number);
        if (res.status === 200) {
          handleScrapState && handleScrapState(true);
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      }
    }
  };
  const handleCopyLinkClick = () => {
    copyLink(process.env.PUBLIC_NEXT_SERVER_API + pathname);
  };
  return (
    <BasicTopBar className={className}>
      <div className="flex justify-end">
        {isScraped ? (
          <ScrapFill color="white" onClick={handleScrapClick} />
        ) : (
          <ScrapLine color="white" onClick={handleScrapClick} />
        )}

        <LinkIcon className="ml-[0.8rem]" onClick={handleCopyLinkClick} />
      </div>
    </BasicTopBar>
  );
}
