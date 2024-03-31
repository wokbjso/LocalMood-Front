import MenuIcon from "@common/assets/icons/menu/MenuIcon";
import CurationMenuModal from "../CurationModal/CurationMenuModal/CurationMenuModal";
import { twMerge } from "tailwind-merge";

interface CurationMenuIconProps {
  menuModalInfo: {
    open: boolean;
    curationId: number;
    hasCopyLink?: boolean;
    handleModalFn: (state: boolean) => void;
  };
  toastOutside?: boolean;
  outsideOpenToast?: (text: string) => void;
  showAt: "card" | "topBar";
  className?: string;
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function CurationMenuIcon({
  menuModalInfo,
  toastOutside,
  outsideOpenToast,
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
        open={menuModalInfo.open}
        triggeredAt={showAt}
        curationId={menuModalInfo.curationId}
        hasCopyLink={menuModalInfo.hasCopyLink}
        handleModalFn={menuModalInfo.handleModalFn}
        toastOutside={toastOutside}
        outsideOpenToast={outsideOpenToast}
      />
    </>
  );
}
