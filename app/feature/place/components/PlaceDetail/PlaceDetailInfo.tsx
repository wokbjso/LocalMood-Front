"use client";

import Line from "@common/assets/icons/line/line.svg";
import ArrowDown from "@common/assets/icons/arrow/arrow-down.svg";
import ArrowUp from "@common/assets/icons/arrow/ArrowUp";
import { useEffect, useState } from "react";
import { PLACE_SUB_TYPE } from "@feature/place/constants/place-tag-category";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { getSession } from "@common/utils/session/getSession";
import SaveModal from "@feature/record/components/Modal/SaveModal";
import Toast from "@common/components/ui/toast/Toast";

export default function PlaceDetailInfo({
  id,
  name,
  type,
  subType,
  address,
  isScraped,
  visitorNum,
  optionalService,
  dish,
  dishDesc,
}: any) {
  const [openSaveModal, setOpenSaveModal] = useState(false);
  const [openScrapToast, setOpenScrapToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [openMoreDetail, setOpenMoreDetail] = useState(false);
  const moreButtonClicked = () => {
    setOpenMoreDetail((prev) => !prev);
  };
  const formattedDishDesc = dishDesc?.split(",").join("・");
  const handleScrapClick = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const auth_info = await getSession();
    const token = auth_info?.data?.accessToken;
    if (!token) {
      location.replace("/login");
    } else {
      setOpenSaveModal(true);
      setOpenScrapToast(true);
      setToastText("저장할 큐레이션을 선택해주세요");
    }
  };
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (openScrapToast) {
      timeoutId = setTimeout(() => {
        setOpenScrapToast(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [openScrapToast]);
  return (
    <>
      <div className="flex-col px-[2rem] relative">
        <div className="headline2 mb-[0.8rem]">{name}</div>
        {isScraped ? (
          <ScrapFill
            color="#9E9E9E"
            className="absolute top-0 right-[2rem]"
            onClick={handleScrapClick}
          />
        ) : (
          <ScrapLine
            color="#9E9E9E"
            className="absolute top-0 right-[2rem]"
            onClick={handleScrapClick}
          />
        )}
        <div className="flex">
          <span className="body2-semibold text-text-gray-6">
            {type === "CAFE" ? "카페" : subType && PLACE_SUB_TYPE[subType]}
          </span>
          <Line className="mx-[0.8rem]" />
          <span className="body2-medium text-text-gray-5">{address}</span>
        </div>
        <div className="w-full flex items-center body2-medium text-text-gray-8 pt-[2.4rem]">
          <div className="w-full">
            <div className="flex items-center  justify-between">
              <div className="inline-flex items-center gap-[0.6rem]">
                <span>{visitorNum}</span>
                {optionalService && <Line className="mx-[0.8rem]" />}
                <span>{optionalService}</span>
              </div>
              {formattedDishDesc !== "NULL" && (
                <div onClick={moreButtonClicked}>
                  {openMoreDetail ? <ArrowUp /> : <ArrowDown />}
                </div>
              )}
            </div>
            {openMoreDetail && formattedDishDesc !== null ? (
              <div className="pt-[1.2rem]">
                {type === "CAFE" ? "🍰" : "🍷"}
                &nbsp; &nbsp;
                <span>{formattedDishDesc}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {openSaveModal && (
        <SaveModal spaceId={id} handleModalFn={setOpenSaveModal} />
      )}
      <Toast open={openScrapToast} text={toastText} />
    </>
  );
}
