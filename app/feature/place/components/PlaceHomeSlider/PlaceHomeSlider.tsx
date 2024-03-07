import Slider from "@common/components/layout/Slider/Slider";
import { PlaceInfoProps } from "@feature/place/type";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import GetRandomPlaces from "@feature/place/queries/getRandomPlaces";
const PlaceInfoMain = dynamic(() => import("../PlaceInfoMain/PlaceInfoMain"));

interface PlaceHomeSliderProps {
  mainText: string;
  subText: string;
  className?: string;
}

export default async function PlaceHomeSlider({
  mainText,
  subText,
  className,
}: PlaceHomeSliderProps) {
  const randomPlace: { [key: string]: PlaceInfoProps[] } =
    await GetRandomPlaces();
  return (
    <section className={twMerge("mb-[4rem] pl-[2rem]", className)}>
      <span className="text-primary-normal headline2"># </span>
      <span className="text-black headline2">{mainText}</span>
      <span className="text-text-gray-6 body1"> {subText}</span>
      <Slider className="mt-[1.6rem]">
        {randomPlace[mainText] &&
          randomPlace[mainText].map((data: PlaceInfoProps) => (
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
