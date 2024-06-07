import { twMerge } from "tailwind-merge";
import {
  PlaceInfoCardBottomProps,
  PlaceInfoCardTopProps,
} from "@/feature/place/components/PlaceInfo/type";
import SliderLayout from "@/common/components/layout/Slider/SliderLayout";
import GetRandomPlaces from "@/feature/place/queries/getRandomPlaces";
import HashTag from "@/common/components/ui/text/HashTag";
import PlaceInfoCard from "@/feature/place/components/PlaceInfo/organisms/PlaceInfoCard";

export interface HomePlaceSliderProps {
  mainText: string;
  subText: string;
  className?: string;
}

//Organism
export default async function HomePlaceSlider({
  mainText,
  subText,
  className,
}: HomePlaceSliderProps) {
  //generate 함수로 미리 불러와야하나 데이터를..?
  const randomPlace = await GetRandomPlaces();
  return (
    <section className={twMerge("mb-[4rem] pl-[2rem]", className)}>
      <HashTag mainText={" " + mainText} subText={" " + subText} />
      <SliderLayout className="mt-[1.6rem]">
        {randomPlace[mainText].map(
          (data: PlaceInfoCardTopProps & PlaceInfoCardBottomProps) => (
            <PlaceInfoCard
              key={data.id}
              {...data}
              keywordCategoryNum={1}
              className="w-[33.5rem] mr-[1.2rem]"
            />
          )
        )}
      </SliderLayout>
    </section>
  );
}
