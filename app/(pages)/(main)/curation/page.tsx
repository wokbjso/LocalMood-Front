"use client";
import React from "react";
import CurationHeader from "@feature/curation/components/CurationHeader/CurationHeader";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import CurationButton from "@feature/curation/components/CurationButton/CurationButton";
import CurationScrapped from "@feature/curation/components/CurationScrapped/CurationScrapped";
import {
  curationMainPropsList,
  curationScrappedPropsList,
} from "@feature/curation/dummyList";
import CurationMake from "@feature/curation/components/modal/CurationMake";
import UseCuration from "@feature/curation/useCuration";

export default function CurationPage() {
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
    <div className="Curation h-[100vh] overflow-hidden">
      <CurationHeader />
      <Tab sections={CurationTabSections} onChange={handlers.handleTabIndex} />
      <div className="h-full px-[2rem] pb-[18.2rem] bg-background-gray-2 items-center overflow-y-scroll">
        {tabIndex === 0 && (
          <div className="flex items-center justify-between pb-[0.6rem] pt-[2rem]">
            <div className="flex body1 text-text-gray-8 items-center">
              총{" "}
              <p className="text-black">&nbsp;{curationMainPropsList.length}</p>{" "}
              개
            </div>
            <div onClick={() => handlers.handleCurationMakeOpen(true)}>
              <CurationButton />
            </div>
          </div>
        )}
        {tabIndex === 0 &&
          curationMainPropsList.map((props, index) => (
            <div key={index} className="mb-[1.2rem]">
              <CurationMain {...props} />
            </div>
          ))}
        <div className="pt-[2rem]">
          {tabIndex === 1 &&
            curationScrappedPropsList.map((props, index) => (
              <div key={props.userName + props.id} className="mb-[1.6rem]">
                <CurationScrapped {...props} />
              </div>
            ))}
        </div>
      </div>
      <CurationMake
        isOpen={isCurationMakeOpen}
        handleOpen={handlers.handleCurationMakeOpen}
      />
    </div>
  );
}
