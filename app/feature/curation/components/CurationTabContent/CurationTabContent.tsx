"use client";

import Tab from "@common/components/ui/tab/Tab";
import { CurationProps } from "@feature/curation/type";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import useToast from "@common/hooks/useToast";
import Toast from "@common/components/ui/toast/Toast";
import CurationCardLight from "../CurationCardLight/CurationCardLight";
import CurationCardDark from "../CurationCardDark/CurationCardDark";
import CurationMakeButton from "../CurationMake/CurationMakeButton";
import useOpenCurationMakeModal from "../CurationMake/useOpenCurationMakeModal";
import useTab from "@common/components/ui/tab/useTab";

interface CurationTabContentProps {
  myCuration: MyCurationResponse;
  scrappedCuration: any;
}

export default function CurationTabContent({
  myCuration,
  scrappedCuration,
}: CurationTabContentProps) {
  const CurationTabSections = [
    {
      text: "내 큐레이션",
    },
    {
      text: "스크랩",
    },
  ];

  const { tabIndex, changeTabIndex } = useTab();

  const { isToastOpen, toastText, openToast } = useToast();

  const {
    isModalOpen,
    openModal,
    handlers: curationMakeModalHandlers,
  } = useOpenCurationMakeModal();

  const handleMakeCurationClick = () => {
    openModal();
  };

  return (
    <>
      <Tab sections={CurationTabSections} onChange={changeTabIndex} />
      <div className="h-full px-[2rem] pb-[18.2rem] bg-background-gray-2 items-center overflow-y-scroll">
        {tabIndex === 0 && (
          <div className="flex items-center justify-between pb-[1.6rem] pt-[2rem]">
            <div className="flex body1 text-text-gray-8 items-center">
              총 <p className="text-black">&nbsp;{myCuration?.curationCount}</p>
              개
            </div>
            <CurationMakeButton
              size="small"
              text="만들기"
              curationMakeModalInfo={{
                open: isModalOpen,
                handleModalFn: curationMakeModalHandlers.handleModal,
              }}
              toastOutside
              outsideOpenToast={openToast}
              onClick={handleMakeCurationClick}
            />
          </div>
        )}
        {tabIndex === 0 ? (
          myCuration && myCuration?.curation.length > 0 ? (
            myCuration?.curation.map((props: CurationProps) => (
              <div key={props.author + props.id} className="mb-[1.2rem]">
                <CurationCardLight
                  variant="my"
                  toastOutside
                  outsideOpenToast={openToast}
                  {...props}
                />
              </div>
            ))
          ) : (
            <p className="flex justify-center items-center body1-medium text-text-gray-8 h-[57vh]">
              아직 생성한 큐레이션이 없습니다.
            </p>
          )
        ) : null}
        <div className="pt-[2rem] pb-[6rem]">
          {tabIndex === 1 ? (
            scrappedCuration?.length > 0 ? (
              scrappedCuration?.map((props: any) => (
                <div key={props.author + props.id} className="mb-[1.6rem]">
                  <CurationCardDark
                    toastOutside
                    outsideOpenToast={openToast}
                    {...props}
                  />
                </div>
              ))
            ) : (
              <p className="flex justify-center items-center body1-medium text-text-gray-8 h-[65vh]">
                아직 스크랩한 큐레이션이 없습니다.
              </p>
            )
          ) : null}
        </div>
      </div>
      <Toast open={isToastOpen} text={toastText} />
    </>
  );
}
