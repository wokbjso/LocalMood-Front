import CloseIcon from "@/common/assets/icons/close/CloseIcon";
import Modal from "@/common/components/ui/modal/Modal";
import CurationMakeButton from "../../CurationMake/molecules/CurationMakeButton";
import useOpenCurationMakeModal from "../../../hooks/CurationMake/useOpenCurationMakeModal";
import { useSetRecoilState } from "recoil";
import { myCurationModalInfoSelector } from "@/common/state/myCurationModal";
import { twMerge } from "tailwind-merge";
import Title from "@/common/components/ui/text/Title";
import MyCurationCardList from "./MyCurationCardList";
import ApiErrorFallback from "@/common/components/ui/error/ApiErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import {
  QueryClient,
  QueryErrorResetBoundary,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";

interface MyCurationModalProps {
  open: boolean;
  title: string;
  spaceId: number;
  handleModalFn?: (state: boolean) => void;
}

//Organism
export default function MyCurationModal({
  open,
  title,
  spaceId,
}: MyCurationModalProps) {
  const setMyCurationModal = useSetRecoilState(myCurationModalInfoSelector);

  const { isModalOpen, openModal, closeModal } = useOpenCurationMakeModal();

  const handleModalClose = () => {
    setMyCurationModal({
      open: false,
      spaceId: -1,
    });
  };

  const handleMakeCurationClick = () => {
    openModal();
  };
  return (
    <>
      {open && (
        <Modal className={twMerge("px-[2rem] h-[48%]")}>
          <Title title={title} className="pt-[2.4rem] headline2-semibold" />
          <CloseIcon
            className="absolute right-[2.4rem] top-[4rem]"
            onClick={handleModalClose}
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
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                FallbackComponent={ApiErrorFallback}
              >
                <MyCurationCardList
                  spaceId={spaceId}
                  handleModalClose={handleModalClose}
                />
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </Modal>
      )}
    </>
  );
}
