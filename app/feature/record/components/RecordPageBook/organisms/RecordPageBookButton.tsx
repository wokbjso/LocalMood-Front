import Button from "@common/components/ui/buttons/Button/Button";
import { PLACE_EVALUATIONS } from "@feature/record/constants/evaluate-keywords";

interface RecordPageBookButtonProps {
  placeType: string;
  indicatorIndex: number;
  cafeKeywordData: { [key: string]: any };
  restaurantKeywordData: { [key: string]: any };
  hasSomeData: boolean;
  handleBtnForwardClicked: () => void;
  handleBtnBackClicked: () => void;
  handleExitClicked: () => void;
}

export default function RecordPageBookButton({
  placeType,
  indicatorIndex,
  cafeKeywordData,
  restaurantKeywordData,
  hasSomeData,
  handleBtnForwardClicked,
  handleBtnBackClicked,
  handleExitClicked,
}: RecordPageBookButtonProps) {
  const checkPurposeChosen = () => {
    if (placeType === "CAFE") {
      return cafeKeywordData["purpose"] !== "";
    } else if (placeType === "RESTAURANT") {
      return restaurantKeywordData["purpose"] !== "";
    }
  };

  const checkJump = () => {
    if (indicatorIndex === 0) {
      if (placeType === "CAFE") {
        return (
          Object.keys(cafeKeywordData).filter(
            (category) =>
              typeof cafeKeywordData[category] === "string" &&
              cafeKeywordData[category] !== ""
          ).length === 0
        );
      } else if (placeType === "RESTAURANT") {
        return (
          Object.keys(restaurantKeywordData).filter(
            (category) =>
              typeof restaurantKeywordData[category] === "string" &&
              restaurantKeywordData[category] !== ""
          ).length === 0
        );
      }
    } else if (indicatorIndex === 1) {
      if (placeType === "CAFE") {
        return (
          Object.keys(PLACE_EVALUATIONS).filter(
            (category) => cafeKeywordData[category].length === 0
          ).length === 2
        );
      } else if (placeType === "RESTAURANT") {
        return (
          Object.keys(PLACE_EVALUATIONS).filter(
            (category) => restaurantKeywordData[category].length === 0
          ).length === 2
        );
      }
    } else if (indicatorIndex === 2) {
      if (placeType === "CAFE") {
        return cafeKeywordData.files.length > 0;
      } else if (placeType === "RESTAURANT") {
        return restaurantKeywordData.files.length > 0;
      }
    }
  };

  return (
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
      {indicatorIndex === 0 && (
        <Button
          onClick={handleBtnForwardClicked}
          disabled={!checkPurposeChosen()}
        >
          다음
        </Button>
      )}
      {indicatorIndex > 0 && indicatorIndex < 2 && (
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
  );
}
