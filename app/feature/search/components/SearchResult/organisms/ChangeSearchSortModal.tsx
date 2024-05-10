import Modal from "@/common/components/ui/modal/Modal";
import { ModalContent } from "@/common/components/ui/modal/ModalContent";
import UseOutsideClick from "@/common/hooks/useOutsideClick";
import { toastInfoSelector } from "@/common/state/toast";
import { searchSortStateSelector } from "@/feature/search/state/sortState";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRecoilState, useSetRecoilState } from "recoil";

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
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const [sortState, setsortState] = useRecoilState(searchSortStateSelector);
  const setToast = useSetRecoilState(toastInfoSelector);

  const { ref } = UseOutsideClick<HTMLDivElement>(isOpen, closeModal);

  const handleSortByRecentClick = () => {
    params.set("sort", "RECENT");
    router.replace(`${pathname}?${params.toString()}`);
    setsortState("RECENT");
    closeModal();
    setToast({
      open: true,
      text: "검색 조건이 리뷰 최신순으로 변경되었습니다",
    });
  };

  const handleSortByHotClick = () => {
    params.set("sort", "HOT");
    router.replace(`${pathname}?${params.toString()}`);
    setsortState("HOT");
    closeModal();
    setToast({
      open: true,
      text: "검색 조건이 인기순으로 변경되었습니다",
    });
  };

  return (
    isOpen && (
      <Modal ref={ref}>
        <ModalContent>
          <ModalContent.CheckBox
            text="리뷰 최신순"
            isClicked={sortState === "RECENT"}
            className="pt-[8px] pb-[20px]"
            onClick={handleSortByRecentClick}
          />
          <ModalContent.ModalDivider />
          <ModalContent.CheckBox
            text="인기순"
            isClicked={sortState === "HOT"}
            className="pt-[20px]"
            onClick={handleSortByHotClick}
          />
        </ModalContent>
      </Modal>
    )
  );
}
