import { CurationPlaceProps } from "@feature/curation/type";
import { createRef, useEffect, useState } from "react";

export default function useCurationDetailCardList(
  spaceDetails: CurationPlaceProps[]
) {
  const [openScrapDeleteToast, setOpenScrapDeleteToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [placeIndex, setPlaceIndex] = useState(0);
  const cardRefs = Array.from({ length: spaceDetails.length }, () =>
    createRef<HTMLDivElement>()
  );

  const handleOpenScrapDeleteToast = (state: boolean) => {
    setOpenScrapDeleteToast(state);
  };

  const handleToastText = (text: string) => {
    setToastText(text);
  };

  const handlePlaceIndex = (index: number) => {
    setPlaceIndex(index);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (openScrapDeleteToast) {
      timeoutId = setTimeout(() => {
        setOpenScrapDeleteToast(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [openScrapDeleteToast]);

  return {
    cardRefs,
    openScrapDeleteToast,
    toastText,
    placeIndex,
    handlers: {
      changeOpenScrapDeleteToast: handleOpenScrapDeleteToast,
      changeToastText: handleToastText,
      changePlaceIndex: handlePlaceIndex,
    },
  };
}
