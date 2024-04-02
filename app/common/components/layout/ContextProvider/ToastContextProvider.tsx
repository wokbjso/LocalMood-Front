"use client";

import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

export const ToastValueContext = createContext<
  { open: boolean; text: string } | undefined
>(undefined);
export const ToastActionContext = createContext<
  { openToast: (text: string) => void } | undefined
>(undefined);

export default function ToastContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [toastValue, setToastValue] = useState({
    open: false,
    text: "",
  });

  const actions = useMemo(
    () => ({
      openToast(text: string) {
        setToastValue({
          open: true,
          text,
        });
      },
    }),
    []
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (toastValue.open) {
      timeoutId = setTimeout(() => {
        setToastValue((prev) => {
          return {
            ...prev,
            open: false,
          };
        });
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [toastValue.open]);

  return (
    <ToastActionContext.Provider value={actions}>
      <ToastValueContext.Provider value={toastValue}>
        {children}
      </ToastValueContext.Provider>
    </ToastActionContext.Provider>
  );
}
