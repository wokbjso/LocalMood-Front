import { useEffect, useState } from "react";

export default function UsePlaceInfoTop() {
  const [openCurationSaveModal, setOpenCurationSaveModal] = useState(false);
  const [openScrapToast, setOpenScrapToast] = useState(false);
  const [toastText, setToastText] = useState("");

  const handleOpenCurationSaveModal = (state: boolean) => {
    setOpenCurationSaveModal(state);
  };
  const handleScrapToast = (state: boolean) => {
    setOpenScrapToast(state);
  };
  const handleToastText = (text: string) => {
    setToastText(text);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (openScrapToast) {
      timeoutId = setTimeout(() => {
        setOpenScrapToast(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [openScrapToast]);

  return {
    openCurationSaveModal,
    openScrapToast,
    toastText,
    handlers: {
      changeOpenCurationSaveModal: handleOpenCurationSaveModal,
      openScrapToast: handleScrapToast,
      changeToastText: handleToastText,
    },
  };
}
