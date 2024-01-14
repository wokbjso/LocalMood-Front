import GrabModal from "@common/components/ui/modal/GrabModal";
import CloseIcon from "@common/assets/icons/close/close.svg";
import TextField from "@common/components/ui/textField/TextField";
import ButtonLock from "@common/components/ui/buttons/Button/ButtonLock";
import CurationMakeKeyword from "./CurationMakeKeyword";

interface CurationMakeProps {
  onClose: () => void;
}

export default function CurationMake({ onClose }: CurationMakeProps) {
  return (
    <div>
      <GrabModal />
      <div className="bg-white">
        <div className="h-[81.2rem] p-[2rem] flex flex-col items-center">
          <div className="w-full grid justify-items-end">
            <CloseIcon onClick={onClose} />
          </div>
          <div className="w-full">
            <TextField />
          </div>
          <div className="w-full pt-[1.6rem] grid justify-items-end">
            <ButtonLock />
          </div>
          <div className="w-full pt-[3.2rem]">
            <CurationMakeKeyword />
          </div>
        </div>
      </div>
    </div>
  );
}
