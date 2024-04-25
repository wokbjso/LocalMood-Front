import FilterSortIcon from "@common/assets/icons/filter/FilterSortIcon";
import FilterKeywordIcon from "@common/assets/icons/filter/FilterKeywordIcon";
import { useRecoilValue } from "recoil";
import { searchSortState } from "@feature/search/state/sortState";
import UseChangeSearchSortModal from "../hooks/useChangeSearchSortModal";
import ChangeSearchSortModal from "./ChangeSearchSortModal";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchKeywordModal from "../../SearchKeyword/organisms/SearchKeywordModal";

//Organism
export default function ChangeSearchConditon() {
  const searchParams = useSearchParams();
  const state = useRecoilValue(searchSortState);
  const [isSearchKeywordOpened, setIsSearchKeywordOpened] = useState(false);
  const { isOpened, openModal, closeModal } = UseChangeSearchSortModal();

  const countKeywordSelected = () => {
    let count = 0;
    if (searchParams.get("keyword")) {
      for (const [key, value] of Object.entries(
        JSON.parse(searchParams.get("keyword") as string)
      )) {
        if (key === "type" || value === "ALL" || key === "subType") continue;
        count++;
      }
    }
    return count;
  };

  const showedKeyword = () => {
    if (searchParams.get("keyword")) {
      const keyword = JSON.parse(searchParams.get("keyword") as string);
      if (keyword["dish"] !== "ALL") return keyword["dish"];
      else if (keyword["subType"] !== "ALL") return keyword["subType"];
      else if (keyword["purpose"] !== "ALL") return keyword["purpose"];
      else if (keyword["mood"] !== "ALL") return keyword["mood"];
      else if (keyword["music"] !== "ALL") return keyword["music"];
      else if (keyword["interior"] !== "ALL") return keyword["interior"];
      else if (keyword["visitor"] !== "ALL") return keyword["visitor"];
      else if (keyword["optServ"] !== "ALL") return keyword["optServ"];
      else if (keyword["disDesc"] !== "ALL") return keyword["disDesc"];
    }
    return null;
  };

  const handleKeywordChangeClick = () => {
    setIsSearchKeywordOpened(true);
  };

  const handleKeywordChangeCloseClick = () => {
    setIsSearchKeywordOpened(false);
  };

  const handleSortChangeClick = () => {
    openModal();
  };

  return (
    <>
      {isSearchKeywordOpened && (
        <SearchKeywordModal
          dependOnParams={false}
          closeModal={handleKeywordChangeCloseClick}
        />
      )}
      <div className="flex justify-between pt-[16px] pb-[12px] px-[20px]">
        <section
          className="flex items-center gap-[4px]"
          onClick={handleKeywordChangeClick}
        >
          <div
            className={
              searchParams.get("keyword")
                ? "flex justify-center items-center relative w-[3.2rem] h-[3.2rem] rounded-[8px] bg-primary-selected"
                : ""
            }
          >
            {searchParams.get("keyword") && (
              <div className="flex justify-center items-center absolute top-[-3px] right-[-3px] w-[1.6rem] h-[1.6rem] rounded-full bg-primary-normal text-white text-[1rem] font-semibold">
                {countKeywordSelected()}
              </div>
            )}
            <FilterKeywordIcon />
          </div>
          {!searchParams.get("keyword") && (
            <span className="body2-semibold text-text-gray-8 ml-[8px]">
              키워드 설정
            </span>
          )}
          {searchParams.get("keyword") && (
            <span className="body2-semibold text-black ml-[8px]">
              {showedKeyword()}
              <span className="body2-semibold text-text-gray-8">
                {" "}
                {countKeywordSelected() > 1 &&
                  `외 ${countKeywordSelected() - 1}개`}
              </span>
            </span>
          )}
        </section>
        <section
          className="flex items-center gap-[4px]"
          onClick={handleSortChangeClick}
        >
          <FilterSortIcon />
          <span className="body2-medium text-text-gray-6">
            {state === "RECENT" ? "리뷰 최신순" : "인기순"}
          </span>
        </section>
      </div>
      <ChangeSearchSortModal isOpen={isOpened} closeModal={closeModal} />
    </>
  );
}
