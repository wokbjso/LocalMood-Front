import { useEffect, useState } from "react";

export default function useSavePlaceModalMyCurationCard() {
  const [openSaveToast, setOpenSaveToast] = useState(false);
  const [toastText, setToastText] = useState("");

  const handleOpenSaveToast = (state: boolean) => {
    setOpenSaveToast(state);
  };

  const handleToastText = (text: string) => {
    setToastText(text);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (openSaveToast) {
      timeoutId = setTimeout(() => {
        setOpenSaveToast(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [openSaveToast]);

  return {
    openSaveToast,
    toastText,
    handlers: {
      changeOpenSaveToast: handleOpenSaveToast,
      changeToastText: handleToastText,
    },
  };
}
