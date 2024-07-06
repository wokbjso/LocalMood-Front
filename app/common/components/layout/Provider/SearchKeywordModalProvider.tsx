"use client";

import { isModalOpenSelector } from "@/common/state/modal-open";
import SearchKeywordModal from "@/feature/search/components/SearchKeyword/organisms/SearchKeywordModal";
import { useRecoilState } from "recoil";

interface SearchKeywordModalProviderProps {
  dependOnParams?: boolean;
}

export default function SearchKeywordModalProvider({
  dependOnParams = true,
}: SearchKeywordModalProviderProps) {
  const [isSearchKeywordModalOpened, setIsSearchKeywordModalOpened] =
    useRecoilState(isModalOpenSelector("searchKeyword"));

  const handleSearchKeywordModalClose = () => {
    setIsSearchKeywordModalOpened(false);
  };

  return (
    <SearchKeywordModal
      isOpen={isSearchKeywordModalOpened}
      dependOnParams={dependOnParams}
      closeModal={handleSearchKeywordModalClose}
    />
  );
}
