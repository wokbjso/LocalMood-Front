import { useEffect, useState } from "react";

export default function UsePlaceInfoCardTop() {
  const [openCurationSaveModal, setOpenCurationSaveModal] = useState(false);
  const [openScrapToast, setOpenScrapToast] = useState(false);
  const [toastText, setToastText] = useState("");

  const openCurationModal = () => {
    setOpenCurationSaveModal(true);
  };

  const openToast = (toastText: string) => {
    setOpenScrapToast(true);
    setToastText(toastText);
  };

  const handleCurationModal = (state: boolean) => {
    setOpenCurationSaveModal(state);
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
    openCurationModal,
    openToast,
    handlers: {
      handleCurationModal,
    },
  };
}
