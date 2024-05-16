import { lazy } from "react";
import UseDeferredComponent from "@/common/hooks/useDeferredComponent";
import MyCurationCardSkeleton from "../skeleton/MyCurationCardSkeleton";
import { twMerge } from "tailwind-merge";
import { MyCurationModalProps } from "./MyCurationModal";
import useSavePlaceAtCuration from "@/feature/curation/queries/useSavePlaceAtCuration";
const MyCurationCard = lazy(() => import("./MyCurationCard"));
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@/common/state/toast";

interface MyCurationCardListProps {
  isFetching: boolean;
}

export default function MyCurationCardList({
  myCurationData,
  spaceId,
  isFetching,
  handleModalClose,
}: Pick<MyCurationModalProps, "myCurationData" | "spaceId"> &
  MyCurationCardListProps & { handleModalClose: () => void }) {
  const { mutate: savePlace } = useSavePlaceAtCuration();

  const setToast = useSetRecoilState(toastInfoSelector);

  const handleMyCurationCardClick = async (curationId: number) => {
    handleModalClose();
    setToast({
      open: true,
      text: "큐레이션에 장소가 추가되었습니다.",
    });
    savePlace({ curationId, spaceId });
  };

  return isFetching ? (
    <UseDeferredComponent>
      <MyCurationCardSkeleton />
    </UseDeferredComponent>
  ) : (
    <div
      className={twMerge(
        "flex flex-col items-start gap-[0.8rem]",
        myCurationData && myCurationData.curation.length > 1
          ? "h-full overflow-auto pb-[170px]"
          : ""
      )}
    >
      {myCurationData?.curation.map((curationData) => (
        <MyCurationCard
          key={curationData.id}
          spaceId={spaceId}
          curationData={curationData}
          onClick={() => handleMyCurationCardClick(curationData.id)}
        />
      ))}
    </div>
  );
}
