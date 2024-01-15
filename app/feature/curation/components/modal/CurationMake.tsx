import GrabModal from "@common/components/ui/modal/GrabModal";
import CloseIcon from "@common/assets/icons/close/close.svg";
import TextField from "@common/components/ui/textField/TextField";
import ButtonLock from "@common/components/ui/buttons/Button/ButtonLock";
import CurationMakeKeyword from "./CurationMakeKeyword";

interface CurationMakeProps {
  isOpen: boolean;
  handleOpen: (state: boolean) => void;
}

export default function CurationMake({
  isOpen,
  handleOpen,
}: CurationMakeProps) {
  const closeIconClicked = () => {
    handleOpen(false);
  };
  return (
    isOpen && (
      <>
        <div className="absolute h-[100vh] w-full bg-black opacity-[0.4] z-10 bottom-0 left-0" />
        <div className="fixed top-[4.6rem] bottom-0 left-0 right-0 z-10">
          <GrabModal />
          <div className="bg-white">
            <div className="h-[81.2rem] p-[2rem] flex flex-col items-center">
              <div
                className="w-full grid justify-items-end"
                onClick={closeIconClicked}
              >
                <CloseIcon />
              </div>
              <div className="w-full">
                <TextField />
              </div>
              <div className="w-full pt-[1.6rem] grid justify-items-end">
                <ButtonLock />
              </div>
              <div className="w-full pt-[3.2rem] overflow-auto">
                <CurationMakeKeyword />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
