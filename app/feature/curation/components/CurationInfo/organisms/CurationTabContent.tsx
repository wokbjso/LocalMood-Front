"use client";

import Tab from "@common/components/ui/tab/Tab";
import { CurationProps } from "@feature/curation/type";
import CurationMakeButton from "../../CurationMake/molecules/CurationMakeButton";
import useOpenCurationMakeModal from "../../../hooks/CurationMake/useOpenCurationMakeModal";
import useTab from "@common/components/ui/tab/useTab";
import { CurationTabSections } from "@feature/curation/constants/curation-tab";
import MyCurationCount from "../molecules/MyCurationCount";
import NoCurationText from "../atoms/NoCurationText";
import CurationInfoCardLight from "../molecules/CurationInfoCardLight";
import CurationInfoCardDark from "../molecules/CurationInfoCardDark";
import useGetMyCuration from "@feature/curation/queries/useGetMyCuration";

interface CurationTabContentProps {
  scrappedCuration: any;
}

//Organism
export default function CurationTabContent({
  scrappedCuration,
}: CurationTabContentProps) {
  const { data: myCurationData } = useGetMyCuration();

  const { tabIndex, changeTabIndex } = useTab();

  const { isModalOpen, openModal, closeModal } = useOpenCurationMakeModal();

  const handleMakeCurationClick = () => {
    openModal();
  };

  return (
    <>
      <Tab sections={CurationTabSections} onChange={changeTabIndex} />
      <div className="h-full px-[2rem] pb-[18.2rem] bg-background-gray-2 items-center overflow-y-scroll">
        {tabIndex === 0 && (
          <>
            <div className="flex items-center justify-between pb-[1.6rem] pt-[2rem]">
              <MyCurationCount
                count={myCurationData && myCurationData.curationCount}
              />
              <CurationMakeButton
                size="small"
                text="만들기"
                curationMakeModalInfo={{
                  open: isModalOpen,
                  openedAt: "page",
                  closeModal,
                }}
                onClick={handleMakeCurationClick}
              />
            </div>
            {myCurationData && myCurationData?.curation.length > 0 ? (
              myCurationData?.curation.map((props: CurationProps) => (
                <div key={props.author + props.id} className="mb-[1.2rem]">
                  <CurationInfoCardLight variant="my" {...props} />
                </div>
              ))
            ) : (
              <NoCurationText
                text="아직 생성한 큐레이션이 없습니다."
                className=" h-[57vh]"
              />
            )}
          </>
        )}
        <div className="pt-[2rem] pb-[6rem]">
          {tabIndex === 1 ? (
            scrappedCuration?.length > 0 ? (
              scrappedCuration?.map((props: any) => (
                <div key={props.author + props.id} className="mb-[1.6rem]">
                  <CurationInfoCardDark {...props} disableScrapDelete />
                </div>
              ))
            ) : (
              <NoCurationText
                text="아직 스크랩한 큐레이션이 없습니다."
                className=" h-[65vh]"
              />
            )
          ) : null}
        </div>
      </div>
    </>
  );
}
