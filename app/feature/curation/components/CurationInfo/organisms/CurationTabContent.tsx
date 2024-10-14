"use client";

import Tab from "@/common/components/ui/tab/Tab";
import useTab from "@/common/components/ui/tab/useTab";
import { CurationTabSections } from "@/feature/curation/constants/curation-tab";
import NoCurationText from "../molecules/NoCurationText";
import CurationInfoCardDark from "./CurationInfoCardDark";
import MyCurationTabContent from "./MyCurationTabContent";
import { ErrorBoundary } from "react-error-boundary";
import ApiErrorFallback from "@/common/components/ui/error/ApiErrorFallback";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { CurationProps } from "@/feature/curation/type";

interface CurationTabContentProps {
  scrappedCuration: Omit<CurationProps, "privacy">[];
}

//Organism
export default function CurationTabContent({
  scrappedCuration,
}: CurationTabContentProps) {
  const { tabIndex, changeTabIndex } = useTab();
  return (
    <>
      <Tab
        startIndex={tabIndex}
        sections={CurationTabSections}
        onChange={changeTabIndex}
      />
      <div className="h-full px-[2rem] pb-[18.2rem] bg-background-gray-2 items-center overflow-y-scroll">
        {tabIndex === 0 && (
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                FallbackComponent={ApiErrorFallback}
              >
                <MyCurationTabContent />
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        )}
        <div className="pt-[2rem] pb-[6rem]">
          {tabIndex === 1 ? (
            scrappedCuration?.length > 0 ? (
              scrappedCuration?.map((props) => (
                <div key={props.author + props.id} className="mb-[1.6rem]">
                  <CurationInfoCardDark {...props} disableScrap />
                </div>
              ))
            ) : (
              <NoCurationText
                text="아직 스크랩한 큐레이션이 없습니다."
                className=" h-[65dvh]"
              />
            )
          ) : null}
        </div>
      </div>
    </>
  );
}
