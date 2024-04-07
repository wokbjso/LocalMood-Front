import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import MyCurationModal from "@feature/curation/components/CurationModal/MyCurationModal/MyCurationModal";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import { twMerge } from "tailwind-merge";

interface PlaceInfoCardTopScrapIconProps {
  isScraped: boolean;
  cardSize?: string;
  curationModalInfo: {
    open: boolean;
    title: string;
    spaceId: number;
    myCurationData?: MyCurationResponse;
    handleModalFn: (state: boolean) => void;
  };
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function PlaceInfoCardTopScrapIcon({
  isScraped,
  cardSize,
  curationModalInfo,
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
      <MyCurationModal
        open={curationModalInfo.open}
        title={curationModalInfo.title}
        spaceId={curationModalInfo.spaceId}
        myCurationData={curationModalInfo.myCurationData}
        handleModalFn={curationModalInfo.handleModalFn}
      />
    </>
  );
}
