import CloseIcon from "@common/assets/icons/close/CloseIcon";
import Modal from "@common/components/ui/modal/Modal";
import UseDeferredComponent from "@common/hooks/useDeferredComponent";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import { Suspense, lazy } from "react";
import CurationMakeButton from "../../CurationMake/CurationMakeButton";
import PostSavePlaceAtCuration from "@feature/curation/queries/postSavePlaceAtCuration";
import revalidateScrapSpace from "@feature/place/actions/revalidateScrapSpace";
import revalidateMyCuration from "@feature/curation/actions/revalidateMyCuration";
import revalidatePlaceDetail from "@feature/place/actions/revalidatePlaceDetail";
import revalidateCurationDetail from "@feature/curation/actions/revalidateCurationDetail";
import revalidateTextSearchPlaceData from "@feature/search/actions/revalidateTextSearchPlaceData";
import revalidateKeywordSearchPlaceData from "@feature/search/actions/revalidateKeywordSearchPlaceData";
import useOpenCurationMakeModal from "../../CurationMake/useOpenCurationMakeModal";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@common/state/toast";
const MyCurationCard = lazy(() => import("./MyCurationCard"));

interface MyCurationModalProps {
  open: boolean;
  title: string;
  myCurationData?: MyCurationResponse;
  spaceId: number;
  handleModalFn: (state: boolean) => void;
}

export default function MyCurationModal({
  open,
  title,
  myCurationData,
  spaceId,
  handleModalFn,
}: MyCurationModalProps) {
  const setToast = useSetRecoilState(toastInfoSelector);

  const { isModalOpen, openModal, handlers } = useOpenCurationMakeModal();

  const handleModalCloseClick = () => {
    handleModalFn(false);
  };

  const handleMakeCurationClick = () => {
    openModal();
  };

  const savePlaceAtCuration = async (curationId: number) => {
    const res = await PostSavePlaceAtCuration(curationId, spaceId);
    return res.status;
  };

  const revalidateRelatedData = () => {
    revalidateScrapSpace();
    revalidateMyCuration();
    revalidatePlaceDetail();
    revalidateCurationDetail();
    revalidateTextSearchPlaceData();
    revalidateKeywordSearchPlaceData();
  };

  const handleMyCurationCardClick = async (curationId: number) => {
    if ((await savePlaceAtCuration(curationId)) === 200) {
      setToast({
        open: true,
        text: "큐레이션에 장소가 추가되었습니다.",
      });
      revalidateRelatedData();
    } else {
      alert("오류가 발생했습니다!");
    }
  };
  return (
    <>
      {open && (
        <Modal className="px-[2rem]">
          <div className="flex pt-[2.4rem] pr-[18rem] headline2-semibold">
            {title}
          </div>
          <CloseIcon
            className="absolute right-[2.4rem] top-[4rem]"
            onClick={handleModalCloseClick}
          />
          <CurationMakeButton
            size="large"
            text="새 큐레이션 만들기"
            curationMakeModalInfo={{
              open: isModalOpen,
              handleModalFn: handlers.handleModal,
            }}
            onClick={handleMakeCurationClick}
          />
          <Suspense
            fallback={
              <UseDeferredComponent>
                <div className="w-full h-[6rem] bg-background-gray-2 animate-pulse" />
              </UseDeferredComponent>
            }
          >
            <div className="flex flex-col items-start gap-[0.8rem]">
              {myCurationData?.curation.map((curationData) => (
                <MyCurationCard
                  key={curationData.id}
                  spaceId={spaceId}
                  curationData={curationData}
                  onClick={() => handleMyCurationCardClick(curationData.id)}
                />
              ))}
            </div>
          </Suspense>
        </Modal>
      )}
    </>
  );
}
