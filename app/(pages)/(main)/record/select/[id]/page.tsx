"use client";
import { useSearchParams } from "next/navigation";
import RecordComplete from "@feature/record/components/RecordComplete/RecordComplete";
import SelectKeyword from "@feature/record/components/Keyword/SelectKeyword";
import SelectEvaluation from "@feature/record/components/Evaluation/SelectEvaluation";
import UseKeyword from "@feature/record/components/Keyword/useKeyword";
import SelectPhoto from "@feature/record/components/PhotoUpload/SelectPhoto";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import Button from "@common/components/ui/buttons/Button/Button";
import { cloneElement, useState } from "react";

export default function RecordSelect({
  params: id,
}: {
  params: { id: number };
}) {
  const searchParams = useSearchParams();
  const placeType = searchParams.get("type") || "";
  const name = searchParams.get("name") || "";
  const [direction, setDirection] = useState("");
  const {
    indicatorIndex,
    cafeKeywordData,
    restaurantKeywordData,
    checkJump,
    handlers,
  } = UseKeyword(placeType);
  const handleBtnForwardClicked = () => {
    handlers.changeIndicatorIndex(indicatorIndex + 1);
    setDirection("forward");
  };
  const handleBtnBackClicked = () => {
    handlers.changeIndicatorIndex(indicatorIndex - 1);
    setDirection("back");
  };
  return (
    <div className="w-full h-[100vh] overflow-auto relative">
      <BasicTopBar color="#9E9E9E" className="fixed z-20" />
      <TransitionGroup
        childFactory={(child) => {
          return cloneElement(child, {
            classNames: `record-jump-${direction}`,
          });
        }}
      >
        {indicatorIndex === 0 && (
          <CSSTransition
            key={0}
            classNames={`record-jump-${direction}`}
            timeout={300}
          >
            <SelectKeyword
              placeType={placeType}
              name={name}
              indicatorIndex={indicatorIndex}
              handleIndicatorIndex={handlers.changeIndicatorIndex}
              cafeKeywordData={cafeKeywordData}
              restaurantKeywordData={restaurantKeywordData}
              handleKeyword={handlers.changeKeyword}
            />
          </CSSTransition>
        )}
        {indicatorIndex === 1 && (
          <CSSTransition
            key={1}
            classNames={`record-jump-${direction}`}
            timeout={300}
          >
            <SelectEvaluation
              placeType={placeType}
              indicatorIndex={indicatorIndex}
              handleIndicatorIndex={handlers.changeIndicatorIndex}
              cafeKeywordData={cafeKeywordData}
              restaurantKeywordData={restaurantKeywordData}
              handleKeyword={handlers.changeKeyword}
            />
          </CSSTransition>
        )}
        {indicatorIndex === 2 && (
          <CSSTransition
            key={2}
            classNames={`record-jump-${direction}`}
            timeout={300}
          >
            <SelectPhoto
              placeType={placeType}
              spaceId={id.id}
              indicatorIndex={indicatorIndex}
              handleIndicatorIndex={handlers.changeIndicatorIndex}
              cafeKeywordData={cafeKeywordData}
              restaurantKeywordData={restaurantKeywordData}
              handleImage={handlers.changeImage}
            />
          </CSSTransition>
        )}
        {indicatorIndex === 3 && (
          <CSSTransition
            key={3}
            classNames={`record-jump-${direction}`}
            timeout={300}
          >
            <RecordComplete
              placeType={placeType}
              spaceId={id.id}
              handleIndicatorIndex={handlers.changeIndicatorIndex}
              restaurantKeywordData={restaurantKeywordData}
              cafeKeywordData={cafeKeywordData}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
      {indicatorIndex < 3 && (
        <div className="flex justify-center w-full fixed h-[13.2rem] px-[2rem] gap-[0.8rem] left-0 bottom-0 bg-white">
          {indicatorIndex > 0 && (
            <Button
              variant="line"
              className="h-[4.8rem]"
              onClick={handleBtnBackClicked}
            >
              이전
            </Button>
          )}
          <Button onClick={handleBtnForwardClicked}>
            {checkJump() ? "건너뛰기" : "다음"}
          </Button>
        </div>
      )}
    </div>
  );
}
