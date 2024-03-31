import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import Toast from "@common/components/ui/toast/Toast";

interface CurationScrapIconProps {
  isScraped: boolean;
  toastInfo: {
    open: boolean;
    text: string;
  };
  onClick?: () => void;
}

export default function CurationScrapIcon({
  isScraped,
  toastInfo,
  onClick,
}: CurationScrapIconProps) {
  return (
    <>
      {isScraped ? (
        <ScrapFill onClick={onClick} />
      ) : (
        <ScrapLine color="#9E9E9E" onClick={onClick} />
      )}
      <Toast open={toastInfo.open} text={toastInfo.text} />
    </>
  );
}
