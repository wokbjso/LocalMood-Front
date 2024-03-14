"use client";

import { useRouter, useSearchParams } from "next/navigation";
import RecordComplete from "@feature/record/components/RecordComplete/RecordComplete";
import SelectKeyword from "@feature/record/components/Keyword/SelectKeyword";
import SelectEvaluation from "@feature/record/components/Evaluation/SelectEvaluation";
import UseKeyword from "@feature/record/components/Keyword/useKeyword";
import SelectPhoto from "@feature/record/components/PhotoUpload/SelectPhoto";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import Button from "@common/components/ui/buttons/Button/Button";
import { cloneElement, createRef } from "react";

export default function RecordSelect({
  params: id,
}: {
  params: { id: number };
}) {
  const searchParams = useSearchParams();
  const placeType = searchParams.get("type") || "";
  const name = searchParams.get("name") || "";
  const router = useRouter();
  const refs = Array.from({ length: 4 }, () => createRef<HTMLDivElement>());
  const {
    indicatorIndex,
    nextDirection,
    cafeKeywordData,
    restaurantKeywordData,
    hasSomeData,
    checkJump,
    handlers,
  } = UseKeyword(placeType);
  const handleBtnForwardClicked = () => {
    handlers.handleIndicatorIndex(indicatorIndex + 1);
    handlers.handleNextDirection("forward");
  };
  const handleBtnBackClicked = () => {
    handlers.handleIndicatorIndex(indicatorIndex - 1);
    handlers.handleNextDirection("back");
  };
  const handleExitClicked = () => {
    router.replace("/record");
  };
  return (
    <div className="w-full h-[100vh] overflow-auto relative">
      <BasicTopBar color="#9E9E9E" className="fixed z-20" />
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
              placeType={placeType}
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
              placeType={placeType}
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
              placeType={placeType}
              spaceId={id.id}
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
              spaceId={id.id}
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
        {indicatorIndex < 3 && (
          <Button onClick={handleBtnForwardClicked}>
            {checkJump() ? "건너뛰기" : "다음"}
          </Button>
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
