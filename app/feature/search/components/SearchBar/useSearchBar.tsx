"use client";

import { useState } from "react";

export default function useSearchBar() {
  const [searchText, setSearchText] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const handleSearchText = (text: string) => {
    setSearchText(text);
  };
  const handleTabIndex = (index: number) => {
    setTabIndex(index);
  };

  return {
    searchText,
    tabIndex,
    handlers: {
      handleSearchText,
      handleTabIndex,
    },
  };
}
