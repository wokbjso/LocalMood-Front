import { useState } from "react";

export default function UseCuration() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isCurationMakeOpen, setIsCurationMakeOpen] = useState(false);

  const handleTabIndex = (index: number) => {
    setTabIndex(index);
  };

  const handleCurationMakeOpen = (state: boolean) => {
    setIsCurationMakeOpen(state);
  };

  return {
    tabIndex,
    isCurationMakeOpen,
    handlers: {
      handleTabIndex,
      handleCurationMakeOpen,
    },
  };
}
