"use client";

import { useState } from "react";

export default function useSearchKeyword(modalState: boolean) {
  const [modalOpen, setModalOpen] = useState<boolean>(modalState);
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleModalOpen = (open: boolean) => {
    setModalOpen(open);
  };

  const handleTabIndex = (index: number) => {
    setTabIndex(index);
  };

  return {
    modalOpen,
    tabIndex,
    handlers: {
      handleModalOpen,
      handleTabIndex,
    },
  };
}
