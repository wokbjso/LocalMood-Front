import MenuIcon from "@common/assets/icons/menu/MenuIcon";
import CurationMenuModal from "../CurationModal/CurationMenuModal/CurationMenuModal";
import { twMerge } from "tailwind-merge";

interface CurationMenuIconProps {
  menuModalInfo: {
    isOpened: boolean;
    curationId: number;
    hasCopyLink?: boolean;
    closeModal: () => void;
  };
  showAt: "card" | "topBar";
  className?: string;
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function CurationMenuIcon({
  menuModalInfo,
  showAt,
  className,
  onClick,
}: CurationMenuIconProps) {
  return (
    <>
      <MenuIcon
        className={twMerge("cursor-pointer", className)}
        onClick={onClick}
      />
      <CurationMenuModal
        open={menuModalInfo.isOpened}
        triggeredAt={showAt}
        curationId={menuModalInfo.curationId}
        hasCopyLink={menuModalInfo.hasCopyLink}
        closeModal={menuModalInfo.closeModal}
      />
    </>
  );
}
