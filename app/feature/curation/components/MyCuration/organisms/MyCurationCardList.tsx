import { lazy } from "react";
import UseDeferredComponent from "@/common/hooks/useDeferredComponent";
import MyCurationCardSkeleton from "../skeleton/MyCurationCardSkeleton";
import { twMerge } from "tailwind-merge";
import useSavePlaceAtCuration from "@/feature/curation/queries/useSavePlaceAtCuration";
const MyCurationCard = lazy(() => import("./MyCurationCard"));
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@/common/state/toast";
import useGetMyCuration from "@/feature/curation/queries/useGetMyCuration";

interface MyCurationCardListProps {
  spaceId: number;
  handleModalClose: () => void;
}

export default function MyCurationCardList({
  spaceId,
  handleModalClose,
}: MyCurationCardListProps) {
  const { data: myCurationData, isFetching } = useGetMyCuration();
  const { mutate: savePlace } = useSavePlaceAtCuration(spaceId);

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
