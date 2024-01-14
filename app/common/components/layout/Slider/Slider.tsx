"use client";

import CurationScrapped from "@feature/curation/components/CurationScrapped/CurationScrapped";
import { CurationProps } from "@feature/curation/type";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import PlaceInfoRecord from "@feature/place/components/PlaceInfoRecord/PlaceInfoRecord";
import { PlaceInfoProps } from "@feature/place/type";
import { twMerge } from "tailwind-merge";

interface SliderProps {
  placeData?: PlaceInfoProps[];
  curationData?: CurationProps[];
  backgroundClassName?: string;
  individualDataClassName?: string;
}

export default function Slider({
  placeData,
  curationData,
  backgroundClassName,
  individualDataClassName,
}: SliderProps) {
  return (
    <div className={twMerge("w-full", backgroundClassName)}>
      <div className="flex overflow-x-scroll">
        {placeData &&
          placeData.map((data) => {
            return "tags" in data ? (
              <PlaceInfoMain
                key={data.id}
                id={data.id}
                placeName={data.placeName}
                placeImg={data.placeImg}
                category={data.category}
                location={data.location}
                scrapped={data.scrapped}
                tags={data.tags}
                className={twMerge(
                  "w-[33.5rem] mr-[1.2rem]",
                  individualDataClassName
                )}
              />
            ) : (
              <PlaceInfoRecord
                key={data.id}
                id={data.id}
                placeName={data.placeName}
                placeImg={data.placeImg}
                category={data.category}
                location={data.location}
                scrapped={data.scrapped}
                className={twMerge("mr-[0.8rem]", individualDataClassName)}
              />
            );
          })}
        {curationData &&
          curationData?.map((data) => (
            <CurationScrapped
              key={data.id}
              id={0}
              curationPhoto={data.curationPhoto}
              userImg={data.userImg}
              userName={data.userName}
              hashTags={data.hashTags}
              mainText={data.mainText}
              className={twMerge(
                "w-[33.5rem] mr-[0.8rem]",
                individualDataClassName
              )}
            />
          ))}
      </div>
    </div>
  );
}
