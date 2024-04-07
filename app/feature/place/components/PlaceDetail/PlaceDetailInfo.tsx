"use client";

import Line from "@common/assets/icons/line/line.svg";
import ArrowDown from "@common/assets/icons/arrow/arrow-down.svg";
import ArrowUp from "@common/assets/icons/arrow/ArrowUp";
import { useEffect, useState } from "react";
import { PLACE_SUB_TYPE } from "@feature/place/constants/place-tag-category";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { getSession } from "@common/utils/session/getSession";
import Toast from "@common/components/ui/toast/Toast";
import MyCurationModal from "@feature/curation/components/CurationModal/MyCurationModal/MyCurationModal";
import { useRecoilState } from "recoil";
import { toastInfoSelector } from "@common/atom/toast";

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
  myCurationData,
}: any) {
  const [toast, setToast] = useRecoilState(toastInfoSelector);

  const [openMyCurationModal, setOpenMyCurationModal] = useState(false);
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
      setOpenMyCurationModal(true);
      setToast({
        open: true,
        text: "저장할 큐레이션을 선택해주세요",
      });
    }
  };
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (toast.open) {
      timeoutId = setTimeout(() => {
        setToast((prev) => {
          return { ...prev, open: false };
        });
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [toast.open, setToast]);
  return (
    <>
      <div className="flex-col px-[2rem] relative">
        <div className="headline0 mb-[0.8rem]">{name}</div>
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
      <MyCurationModal
        open={openMyCurationModal}
        title="저장할 큐레이션"
        myCurationData={myCurationData}
        spaceId={id}
        handleModalFn={setOpenMyCurationModal}
      />
      <Toast open={toast.open} text={toast.text} />
    </>
  );
}
