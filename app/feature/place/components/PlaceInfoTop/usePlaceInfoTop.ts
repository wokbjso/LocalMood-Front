import { useState } from "react";

export default function UsePlaceInfoTop(isScraped: boolean) {
  const [openCurationSaveModal, setOpenCurationSaveModal] = useState(false);

  const handleOpenCurationSaveModal = (state: boolean) => {
    setOpenCurationSaveModal(state);
  };

  return {
    openCurationSaveModal,
    handlers: {
      changeOpenCurationSaveModal: handleOpenCurationSaveModal,
    },
  };
}
