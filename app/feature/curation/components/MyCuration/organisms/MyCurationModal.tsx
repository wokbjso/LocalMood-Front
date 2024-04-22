import CloseIcon from "@common/assets/icons/close/CloseIcon";
import Modal from "@common/components/ui/modal/Modal";
import UseDeferredComponent from "@common/hooks/useDeferredComponent";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import { Suspense, lazy } from "react";
import CurationMakeButton from "../../CurationMake/molecules/CurationMakeButton";
import PostSavePlaceAtCuration from "@feature/curation/queries/postSavePlaceAtCuration";
import revalidateScrapSpace from "@feature/place/actions/revalidateScrapSpace";
import revalidateMyCuration from "@feature/curation/actions/revalidateMyCuration";
import revalidatePlaceDetail from "@feature/place/actions/revalidatePlaceDetail";
import revalidateCurationDetail from "@feature/curation/actions/revalidateCurationDetail";
import revalidateTextSearchPlaceData from "@feature/search/actions/revalidateTextSearchPlaceData";
import revalidateKeywordSearchPlaceData from "@feature/search/actions/revalidateKeywordSearchPlaceData";
import useOpenCurationMakeModal from "../../CurationMake/hooks/useOpenCurationMakeModal";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@common/state/toast";
import { myCurationModalInfoSelector } from "@common/state/myCurationModal";
import revalidateHomeRecommend from "@feature/place/actions/revalidateHomeRecommend";
import NoCurationText from "../../CurationInfo/atoms/NoCurationText";
const MyCurationCard = lazy(() => import("../molecules/MyCurationCard"));

interface MyCurationModalProps {
  open: boolean;
  title: string;
  myCurationData?: MyCurationResponse;
  spaceId: number;
  handleModalFn?: (state: boolean) => void;
}

//Organism
export default function MyCurationModal({
  open,
  title,
  myCurationData,
  spaceId,
}: MyCurationModalProps) {
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

  const savePlaceAtCuration = async (curationId: number) => {
    const res = await PostSavePlaceAtCuration(curationId, spaceId);
    return res.status;
  };

  const revalidateRelatedData = () => {
    revalidateHomeRecommend();
    revalidateScrapSpace();
    revalidateMyCuration();
    revalidatePlaceDetail();
    revalidateCurationDetail();
    revalidateTextSearchPlaceData();
    revalidateKeywordSearchPlaceData();
  };

  const handleMyCurationCardClick = async (curationId: number) => {
    handleModalCloseClick();
    setToast({
      open: true,
      text: "큐레이션에 장소가 추가되었습니다.",
    });
    if ((await savePlaceAtCuration(curationId)) === 200) {
      revalidateRelatedData();
    } else {
      alert("큐레이션에 장소 추가 도중 오류가 발생했습니다");
    }
  };
  return (
    <>
      {open && (
        <Modal className="px-[2rem] h-[48%] min-h-[10%]">
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
              closeModal: closeModal,
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
            <div className="flex flex-col items-start gap-[0.8rem] h-full overflow-y-scroll pb-[180px]">
              {myCurationData && myCurationData?.curation.length > 0 ? (
                myCurationData?.curation.map((curationData) => (
                  <MyCurationCard
                    key={curationData.id}
                    spaceId={spaceId}
                    curationData={curationData}
                    onClick={() => handleMyCurationCardClick(curationData.id)}
                  />
                ))
              ) : (
                <NoCurationText
                  text="아직 생성한 큐레이션이 없습니다"
                  className="h-[40%] flex justify-center w-full"
                />
              )}
            </div>
          </Suspense>
        </Modal>
      )}
    </>
  );
}
