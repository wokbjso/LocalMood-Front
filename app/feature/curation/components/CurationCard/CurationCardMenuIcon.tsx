import MenuIcon from "@common/assets/icons/menu/MenuIcon";
import CurationMenuModal from "../CurationModal/CurationMenuModal/CurationMenuModal";

interface CurationCardMenuIconProps {
  menuModalInfo: {
    open: boolean;
    curationId: number;
    hasCopyLink?: boolean;
    handleModalFn: (state: boolean) => void;
  };
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function CurationCardMenuIcon({
  menuModalInfo,
  onClick,
}: CurationCardMenuIconProps) {
  return (
    <>
      <MenuIcon
        className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
        onClick={onClick}
      />
      <CurationMenuModal
        open={menuModalInfo.open}
        curationId={menuModalInfo.curationId}
        hasCopyLink={menuModalInfo.hasCopyLink}
        handleModalFn={menuModalInfo.handleModalFn}
      />
    </>
  );
}
