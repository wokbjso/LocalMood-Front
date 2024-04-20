import FilterSortIcon from "@common/assets/icons/filter/FilterSortIcon";
import FilterKeywordIcon from "@common/assets/icons/filter/FilterKeywordIcon";
import { useRecoilValue } from "recoil";
import { searchSortState } from "@feature/search/state/sortState";
import UseChangeSearchSortModal from "./useChangeSearchSortModal";
import ChangeSearchSortModal from "./ChangeSearchSortModal";

export default function ChangeSearchConditon() {
  const state = useRecoilValue(searchSortState);
  const { isOpened, openModal, closeModal } = UseChangeSearchSortModal();

  const handleSortChangeClick = () => {
    openModal();
  };

  return (
    <>
      <div className="flex justify-between pt-[16px] pb-[12px] px-[20px]">
        <section className="flex items-center gap-[4px]">
          <FilterKeywordIcon />
          <span className="body2-semibold text-text-gray-8">키워드 설정</span>
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
