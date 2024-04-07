import TextField from "@common/components/ui/textField/TextField";
import ButtonLock from "@common/components/ui/buttons/Button/ButtonLock";
import CurationMakeKeyword from "./CurationMakeKeyword";
import UseCurationMake from "./useCurationMake";
import Modal from "@common/components/ui/modal/Modal";
import CloseIcon from "@common/assets/icons/close/CloseIcon";

interface CurationMakeProps {
  open: boolean;
  handleModalFn: (state: boolean) => void;
}

export default function CurationMakeModal({
  open,
  handleModalFn,
}: CurationMakeProps) {
  const { curationMakeData, resetCurationMakeData, handlers } =
    UseCurationMake();
  const closeIconClicked = () => {
    resetCurationMakeData();
    handleModalFn(false);
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
              <TextField onChange={handlers.changeCurationName} />
            </div>
            <div className="w-full pt-[1.6rem] grid justify-items-end">
              <ButtonLock onClick={handlers.changeCurationOpen} />
            </div>
            <div className="w-full pt-[3.2rem] overflow-auto">
              <CurationMakeKeyword
                curationMakeData={curationMakeData}
                resetCurationMakeData={resetCurationMakeData}
                handleOpen={handleModalFn}
                onClick={handlers.changeKeyword}
              />
            </div>
          </div>
        </div>
      </Modal>
    )
  );
}
