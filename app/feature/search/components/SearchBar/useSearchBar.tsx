"use client";

import { useState } from "react";

export default function useSearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (text: string) => {
    setSearchText(text);
  };

  return {
    searchText,
    handlers: {
      handleSearchText,
    },
  };
}
