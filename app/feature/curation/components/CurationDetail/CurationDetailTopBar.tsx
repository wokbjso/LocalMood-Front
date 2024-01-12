"use client";
import CurationTopAppBar from "@feature/curation/components/CurationTopAppBar/curationTopAppBar";
import NonCuration from "@common/assets/icons/illustration/CurationNoSeat.png";
import LockIcon from "@common/assets/icons/lock/lock.svg";
import UnlockIcon from "@common/assets/icons/lock/unlock.svg";
import Image from "next/image";
import { useState } from "react";
import { CurationProps } from "@feature/curation/type";

interface CurationDetailTopBarProps {
  variant: string | undefined;
  places: number | undefined;
  hashTags: string[] | undefined;
}

export default function CurationDetailTopBar({
  variant,
  places,
  hashTags,
}: CurationDetailTopBarProps) {
  const [isPublic, setIsPublic] = useState(true);
  console.log(places);

  const togglePrivacy = () => {
    setIsPublic((prevState) => !prevState);
  };
  return (
    <div>
      <div className="h-[18.8rem] bg-background-secondary-normal">
        <CurationTopAppBar />
      </div>
      <div className="w-full inline-flex flex-col -mt-[18.8rem] pt-[16.1rem] items-center pb-[2.4rem]">
        <div className="w-[21.5rem] flex flex-col items-center">
          <div className="w-[5.6rem] h-[5.6rem]">
            <Image src={NonCuration} alt="NonCuration" />
          </div>
          <div className="max-w-[23.2rem] headline0 text-black text-center pt-[1.2rem] pb-[0.8rem]">
            크리스마스에 즐기기 좋은 마포구 데이트 코스
          </div>
          <div
            className="flex items-center gap-[0.4rem] body3-medium text-text-gray-8"
            onClick={togglePrivacy}
          >
            {isPublic ? <LockIcon /> : <UnlockIcon />}
            {isPublic ? "비공개" : "공개"}
          </div>
        </div>
      </div>
      <div className="w-full border-2 border-line-gray-3"></div>
    </div>
  );
}
