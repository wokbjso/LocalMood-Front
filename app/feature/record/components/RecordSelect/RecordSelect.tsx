"use client";

import { useRouter } from "next/navigation";
import RecordComplete from "@feature/record/components/RecordComplete/RecordComplete";
import SelectKeyword from "@feature/record/components/Keyword/SelectKeyword";
import SelectEvaluation from "@feature/record/components/Evaluation/SelectEvaluation";
import UseKeyword from "@feature/record/components/Keyword/useKeyword";
import SelectPhoto from "@feature/record/components/PhotoUpload/SelectPhoto";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Button from "@common/components/ui/buttons/Button/Button";
import { cloneElement } from "react";
import revalidateScrapSpace from "@feature/place/actions/revalidateScrapSpace";
import revalidatePlaceReview from "@feature/record/actions/revalidatePlaceReview";
import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";

interface RecordSelectProps {
  id: number;
  type: string;
  name: string;
}

export default function RecordSelect({ id, type, name }: RecordSelectProps) {
  const router = useRouter();
  const {
    indicatorIndex,
    nextDirection,
    cafeKeywordData,
    restaurantKeywordData,
    hasSomeData,
    checkJump,
    handlers,
  } = UseKeyword(type);

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
  const handleBtnForwardClicked = async () => {
    if (indicatorIndex < 2) {
      handlers.handleIndicatorIndex(indicatorIndex + 1);
      handlers.handleNextDirection("forward");
    } else {
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
            modifyData(
              type === "CAFE" ? cafeKeywordData : restaurantKeywordData
            )
          ),
        ],
        {
          type: "application/json",
        }
      );
      formData.append("request", blob);
      const res = await fetch(`/api/record/create/${id}`, {
        method: "POST",
        body: formData,
      });
      if (res.status === 200) {
        handlers.handleIndicatorIndex(indicatorIndex + 1);
        handlers.handleNextDirection("forward");
        revalidateScrapSpace();
        revalidatePlaceReview();
      } else if (res.status === 400) {
        alert("오류가 발생했습니다");
      }
    }
  };
  const handleBtnBackClicked = () => {
    handlers.handleIndicatorIndex(indicatorIndex - 1);
    handlers.handleNextDirection("back");
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
            <SelectKeyword
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
            <SelectEvaluation
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
              spaceId={id}
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
            <RecordComplete
              spaceId={id}
              handleIndicatorIndex={handlers.handleIndicatorIndex}
              hasSomeData={hasSomeData}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
      <div className="flex justify-center w-full fixed h-[13.2rem] px-[2rem] gap-[0.8rem] left-0 bottom-0 bg-white">
        {indicatorIndex > 0 && indicatorIndex < 3 && (
          <Button
            variant="line"
            className="h-[4.8rem]"
            onClick={handleBtnBackClicked}
          >
            이전
          </Button>
        )}
        {indicatorIndex < 2 && (
          <Button onClick={handleBtnForwardClicked}>
            {checkJump() ? "건너뛰기" : "다음"}
          </Button>
        )}
        {indicatorIndex === 2 && (
          <Button onClick={handleBtnForwardClicked}>기록 올리기</Button>
        )}
        {indicatorIndex === 3 && (
          <Button onClick={handleExitClicked}>
            {hasSomeData ? "완료" : "종료하기"}
          </Button>
        )}
      </div>
    </div>
  );
}
