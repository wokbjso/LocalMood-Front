import AddIcon from "@/common/assets/icons/add/AddIcon";
import CurationMakeModal from "../organisms/CurationMakeModal";
import { twMerge } from "tailwind-merge";
import AddLineIcon from "@/common/assets/icons/add/AddLineIcon";

interface CurationMakeButtonProps {
  size: "small" | "large";
  text: string;
  curationMakeModalInfo: {
    open: boolean;
    openedAt?: "page" | "modal";
    closeModal: () => void;
  };
  onClick?: (state: boolean) => void;
}

//Molecule
export default function CurationMakeButton({
  size,
  text,
  curationMakeModalInfo,
  onClick,
}: CurationMakeButtonProps) {
  return (
    <>
      <div
        className={twMerge(
          "flex items-center",
          size === "large" ? "gap-[1.2rem] mt-[2rem] mb-[1.2rem]" : ""
        )}
        onClick={() => onClick && onClick(true)}
      >
        <div
          className={
            size === "large"
              ? "w-[6rem] h-[6rem] bg-background-gray-2 rounded-lg flex p-[2.4rem]"
              : "flex items-center"
          }
        >
          {size === "large" ? <AddIcon /> : <AddLineIcon />}
        </div>
        <span
          className={twMerge(
            "text-text-gray-8",
            size === "large" ? "body1-medium" : "body2-semibold ml-[0.4rem]"
          )}
        >
          {text}
        </span>
      </div>
      <CurationMakeModal
        open={curationMakeModalInfo.open}
        openedAt={curationMakeModalInfo.openedAt}
        closeModal={curationMakeModalInfo.closeModal}
      />
    </>
  );
}
