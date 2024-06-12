import LinkLayout from "@/common/components/layout/Link/LinkLayout";
import Button from "@/common/components/ui/buttons/Button/Button";
import Title from "@/common/components/ui/text/Title";
import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";
import PositiveEvaluation from "./PositiveEvaluation";
import NegativeEvaluation from "./NegativeEvaluation";

//Organism
export default function PlaceKeywordEvaluation({
  id,
  mainText,
  positiveEval,
  negativeEval,
}: Pick<PlaceDetailInfoProps, "id" | "positiveEval" | "negativeEval"> & {
  mainText: string;
}) {
  return (
    <div className="pt-[36px] px-[20px] pb-[30px]">
      <Title className="headline2 mb-[12px]">{mainText}</Title>
      <div className="mb-[20px]">
        <PositiveEvaluation
          positiveEval={positiveEval}
          className="gap-[4px] mb-[4px]"
        />
        <NegativeEvaluation negativeEval={negativeEval} />
      </div>
      <LinkLayout routeUrl={`/place/${id}/more`}>
        <Button variant="line" className="w-full h-[4rem]">
          기록 전체 보기
        </Button>
      </LinkLayout>
    </div>
  );
}
