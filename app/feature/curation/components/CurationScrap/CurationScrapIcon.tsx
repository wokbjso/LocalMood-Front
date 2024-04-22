import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapShadow from "@common/assets/icons/scrap/ScrapShadow";

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
              <ScrapShadow onClick={onClick} className={className} />
            </div>
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
