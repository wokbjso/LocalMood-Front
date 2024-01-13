"use client";
import CurationTopAppBar from "@feature/curation/components/CurationTopAppBar/curationTopAppBar";
import NonCuration from "@common/assets/icons/illustration/CurationNoSeat.png";
import LockIcon from "@common/assets/icons/lock/lock.svg";
import UnlockIcon from "@common/assets/icons/lock/unlock.svg";
import Image from "next/image";
import { useState } from "react";
import { CurationProps } from "@feature/curation/type";
import Chip from "@common/components/ui/buttons/Chip/Chip";

interface CurationDetailTopBarProps {
  mainText: string | undefined;
  variant: string | undefined;
  userImg: string | undefined;
  places: number | undefined;
  hashTags: string[] | undefined;
}

export default function CurationDetailTopBar({
  mainText,
  variant,
  userImg,
  places,
  hashTags,
}: CurationDetailTopBarProps) {
  const [isPublic, setIsPublic] = useState(true);
  const togglePrivacy = () => {
    setIsPublic((prevState) => !prevState);
  };

  return (
    <div>
      <div className="h-[18.8rem] bg-background-secondary-normal">
        <CurationTopAppBar variant={variant} />
      </div>
      <div className="w-full -mt-[18.8rem] pt-[11.5rem]">
        <div className="w-full flex justify-center pb-[1.6rem] gap-[0.8rem]">
          {hashTags?.map((tag, index) => (
            <Chip key={index} variant="keyword">
              <div className="flex">
                <p className="text-primary-normal">#&nbsp;</p>
                <p>{tag}</p>
              </div>
            </Chip>
          ))}
        </div>

        <div className="w-full inline-flex flex-col items-center pb-[2.4rem]">
          <div className="w-[21.5rem] flex flex-col items-center">
            <div className="w-[5.6rem] h-[5.6rem]">
              <Image src={NonCuration} alt="NonCuration" />
            </div>
            <div className="max-w-[23.2rem] headline0 text-black text-center pt-[1.2rem] pb-[0.8rem]">
              {mainText}
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
      </div>
      <div className="w-full border-2 border-line-gray-3"></div>
    </div>
  );
}
