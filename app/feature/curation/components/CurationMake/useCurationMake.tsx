import { useState } from "react";

export default function UseCurationMake() {
  const [curationMakeData, setCurationMakeData] = useState({
    curation_name: "",
    open: false,
    keyword: {} as Record<string, string>,
  });

  console.log(curationMakeData);

  const handleCurationName = (text: string) => {
    setCurationMakeData({ ...curationMakeData, curation_name: text });
  };

  const handleCurationOpen = (state: boolean) => {
    setCurationMakeData({ ...curationMakeData, open: state });
  };

  return {
    handlers: {
      changeCurationName: handleCurationName,
      changeCurationOpen: handleCurationOpen,
    },
  };
}
