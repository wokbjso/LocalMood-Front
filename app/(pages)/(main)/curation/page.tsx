"use client";
import React, { useState } from "react";
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
import GrabModal from "@common/components/ui/modal/GrabModal";

export default function CurationPage() {
  const CurationTabSections = [
    {
      text: "내 큐레이션",
    },
    {
      text: "스크랩",
    },
  ];
  const [tabIndex, setTabIndex] = React.useState(0);
  const [isCurationMakeOpen, setIsCurationMakeOpen] = useState(false);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };
  const handleCurationButtonClick = () => {
    setIsCurationMakeOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setIsCurationMakeOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="Curation h-[100vh] overflow-hidden">
      <CurationHeader />
      <Tab sections={CurationTabSections} onChange={handleTabChange} />
      <div className="h-full px-[2rem] pb-[18.2rem] bg-background-gray-2 items-center overflow-y-scroll">
        {tabIndex === 0 && (
          <div className="flex items-center justify-between pb-[0.6rem] pt-[2rem]">
            <div className="flex body1 text-text-gray-8 items-center">
              총{" "}
              <p className="text-black">&nbsp;{curationMainPropsList.length}</p>{" "}
              개
            </div>
            <div onClick={handleCurationButtonClick}>
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
              <div key={index} className="mb-[1.6rem]">
                <CurationScrapped {...props} />
              </div>
            ))}
        </div>
      </div>
      {isCurationMakeOpen && (
        <>
          <div className="absolute h-[100vh] w-full bg-black opacity-[0.4] z-10 bottom-0 left-0" />
          <div className="fixed top-[4.6rem] bottom-0 left-0 right-0 z-10">
            <CurationMake onClose={handleCloseModal} />
          </div>
        </>
      )}
    </div>
  );
}
