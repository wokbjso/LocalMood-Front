"use client";

import { isModalOpenSelector } from "@/common/state/handleModalOpen";
import ChangeSearchSortModal from "@/feature/search/components/SearchResult/organisms/ChangeSearchSortModal";
import { useRecoilState } from "recoil";

export default function SearchResultChangeSortProvider() {
  const [
    isSearchResultChangeSortModalOpened,
    setIsSearchResultChangeSortModalOpened,
  ] = useRecoilState(isModalOpenSelector("changeSort"));

  const handleSearchKeywordModalClose = () => {
    setIsSearchResultChangeSortModalOpened(false);
  };

  return (
    <ChangeSearchSortModal
      isOpen={isSearchResultChangeSortModalOpened}
      closeModal={handleSearchKeywordModalClose}
    />
  );
}
