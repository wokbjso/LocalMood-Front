import { useState } from "react";

export default function useTab() {
  const [tabIndex, setTabIndex] = useState(0);

  const changeTabIndex = (index: number) => {
    setTabIndex(index);
  };

  return {
    tabIndex,
    changeTabIndex,
  };
}
