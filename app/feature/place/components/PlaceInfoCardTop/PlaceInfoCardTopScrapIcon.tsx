import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import Toast from "@common/components/ui/toast/Toast";
import SavePlaceModal from "@feature/curation/components/CurationModal/SavePlaceModal/SavePlaceModal";
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
  toastInfo: {
    open: boolean;
    text: string;
  };
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export default function PlaceInfoCardTopScrapIcon({
  isScraped,
  cardSize,
  curationModalInfo,
  toastInfo,
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
      <SavePlaceModal
        open={curationModalInfo.open}
        spaceId={curationModalInfo.spaceId}
        myCurationData={curationModalInfo.myCurationData}
        handleModalFn={curationModalInfo.handleModalFn}
      />
      {<Toast open={toastInfo.open} text={toastInfo.text} />}
    </>
  );
}
