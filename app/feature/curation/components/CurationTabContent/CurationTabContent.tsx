"use client";

import Tab from "@common/components/ui/tab/Tab";
import CurationMakeButton from "../CurationButton/CurationMakeButton";
import CurationMakeModal from "../CurationMake/CurationMakeModal";
import CurationScrapped from "../CurationScrapped/CurationScrapped";
import CurationMain from "../CurationMain/CurationMain";
import { CurationProps } from "@feature/curation/type";
import UseCuration from "@feature/curation/useCuration";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";

interface CurationTabContentProps {
  myCuration: MyCurationResponse;
  scrappedCuration: any;
}

export default function CurationTabContent({
  myCuration,
  scrappedCuration,
}: CurationTabContentProps) {
  const { tabIndex, isCurationMakeOpen, handlers } = UseCuration();
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
          <div className="flex items-center justify-between pb-[0.6rem] pt-[2rem]">
            <div className="flex body1 text-text-gray-8 items-center">
              총 <p className="text-black">&nbsp;{myCuration?.curationCount}</p>{" "}
              개
            </div>
            <div onClick={() => handlers.handleCurationMakeOpen(true)}>
              <CurationMakeButton />
            </div>
          </div>
        )}
        {tabIndex === 0 ? (
          myCuration && myCuration?.curation.length > 0 ? (
            myCuration?.curation.map((props: CurationProps) => (
              <div key={props.author + props.id} className="mb-[1.2rem]">
                <CurationMain variant="my" {...props} />
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
                  <CurationScrapped {...props} />
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
      <CurationMakeModal
        isOpen={isCurationMakeOpen}
        handleOpen={handlers.handleCurationMakeOpen}
      />
    </>
  );
}
