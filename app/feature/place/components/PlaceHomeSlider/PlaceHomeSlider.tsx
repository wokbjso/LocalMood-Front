import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import {
  PlaceInfoCardBottomProps,
  PlaceInfoCardTopProps,
} from "@feature/place/type";
import getMyCuration from "@feature/curation/queries/getMyCuration";
import SliderLayout from "@common/components/layout/SliderLayout/SliderLayout";
const PlaceInfoCard = dynamic(() => import("../PlaceInfoCard/PlaceInfoCard"));

interface PlaceHomeSliderProps {
  mainText: string;
  subText: string;
  className?: string;
  placeData: (PlaceInfoCardTopProps & PlaceInfoCardBottomProps)[];
}

export default async function PlaceHomeSlider({
  mainText,
  subText,
  className,
  placeData,
}: PlaceHomeSliderProps) {
  const myCurationData = await getMyCuration();
  return (
    <section className={twMerge("mb-[4rem] pl-[2rem]", className)}>
      <span className="text-primary-normal headline2"># </span>
      <span className="text-black headline2">{mainText}</span>
      <span className="text-text-gray-6 body1"> {subText}</span>
      <SliderLayout className="mt-[1.6rem]">
        {placeData &&
          placeData.map(
            (data: PlaceInfoCardTopProps & PlaceInfoCardBottomProps) => (
              <PlaceInfoCard
                key={data.id}
                {...data}
                keywordCategoryNum={1}
                myCurationData={myCurationData}
                className="w-[33.5rem] mr-[1.2rem]"
              />
            )
          )}
      </SliderLayout>
    </section>
  );
}
