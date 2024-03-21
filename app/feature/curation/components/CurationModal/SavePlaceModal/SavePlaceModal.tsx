import AddIcon from "@common/assets/icons/add/AddIcon";
import CloseIcon from "@common/assets/icons/close/CloseIcon";
import Modal from "@common/components/ui/modal/Modal";
import UseDeferredComponent from "@common/hooks/useDeferredComponent";
import CurationMakeModal from "@feature/curation/components/CurationMake/CurationMakeModal";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import { Suspense, lazy, useState } from "react";
const SavePlaceModalMyCurationCard = lazy(
  () => import("./SavePlaceModalMyCurationCard")
);

interface SavePlaceModalProps {
  myCurationData?: MyCurationResponse;
  spaceId: number;
  handleModalFn: (state: boolean) => void;
}

export default function SavePlaceModal({
  myCurationData,
  spaceId,
  handleModalFn,
}: SavePlaceModalProps) {
  const [openMakeCurationModal, setOpenMakeCurationModal] = useState(false);
  const handleModalCloseClick = () => {
    handleModalFn(false);
  };
  const handleMakeCurationClick = () => {
    setOpenMakeCurationModal(true);
  };
  return (
    <>
      <Modal className="px-[2rem]">
        <div className="flex pt-[2.4rem] pr-[18rem] headline2-semibold">
          저장할 큐레이션
        </div>
        <CloseIcon
          className="absolute right-[2.4rem] top-[4rem]"
          onClick={handleModalCloseClick}
        />
        <div
          className="flex items-center gap-[1.2rem] mt-[2rem] mb-[1.2rem] body1-medium text-text-gray-8"
          onClick={handleMakeCurationClick}
        >
          <div className="w-[6rem] h-[6rem] bg-background-gray-2 rounded-lg flex p-[2.4rem]">
            <AddIcon />
          </div>
          <div>새 큐레이션 만들기</div>
        </div>
        <Suspense
          fallback={
            <UseDeferredComponent>
              <div className="w-full h-[6rem] bg-background-gray-2 animate-pulse" />
            </UseDeferredComponent>
          }
        >
          <div className="flex flex-col items-start gap-[0.8rem]">
            {myCurationData?.curation.map((curationData) => (
              <SavePlaceModalMyCurationCard
                key={curationData.id}
                curationData={curationData}
                spaceId={spaceId}
              />
            ))}
          </div>
        </Suspense>
      </Modal>
      <CurationMakeModal
        isOpen={openMakeCurationModal}
        handleOpen={setOpenMakeCurationModal}
      />
    </>
  );
}
