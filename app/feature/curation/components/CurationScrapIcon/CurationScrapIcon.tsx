import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapShadow from "@common/assets/icons/scrap/ScrapShadow";
import Toast from "@common/components/ui/toast/Toast";

interface CurationScrapIconProps {
  isScraped: boolean;
  backgroundBrightness: "light" | "dark";
  onClick?: () => void;
  className?: string;
}

export default function CurationScrapIcon({
  isScraped,
  backgroundBrightness,
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
    </>
  );
}
