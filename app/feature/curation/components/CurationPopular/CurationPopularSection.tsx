"use client";

import UseDetectPageLeave from "@common/hooks/useDetectPageLeave";
import revalidateCurationScrapRelatedData from "@feature/curation/actions/revalidateCurationScrapRelatedData";
import { useState } from "react";
import CurationInfoCardLight from "../CurationInfo/molecules/CurationInfoCardLight";

interface CurationPopularSectionProps {
  curationList: {
    id: number;
    author: string;
    image: string[];
    title: string;
    spaceCount: number;
    keyword: string[];
    isScraped: boolean;
  }[];
}

export default function CurationPopularSection({
  curationList,
}: CurationPopularSectionProps) {
  const prevState = curationList.map((list) => list.isScraped);

  const [nextState, setNextState] = useState<boolean[]>(
    curationList.map((list) => list.isScraped)
  );

  UseDetectPageLeave(
    revalidateCurationScrapRelatedData,
    JSON.stringify(prevState) !== JSON.stringify(nextState)
  );
  return (
    <section className="mt-[2.4rem] px-[2rem] pb-[12rem]">
      {curationList.map((curation, i) => (
        <CurationInfoCardLight
          key={curation.author + curation.id}
          {...curation}
          index={i}
          setNextState={setNextState}
          className="mb-[2rem] w-full"
        />
      ))}
    </section>
  );
}
