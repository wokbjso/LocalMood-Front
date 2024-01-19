"use client";

import { CurationProps } from "@feature/curation/type";
import CurationMain from "../CurationMain/CurationMain";
import Indicator from "@common/components/ui/indicator/Indicator";
import UseCurationHomeList from "./UseCurationHomeList";

interface CurationHomeListProps {
  curationList: CurationProps[];
}

export default function CurationHomeList({
  curationList,
}: CurationHomeListProps) {
  const { indicatorIndex, handlers } = UseCurationHomeList();
  return (
    <>
      <div>
        {/* indicator 인덱스에 맞게 알맞은 큐레이션 띄워줌 */}
        {curationList.map((curation, i) => {
          return (
            indicatorIndex === i && (
              <CurationMain
                key={curation.id}
                {...curation}
                className="mb-[2rem] w-full"
              />
            )
          );
        })}
      </div>
      <Indicator
        index={indicatorIndex}
        className="flex justify-center"
        handleIndicator={handlers.handleIndicator}
      />
    </>
  );
}
