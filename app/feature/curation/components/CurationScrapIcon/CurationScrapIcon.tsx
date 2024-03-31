import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapShadow from "@common/assets/icons/scrap/ScrapShadow";
import Toast from "@common/components/ui/toast/Toast";

interface CurationScrapIconProps {
  isScraped: boolean;
  backgroundBrightness: "light" | "dark";
  toastInfo: {
    open: boolean;
    text: string;
  };
  onClick?: () => void;
  className?: string;
}

export default function CurationScrapIcon({
  isScraped,
  backgroundBrightness,
  toastInfo,
  onClick,
  className,
}: CurationScrapIconProps) {
  return (
    <>
      {isScraped ? (
        <>
          {backgroundBrightness === "dark" && (
            <ScrapShadow onClick={onClick} className={className} />
          )}
          {backgroundBrightness === "light" && (
            <ScrapFill onClick={onClick} className={className} />
          )}
        </>
      ) : (
        <ScrapLine
          color={backgroundBrightness === "dark" ? "white" : "#9E9E9E"}
          onClick={onClick}
          className={className}
        />
      )}
      <Toast open={toastInfo.open} text={toastInfo.text} />
    </>
  );
}
