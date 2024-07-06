"use client";

import FilterSortIcon from "@/common/assets/icons/filter/FilterSortIcon";
import FilterKeywordIcon from "@/common/assets/icons/filter/FilterKeywordIcon";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchSortState } from "@/feature/search/state/sortState";
import { useSearchParams } from "next/navigation";
import Label from "@/common/components/ui/text/Label";
import { isModalOpenSelector } from "@/common/state/modal-open";

//Organism
export default function ChangeSearchConditon() {
  const searchParams = useSearchParams();

  const state = useRecoilValue(searchSortState);
  const setIsSearchKeywordModalOpened = useSetRecoilState(
    isModalOpenSelector("searchKeyword")
  );
  const setIsSearchSortModalOpened = useSetRecoilState(
    isModalOpenSelector("changeSort")
  );

  const countKeywordSelected = () => {
    let count = 0;
    if (searchParams.get("keyword")) {
      for (const [key, value] of Object.entries(
        JSON.parse(searchParams.get("keyword") as string)
      )) {
        if (
          key === "type" ||
          value === "ALL" ||
          (key === "subType" && value === "한식")
        )
          continue;
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
    setIsSearchKeywordModalOpened(true);
  };

  const handleSortChangeClick = () => {
    setIsSearchSortModalOpened(true);
  };

  return (
    <>
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
            <Label className="body2-semibold text-text-gray-8 ml-[8px]">
              키워드 설정
            </Label>
          )}
          {searchParams.get("keyword") && (
            <>
              <Label className="body2-semibold ml-[8px]">
                {showedKeyword()}
              </Label>
              <Label className="body2-semibold text-text-gray-8">{`${" "}${
                countKeywordSelected() > 1
                  ? `외 ${countKeywordSelected() - 1}개`
                  : ""
              }`}</Label>
            </>
          )}
        </section>
        <section
          className="flex items-center gap-[4px]"
          onClick={handleSortChangeClick}
        >
          <FilterSortIcon />
          <Label className="body2-medium text-text-gray-6">
            {state === "RECENT" ? "리뷰 최신순" : "인기순"}
          </Label>
        </section>
      </div>
    </>
  );
}
