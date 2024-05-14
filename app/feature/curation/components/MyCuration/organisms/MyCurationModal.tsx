import { lazy } from "react";
import CloseIcon from "@/common/assets/icons/close/CloseIcon";
import Modal from "@/common/components/ui/modal/Modal";
import UseDeferredComponent from "@/common/hooks/useDeferredComponent";
import CurationMakeButton from "../../CurationMake/molecules/CurationMakeButton";
import useOpenCurationMakeModal from "../../../hooks/CurationMake/useOpenCurationMakeModal";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@/common/state/toast";
import { myCurationModalInfoSelector } from "@/common/state/myCurationModal";
import { twMerge } from "tailwind-merge";
import useSavePlaceAtCuration from "@/feature/curation/queries/useSavePlaceAtCuration";
import { MyCurationResponse } from "@/feature/curation/queries/dto/my-curation";
import Title from "@/common/components/ui/text/Title";
import MyCurationCardSkeleton from "../skeleton/MyCurationCardSkeleton";
const MyCurationCard = lazy(() => import("./MyCurationCard"));

interface MyCurationModalProps {
  open: boolean;
  title: string;
  myCurationData?: MyCurationResponse;
  isFetching: boolean;
  spaceId: number;
  handleModalFn?: (state: boolean) => void;
}

//Organism
export default function MyCurationModal({
  open,
  title,
  myCurationData,
  isFetching,
  spaceId,
}: MyCurationModalProps) {
  const { mutate: savePlace } = useSavePlaceAtCuration();

  const setToast = useSetRecoilState(toastInfoSelector);

  const setMyCurationModal = useSetRecoilState(myCurationModalInfoSelector);

  const { isModalOpen, openModal, closeModal } = useOpenCurationMakeModal();

  const handleModalCloseClick = () => {
    setMyCurationModal({
      open: false,
      spaceId: -1,
    });
  };

  const handleMakeCurationClick = () => {
    openModal();
  };

  const handleMyCurationCardClick = async (curationId: number) => {
    handleModalCloseClick();
    setToast({
      open: true,
      text: "큐레이션에 장소가 추가되었습니다.",
    });
    savePlace({ curationId, spaceId });
  };

  return (
    <>
      {open && (
        <Modal className={twMerge("px-[2rem] h-[48%]")}>
          <Title title={title} className="pt-[2.4rem] headline2-semibold" />
          <CloseIcon
            className="absolute right-[2.4rem] top-[4rem]"
            onClick={handleModalCloseClick}
          />
          <CurationMakeButton
            size="large"
            text="새 큐레이션 만들기"
            curationMakeModalInfo={{
              open: isModalOpen,
              closeModal: closeModal,
            }}
            onClick={handleMakeCurationClick}
          />
          {isFetching ? (
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
          )}
        </Modal>
      )}
    </>
  );
}
