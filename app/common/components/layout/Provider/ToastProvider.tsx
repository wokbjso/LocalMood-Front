"use client";

import Toast from "@common/components/ui/toast/Toast";
import { toastInfoSelector } from "@common/state/toast";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function ToastProvider() {
  const [toast, setToast] = useRecoilState(toastInfoSelector);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (toast.open) {
      timeoutId = setTimeout(() => {
        setToast((prev) => {
          return { ...prev, open: false };
        });
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [toast.open, setToast]);
  return <Toast open={toast.open} text={toast.text} />;
}
