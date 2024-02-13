import { useState } from "react";

export default function UsePlaceInfoTop(isScraped: boolean) {
  const [openCurationSaveModal, setOpenCurationSaveModal] = useState(false);
  const [scrapState, setScrapState] = useState<boolean>(isScraped);

  const handleOpenCurationSaveModal = (state: boolean) => {
    setOpenCurationSaveModal(state);
  };

  const handleScrapState = (state: boolean) => {
    setScrapState(state);
  };

  return {
    openCurationSaveModal,
    scrapState,
    handlers: {
      changeOpenCurationSaveModal: handleOpenCurationSaveModal,
      changeScrapState: handleScrapState,
    },
  };
}
