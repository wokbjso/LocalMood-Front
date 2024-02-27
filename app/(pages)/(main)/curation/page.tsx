"use client";

import React, { useEffect, useState } from "react";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import CurationScrapped from "@feature/curation/components/CurationScrapped/CurationScrapped";
import UseCuration from "@feature/curation/useCuration";
import CurationMakeButton from "@feature/curation/components/CurationButton/CurationMakeButton";
import CurationMakeModal from "@feature/curation/components/CurationMake/CurationMakeModal";
import { CurationProps } from "@feature/curation/type";
import getMyCuration from "@feature/curation/queries/getMyCuration";
import getScrappedCuration from "@feature/curation/queries/getScrappedCuration";

export default function CurationPage() {
  const { tabIndex, isCurationMakeOpen, handlers } = UseCuration();
  const [myCuration, setMyCuration] = useState<{
    curationCount: 0;
    curation: [];
  }>();

  const [scrappedCuration, setScrappedCuration] = useState<any[]>([]);

  const CurationTabSections = [
    {
      text: "내 큐레이션",
    },
    {
      text: "스크랩",
    },
  ];

  const fetchData = async () => {
    const myCurationData = await getMyCuration();
    setMyCuration(myCurationData);
    const scrappedCurationData = await getScrappedCuration();
    setScrappedCuration(scrappedCurationData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Curation h-[100vh] overflow-hidden">
      <header>
        <div className="w-full h-[7.8rem] pt-[3.8rem] pr-[2rem] pb-[1.2rem] pl-[2rem]">
          <span className="headline1 text-black">큐레이션</span>
        </div>
      </header>
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
              scrappedCuration?.map((props) => (
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
    </div>
  );
}
