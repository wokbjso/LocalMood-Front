import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { twMerge } from "tailwind-merge";

interface PlaceInfoCardTopScrapIconProps {
  isScraped: boolean;
  cardSize?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

//Atom
export default function PlaceInfoCardTopScrapIcon({
  isScraped,
  cardSize,
  onClick,
}: PlaceInfoCardTopScrapIconProps) {
  return (
    <>
      {isScraped ? (
        <ScrapFill
          className={twMerge(
            "absolute right-[0.6rem]",
            cardSize === "small" && "top-[0.8rem]"
          )}
          color={cardSize === "small" ? "white" : undefined}
          onClick={onClick}
        />
      ) : (
        <ScrapLine
          className={twMerge(
            "absolute right-[0.6rem]",
            cardSize === "small" && "top-[0.8rem]"
          )}
          color={cardSize === "small" ? "white" : undefined}
          onClick={onClick}
        />
      )}
    </>
  );
}
