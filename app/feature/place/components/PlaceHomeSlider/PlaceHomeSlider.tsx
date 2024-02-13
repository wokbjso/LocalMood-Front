import Slider from "@common/components/layout/Slider/Slider";
import { PlaceInfoProps } from "@feature/place/type";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
const PlaceInfoMain = dynamic(() => import("../PlaceInfoMain/PlaceInfoMain"));

interface PlaceHomeSliderProps {
  mainText: string;
  subText: string;
  placeList: PlaceInfoProps[];
  className?: string;
}

export default function PlaceHomeSlider({
  mainText,
  subText,
  placeList,
  className,
}: PlaceHomeSliderProps) {
  return (
    <section className={twMerge("mb-[4rem] pl-[2rem]", className)}>
      <span className="text-primary-normal headline2"># </span>
      <span className="text-black headline2">{mainText}</span>
      <span className="text-text-gray-6 body1"> {subText}</span>
      <Slider className="mt-[1.6rem]">
        {placeList &&
          placeList.map((data) => (
            <PlaceInfoMain
              key={data.id}
              {...data}
              keywordCategoryNum={1}
              className="w-[33.5rem] mr-[1.2rem]"
            />
          ))}
      </Slider>
    </section>
  );
}
