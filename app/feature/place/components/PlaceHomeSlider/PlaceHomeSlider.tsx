import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import {
  PlaceInfoCardBottomProps,
  PlaceInfoCardTopProps,
} from "@feature/place/type";
import SliderLayout from "@common/components/layout/SliderLayout/SliderLayout";
import GetRandomPlaces from "@feature/place/queries/getRandomPlaces";
import SliderHashTag from "@feature/home/components/molecules/SliderHashTag";
const PlaceInfoCard = dynamic(() => import("../PlaceInfoCard/PlaceInfoCard"));

export interface PlaceHomeSliderProps {
  mainText: string;
  subText: string;
  className?: string;
}

//Organism
export default async function PlaceHomeSlider({
  mainText,
  subText,
  className,
}: PlaceHomeSliderProps) {
  const randomPlace: {
    [key: string]: (PlaceInfoCardTopProps & PlaceInfoCardBottomProps)[];
  } = await GetRandomPlaces();
  return (
    <section className={twMerge("mb-[4rem] pl-[2rem]", className)}>
      <SliderHashTag mainText={mainText} subText={subText} />
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
