"use client";
import ArrowIcon from "@common/assets/icons/arrow/arrow-left.svg";
import PlaceSearchBar from "./PlaceSearchBar";
import { useRouter } from "next/navigation";

export default function PlaceSearchTopBar() {
  const router = useRouter();
  const handleBackClick = () => {
    router.back(); //이전 페이지로 이동
  };

  return (
    <div className="w-full flex px-[2rem] pt-[1.2rem] pb-[0.6rem] items-center gap-[1.2rem]">
      <div onClick={handleBackClick}>
        <ArrowIcon />
      </div>
      <PlaceSearchBar />
    </div>
  );
}
