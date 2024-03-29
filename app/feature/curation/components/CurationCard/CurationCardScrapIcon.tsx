import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import Toast from "@common/components/ui/toast/Toast";

interface CurationCardScrapIconProps {
  isScraped: boolean;
  toastInfo: {
    open: boolean;
    text: string;
  };
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function CurationCardScrapIcon({
  isScraped,
  toastInfo,
  onClick,
}: CurationCardScrapIconProps) {
  return (
    <>
      {isScraped ? (
        <ScrapFill
          className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
          onClick={onClick}
        />
      ) : (
        <ScrapLine
          className="absolute top-[1.6rem] right-[1.2rem] cursor-pointer"
          onClick={onClick}
        />
      )}
      <Toast open={toastInfo.open} text={toastInfo.text} />
    </>
  );
}
