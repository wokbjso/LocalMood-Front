import CloseGrayIcon from "@common/assets/icons/close/CloseGrayIcon";
import React from "react";

interface SearchTextDeleteProps {
  onClick?: () => void;
}

function SearchTextDelete({ onClick }: SearchTextDeleteProps) {
  return (
    <div className="flex justify-center items-center bg-line-gray-3 rounded-full w-[2.4rem] h-[2.4rem]">
      <CloseGrayIcon onClick={onClick} />
    </div>
  );
}

export default React.memo(SearchTextDelete);
