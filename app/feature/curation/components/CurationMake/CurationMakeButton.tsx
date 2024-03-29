import AddIcon from "@common/assets/icons/add/AddIcon";
import CurationMakeModal from "./CurationMakeModal";

interface CurationMakeButtonProps {
  text: string;
  curationMakeModalInfo: {
    open: boolean;
    handleModalFn: (state: boolean) => void;
  };
  onClick?: (state: boolean) => void;
}

export default function CurationMakeButton({
  text,
  curationMakeModalInfo,
  onClick,
}: CurationMakeButtonProps) {
  return (
    <>
      <div
        className="flex items-center gap-[1.2rem] mt-[2rem] mb-[1.2rem]"
        onClick={() => onClick && onClick(true)}
      >
        <div className="w-[6rem] h-[6rem] bg-background-gray-2 rounded-lg flex p-[2.4rem]">
          <AddIcon />
        </div>
        <span className="body1-medium text-text-gray-8">{text}</span>
      </div>
      <CurationMakeModal
        open={curationMakeModalInfo.open}
        handleModalFn={curationMakeModalInfo.handleModalFn}
      />
    </>
  );
}
