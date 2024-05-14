import React, { useState } from "react";
import CurationMakeKeywordBar from "./CurationMakeKeywordBar";
import CurationMakeKeywordContent from "./CurationMakeKeywordContent";

export interface CurationMakeKeywordProps {
  curationMakeData: {
    curation_name: string;
    open: boolean;
    keyword: { [key: string]: string };
  };
  handleKeyword?: (category: string, keyword: string) => void;
  editMode?: boolean;
}

export default function CurationMakeKeyword({
  curationMakeData,
  handleKeyword,
  editMode = false,
}: CurationMakeKeywordProps) {
  const [isExpanded, setIsExpanded] = useState(editMode ? true : false);

  const handleArrowClick = () => {
    setIsExpanded((prev) => !prev);
  };

  //Organism
  return (
    <>
      <CurationMakeKeywordBar
        curationMakeData={curationMakeData}
        isExpanded={isExpanded}
        handleArrowClick={handleArrowClick}
      />
      <CurationMakeKeywordContent
        isOpen={isExpanded}
        curationMakeData={curationMakeData}
        handleKeyword={handleKeyword}
      />
    </>
  );
}
