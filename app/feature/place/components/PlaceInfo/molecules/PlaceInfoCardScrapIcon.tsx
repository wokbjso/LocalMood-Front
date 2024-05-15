import ScrapFillIcon from "@/common/assets/icons/scrap/ScrapFillIcon";
import ScrapLineIcon from "@/common/assets/icons/scrap/ScrapLineIcon";
import { twMerge } from "tailwind-merge";

interface PlaceInfoCardScrapIconProps {
  isScraped: boolean;
  cardSize?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

//Molecule
export default function PlaceInfoCardScrapIcon({
  isScraped,
  cardSize,
  onClick,
}: PlaceInfoCardScrapIconProps) {
  return (
    <>
      {isScraped ? (
        <ScrapFillIcon
          className={twMerge(
            "absolute right-[0.6rem]",
            cardSize === "small" && "top-[8px]"
          )}
          color={cardSize === "small" ? "white" : undefined}
          onClick={onClick}
        />
      ) : (
        <ScrapLineIcon
          className={twMerge(
            "absolute right-[0.6rem]",
            cardSize === "small" && "top-[8px]"
          )}
          color={cardSize === "small" ? "white" : undefined}
          onClick={onClick}
        />
      )}
    </>
  );
}
