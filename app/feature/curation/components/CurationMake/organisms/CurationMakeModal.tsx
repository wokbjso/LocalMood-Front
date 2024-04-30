import TextField from "@common/components/ui/textField/TextField";
import ButtonLock from "@common/components/ui/buttons/Button/ButtonLock";
import CurationMakeKeyword from "./CurationMakeKeyword";
import UseCurationMake from "../../../hooks/CurationMake/useCurationMake";
import Modal from "@common/components/ui/modal/Modal";
import CloseIcon from "@common/assets/icons/close/CloseIcon";

interface CurationMakeProps {
  open: boolean;
  openedAt?: "page" | "modal";
  closeModal: () => void;
  curationInfo?: {
    id: number;
    privacy?: boolean;
    keyword: string[];
    title: string;
  };
  editMode?: boolean;
}

//Organism
export default function CurationMakeModal({
  open,
  openedAt = "modal",
  closeModal,
  curationInfo,
  editMode = false,
}: CurationMakeProps) {
  const { curationMakeData, resetCurationMakeData, handlers } = UseCurationMake(
    editMode,
    curationInfo
  );
  const closeIconClicked = () => {
    if (!editMode) {
      resetCurationMakeData();
    }
    closeModal();
  };
  return (
    open && (
      <Modal className="h-[94%]">
        <div className="bg-white">
          <div className="h-[81.2rem] p-[2rem] flex flex-col items-center">
            <div
              className="w-full grid justify-items-end"
              onClick={closeIconClicked}
            >
              <CloseIcon />
            </div>
            <div className="w-full">
              <TextField
                onChange={handlers.changeCurationName}
                initialValue={curationMakeData.curation_name}
              />
            </div>
            <div className="w-full pt-[1.6rem] grid justify-items-end">
              <ButtonLock
                onClick={handlers.changeCurationOpen}
                initialValue={curationMakeData.open}
              />
            </div>
            <div className="w-full pt-[3.2rem] overflow-auto">
              <CurationMakeKeyword
                openedAt={openedAt}
                curationMakeData={curationMakeData}
                resetCurationMakeData={resetCurationMakeData}
                closeModal={closeModal}
                onClick={handlers.changeKeyword}
                editMode={editMode}
                curationInfo={curationInfo}
              />
            </div>
          </div>
        </div>
      </Modal>
    )
  );
}
