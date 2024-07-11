"use client";

import { useRouter } from "next/navigation";
import RecordComplete from "@/feature/record/components/RecordComplete/organisms/RecordComplete";
import SelectPhoto from "@/feature/record/components/SelectPhoto/organisms/SelectPhoto";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { cloneElement } from "react";
import revalidateScrapSpace from "@/feature/place/actions/revalidateScrapSpace";
import revalidatePlaceReview from "@/feature/record/actions/revalidatePlaceReview";
import ArrowBackTopBar from "@/common/components/ui/topBar/ArrowBackTopBar";
import UseTotalRecordKeyword from "../../../hooks/useTotalRecordKeyword";
import SelectIndicatingPlaceKeyword from "@/feature/record/components/SelectIndicatingPlaceKeyword/organisms/SelectIndicatingPlaceKeyword";
import SelectEvaluationKeyword from "@/feature/record/components/SelectEvaluationKeyword/organisms/SelectEvaluationKeyword";
import RecordPageBookButton from "../organisms/RecordPageBookButton";
import { useSetRecoilState } from "recoil";
import { queryFetchingSelector } from "@/common/state/query-fetching";

interface RecordSelectProps {
  id: number;
  type: string;
  name: string;
}

//Template
export default function RecordPageBookTemplate({
  id,
  type,
  name,
}: RecordSelectProps) {
  const router = useRouter();

  const setIsQueryFetching = useSetRecoilState(queryFetchingSelector);

  const {
    indicatorIndex,
    nextDirection,
    cafeKeywordData,
    restaurantKeywordData,
    handlers,
  } = UseTotalRecordKeyword(type);

  const modifyData = (data: any) => {
    return {
      purpose: data.purpose,
      mood: data.mood,
      music: data.music,
      interior: data.interior,
      positiveEval:
        data.positiveEval.length > 0 ? data.positiveEval.join(",") : "",
      negativeEval:
        data.negativeEval.length > 0 ? data.negativeEval.join(",") : "",
    };
  };

  const getBlobData = () => {
    const formData = new FormData();
    type === "CAFE"
      ? cafeKeywordData.files.forEach((file: any) => {
          if (file instanceof File && file.size > 0) {
            formData.append("image", file);
          }
        })
      : restaurantKeywordData.files.forEach((file: any) => {
          if (file instanceof File && file.size > 0) {
            formData.append("image", file);
          }
        });
    const blob = new Blob(
      [
        JSON.stringify(
          modifyData(type === "CAFE" ? cafeKeywordData : restaurantKeywordData)
        ),
      ],
      {
        type: "application/json",
      }
    );
    formData.append("request", blob);

    return formData;
  };

  const sendRecordData = async () => {
    setIsQueryFetching(true);
    const res = await fetch(`/api/record/create/${id}`, {
      method: "POST",
      body: getBlobData(),
    });

    return res.status;
  };

  const revalidateRelatedData = () => {
    revalidateScrapSpace();
    revalidatePlaceReview();
  };

  const activateBtnForward = () => {
    handlers.handleIndicatorIndex(indicatorIndex + 1);
    handlers.handleNextDirection("forward");
  };

  const activateBtnBackward = () => {
    handlers.handleIndicatorIndex(indicatorIndex - 1);
    handlers.handleNextDirection("back");
  };

  const handleBtnForwardClicked = async () => {
    if (indicatorIndex < 2) {
      activateBtnForward();
    } else {
      if ((await sendRecordData()) === 200) {
        setIsQueryFetching(false);
        activateBtnForward();
        revalidateRelatedData();
      } else if ((await sendRecordData()) === 400) {
        alert("오류가 발생했습니다");
      }
    }
  };

  const handleBtnBackClicked = () => {
    activateBtnBackward();
  };

  const handleExitClicked = () => {
    router.replace("/record");
  };

  return (
    <div className="w-[100%] h-[100%] overflow-auto relative">
      <ArrowBackTopBar color="#9E9E9E" className="fixed z-20" />
      <TransitionGroup
        component={null}
        childFactory={(child) => {
          return cloneElement(child, {
            classNames: `record-jump-${nextDirection}`,
          });
        }}
      >
        {indicatorIndex === 0 && (
          <CSSTransition key={0} timeout={300}>
            <SelectIndicatingPlaceKeyword
              placeType={type}
              name={name}
              indicatorIndex={indicatorIndex}
              handleIndicatorIndex={handlers.handleIndicatorIndex}
              cafeKeywordData={cafeKeywordData}
              restaurantKeywordData={restaurantKeywordData}
              handleKeyword={handlers.handleKeyword}
            />
          </CSSTransition>
        )}
        {indicatorIndex === 1 && (
          <CSSTransition key={1} timeout={300}>
            <SelectEvaluationKeyword
              placeType={type}
              indicatorIndex={indicatorIndex}
              handleIndicatorIndex={handlers.handleIndicatorIndex}
              cafeKeywordData={cafeKeywordData}
              restaurantKeywordData={restaurantKeywordData}
              handleKeyword={handlers.handleKeyword}
            />
          </CSSTransition>
        )}
        {indicatorIndex === 2 && (
          <CSSTransition key={2} timeout={300}>
            <SelectPhoto
              placeType={type}
              indicatorIndex={indicatorIndex}
              handleIndicatorIndex={handlers.handleIndicatorIndex}
              cafeKeywordData={cafeKeywordData}
              restaurantKeywordData={restaurantKeywordData}
              handleAddImage={handlers.handleAddImage}
              handleDeleteImage={handlers.handleDeleteImage}
            />
          </CSSTransition>
        )}
        {indicatorIndex === 3 && (
          <CSSTransition key={3} timeout={300}>
            <RecordComplete spaceId={id} />
          </CSSTransition>
        )}
      </TransitionGroup>
      <RecordPageBookButton
        placeType={type}
        indicatorIndex={indicatorIndex}
        cafeKeywordData={cafeKeywordData}
        restaurantKeywordData={restaurantKeywordData}
        handleBtnForwardClicked={handleBtnForwardClicked}
        handleBtnBackClicked={handleBtnBackClicked}
        handleExitClicked={handleExitClicked}
      />
    </div>
  );
}
