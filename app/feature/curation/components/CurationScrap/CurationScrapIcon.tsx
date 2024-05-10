import ScrapFillIcon from "@/common/assets/icons/scrap/ScrapFillIcon";
import ScrapLineIcon from "@/common/assets/icons/scrap/ScrapLineIcon";
import ScrapShadowIcon from "@/common/assets/icons/scrap/ScrapShadowIcon";

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
            <div className="w-[3rem] h-[3rem] bg-red-400">
              <ScrapShadowIcon onClick={onClick} className={className} />
            </div>
          )}
          {backgroundBrightness === "light" && (
            <ScrapFillIcon onClick={onClick} className={className} />
          )}
        </>
      ) : (
        <ScrapLineIcon
          color={backgroundBrightness === "dark" ? "white" : "#9E9E9E"}
          onClick={onClick}
          className={className}
        />
      )}
    </>
  );
}
