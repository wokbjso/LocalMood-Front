import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import LinkIcon from "@common/assets/icons/link/LinkIcon";
import { TopBarProps } from "../type";
import BasicTopBar from "../BasicTopBar/BasicTopBar";

export default function DetailTopBar({ className }: Partial<TopBarProps>) {
  return (
    <BasicTopBar className={className}>
      <div className="flex justify-end">
        <ScrapLine color="white" />
        <LinkIcon className="ml-[0.8rem]" />
      </div>
    </BasicTopBar>
  );
}
