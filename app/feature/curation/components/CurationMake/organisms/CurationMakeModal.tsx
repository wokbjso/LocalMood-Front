import ButtonLock from "@/feature/curation/components/CurationMake/molecules/ButtonLock";
import UseCurationMake from "../../../hooks/CurationMake/useCurationMake";
import Modal from "@/common/components/ui/modal/Modal";
import CloseIcon from "@/common/assets/icons/close/CloseIcon";
import CurationTitleInput from "../molecules/CurationTitleInput";
import Button from "@/common/components/ui/buttons/Button/Button";
import { useSetRecoilState } from "recoil";
import useMakeCuration from "@/feature/curation/queries/useMakeCuration";
import useEditCuration from "@/feature/curation/queries/useEditCuration";
import { queryFetchingSelector } from "@/common/state/query-fetching";
import CurationMakeKeyword from "./CurationMakeKeyword";

interface CurationMakeProps {
  isOpen: boolean;
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
  isOpen,
  closeModal,
  curationInfo,
  editMode = false,
}: CurationMakeProps) {
  const { curationMakeData, resetCurationMakeData, handlers } = UseCurationMake(
    editMode,
    curationInfo
  );

  const setIsQueryFetching = useSetRecoilState(queryFetchingSelector);

  const { mutate: makeCuration } = useMakeCuration();
  const { mutate: editCuration } = useEditCuration();

  const closeIconClicked = () => {
    if (!editMode) {
      resetCurationMakeData();
    }
    closeModal();
  };

  const getConcatenatedKeywords = (keywords: { [key: string]: string }) => {
    const concatenatedKeywords = Object.values(keywords)
      .filter((value) => value.length > 0)
      .join(", ");
    return concatenatedKeywords;
  };

  const getSendingCurationData = () => {
    return {
      title: curationMakeData.curation_name,
      keyword: getConcatenatedKeywords(curationMakeData.keyword),
      privacy: curationMakeData.open,
    };
  };

  const executeEditCuration = () => {
    setIsQueryFetching(true);
    editCuration({
      id: curationInfo?.id,
      ...getSendingCurationData(),
    });
  };

  const executeMakeCuration = () => {
    setIsQueryFetching(true);
    resetCurationMakeData();
    makeCuration(getSendingCurationData());
  };

  const handleButtonClick = async () => {
    if (editMode) {
      executeEditCuration();
    } else {
      executeMakeCuration();
    }
    closeModal();
  };

  const isSameWithInitial = () => {
    if (
      curationMakeData.curation_name === curationInfo?.title &&
      curationMakeData.open === curationInfo.privacy &&
      JSON.stringify(
        Object.values(curationMakeData.keyword).filter(
          (value) => value.length > 0
        )
      ) ===
        JSON.stringify(
          curationInfo.keyword.map((k) => {
            return k.trim();
          })
        )
    )
      return true;
    return false;
  };

  const isSubmitEnabled = (curationMakeData: {
    curation_name: string;
    open: boolean;
    keyword: { [key: string]: string };
  }) => {
    const isTitleEntered = curationMakeData.curation_name.trim() !== "";
    const selectedFiltersCount = Object.keys(curationMakeData.keyword).filter(
      (k) => curationMakeData.keyword[k].length > 0
    ).length;

    return isTitleEntered && selectedFiltersCount >= 2;
  };

  return (
    isOpen && (
      <Modal className="h-[94%]">
        <div className="bg-white h-full">
          <div className="h-full p-[2rem] flex flex-col items-center">
            <div
              className="w-full grid justify-items-end"
              onClick={closeIconClicked}
            >
              <CloseIcon />
            </div>
            <div className="w-full">
              <CurationTitleInput
                placeholder="새 큐레이션"
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
                curationMakeData={curationMakeData}
                handleKeyword={handlers.changeKeyword}
                editMode={editMode}
              />
            </div>
          </div>
        </div>
        <div className="absolute w-full px-[2rem] bottom-0 left-0 bg-white h-[7.4rem]">
          <Button
            onClick={handleButtonClick}
            disabled={
              editMode
                ? isSameWithInitial() || !isSubmitEnabled(curationMakeData)
                : !isSubmitEnabled(curationMakeData)
            }
            className="w-full"
          >
            {editMode ? "수정" : "완료"}
          </Button>
        </div>
      </Modal>
    )
  );
}
