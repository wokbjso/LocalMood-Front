"use client";

import { useEffect, useState } from "react";

export default function useToast() {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastText, setToastText] = useState("");

  const openToast = (text: string) => {
    setIsToastOpen(true);
    setToastText(text);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isToastOpen) {
      timeoutId = setTimeout(() => {
        setIsToastOpen(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isToastOpen]);

  return {
    isToastOpen,
    toastText,
    openToast,
  };
}
