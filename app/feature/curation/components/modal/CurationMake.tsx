import GrabModal from "@common/components/ui/modal/GrabModal";
import CloseIcon from "@common/assets/icons/close/close.svg";
import TextField from "@common/components/ui/textField/TextField";

export default function CurationMake() {
  return (
    <div>
      <GrabModal />
      <div className="h-[81.2rem] p-[2rem] flex flex-col items-center">
        <div className="w-full grid justify-items-end">
          <CloseIcon />
        </div>
        <TextField />
      </div>
    </div>
  );
}
