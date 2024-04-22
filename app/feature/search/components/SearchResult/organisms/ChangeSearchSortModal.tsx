import CheckIconMedium from "@common/assets/icons/check/CheckIconMedium";
import Divider from "@common/components/ui/divider/Divider";
import Modal from "@common/components/ui/modal/Modal";
import UseOutsideClick from "@common/hooks/useOutsideClick";
import { toastInfoSelector } from "@common/state/toast";
import { searchSortStateSelector } from "@feature/search/state/sortState";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import { twMerge } from "tailwind-merge";

interface ChangeSearchSortModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

//Organism
export default function ChangeSearchSortModal({
  isOpen,
  closeModal,
}: ChangeSearchSortModalProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const [sortState, setsortState] = useRecoilState(searchSortStateSelector);
  const setToast = useSetRecoilState(toastInfoSelector);

  const { ref } = UseOutsideClick<HTMLDivElement>(isOpen, closeModal);

  const handleSortByRecentClick = () => {
    params.set("sort", "RECENT");
    replace(`${pathname}?${params.toString()}`);
    setsortState("RECENT");
    closeModal();
    setToast({
      open: true,
      text: "검색 조건이 최신순으로 변경되었습니다",
    });
  };

  const handleSortByHotClick = () => {
    params.set("sort", "HOT");
    replace(`${pathname}?${params.toString()}`);
    setsortState("HOT");
    closeModal();
    setToast({
      open: true,
      text: "검색 조건이 인기순으로 변경되었습니다",
    });
  };

  return (
    isOpen && (
      <Modal ref={ref} className="px-[20px]">
        <div
          className="flex items-center pt-[26px] pb-[20px]"
          onClick={handleSortByRecentClick}
        >
          <span
            className={twMerge(
              "body1-medium",
              sortState === "RECENT"
                ? "text-black mr-[8px]"
                : "text-text-gray-6"
            )}
          >
            리뷰 최신순
          </span>
          {sortState === "RECENT" && <CheckIconMedium />}
        </div>
        <Divider className="h-[1px] bg-line-gray-3" />
        <div
          className="flex items-center pt-[20px]"
          onClick={handleSortByHotClick}
        >
          <span
            className={twMerge(
              "body1-medium",
              sortState === "HOT" ? "text-black mr-[8px]" : "text-text-gray-6"
            )}
          >
            인기순
          </span>
          {sortState === "HOT" && <CheckIconMedium />}
        </div>
      </Modal>
    )
  );
}
