"use client";

import Tab from "@common/components/ui/tab/Tab";
import CurationMakeModal from "../CurationMake/CurationMakeModal";
import CurationScrapped from "../CurationScrapped/CurationScrapped";
import AddIcon from "@common/assets/icons/add/add-line.svg";
import { CurationProps } from "@feature/curation/type";
import UseCuration from "@feature/curation/useCuration";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import CurationCard from "../CurationCard/CurationCard";
import useToast from "@common/hooks/useToast";
import Toast from "@common/components/ui/toast/Toast";

interface CurationTabContentProps {
  myCuration: MyCurationResponse;
  scrappedCuration: any;
}

export default function CurationTabContent({
  myCuration,
  scrappedCuration,
}: CurationTabContentProps) {
  const { tabIndex, isCurationMakeOpen, handlers } = UseCuration();
  const { isToastOpen, toastText, openToast } = useToast();
  const CurationTabSections = [
    {
      text: "내 큐레이션",
    },
    {
      text: "스크랩",
    },
  ];
  return (
    <>
      <Tab sections={CurationTabSections} onChange={handlers.handleTabIndex} />
      <div className="h-full px-[2rem] pb-[18.2rem] bg-background-gray-2 items-center overflow-y-scroll">
        {tabIndex === 0 && (
          <div className="flex items-center justify-between pb-[1.6rem] pt-[2rem]">
            <div className="flex body1 text-text-gray-8 items-center">
              총 <p className="text-black">&nbsp;{myCuration?.curationCount}</p>
              개
            </div>
            <div onClick={() => handlers.handleCurationMakeOpen(true)}>
              <div>
                <div className="flex text-text-gray-8 items-center">
                  <AddIcon />
                  <p className="body2-semibold ml-[0.4rem]">만들기</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {tabIndex === 0 ? (
          myCuration && myCuration?.curation.length > 0 ? (
            myCuration?.curation.map((props: CurationProps) => (
              <div key={props.author + props.id} className="mb-[1.2rem]">
                <CurationCard variant="my" {...props} />
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
                  <CurationScrapped
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
      {isCurationMakeOpen && (
        <CurationMakeModal
          open={isCurationMakeOpen}
          handleModalFn={handlers.handleCurationMakeOpen}
        />
      )}
      <Toast open={isToastOpen} text={toastText} />
    </>
  );
}
