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
      <div className="flex overflow-x-scroll">
        {curationList.map((curation, i) => {
          return (
            indicatorIndex === i && (
              <CurationMain
                key={curation.id}
                id={0}
                curationPhoto={curation.curationPhoto}
                userImg={curation.userImg}
                userName={curation.userName}
                hashTags={curation.hashTags}
                mainText={curation.mainText}
                className="mb-[2rem]"
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
