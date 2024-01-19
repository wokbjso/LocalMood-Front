"use client";
import AddIcon from "@common/assets/icons/add/add-line.svg";

export default function CurationMakeButton() {
  //내 큐레이션_만들기 버튼
  return (
    <div>
      <div className="flex text-text-gray-8 items-center">
        <AddIcon />
        <p className="body2-semibold ml-[0.4rem]">만들기</p>
      </div>
    </div>
  );
}
