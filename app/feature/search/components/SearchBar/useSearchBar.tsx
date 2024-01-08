"use client";

import { useState } from "react";

export default function useSearchBar() {
  const [searchText, setSearchText] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [searchByKeyword, setSearchByKeyword] = useState(false);

  const handleSearchText = (text: string) => {
    setSearchText(text);
  };
  const handleTabIndex = (index: number) => {
    setTabIndex(index);
  };

  const handleSearchByKeyword = (state: boolean) => {
    setSearchByKeyword(state);
  };

  return {
    searchText,
    tabIndex,
    searchByKeyword,
    handlers: {
      handleSearchText,
      handleTabIndex,
      handleSearchByKeyword,
    },
  };
}
