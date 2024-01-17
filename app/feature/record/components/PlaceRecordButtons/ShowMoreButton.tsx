"use client";
import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";
import { useRouter } from "next/navigation";

export default function ShowMoreButton() {
  const router = useRouter();
  const handleMoreClick = () => {
    router.push("/record/select");
  };

  return (
    <div
      className="flex items-center gap-[1.2rem] text-text-gray-6 body2-semibold"
      onClick={handleMoreClick}
    >
      <div> 더보기 </div>
      <div>
        <ArrowIcon />
      </div>
    </div>
  );
}
