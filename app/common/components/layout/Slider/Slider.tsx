import CurationScrapped from "@feature/curation/components/CurationScrapped/CurationScrapped";
import { CurationProps } from "@feature/curation/type";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import PlaceInfoRecord from "@feature/place/components/PlaceInfoRecord/PlaceInfoRecord";
import { PlaceInfoProps } from "@feature/place/type";
import { twMerge } from "tailwind-merge";

interface SliderProps {
  title: string;
  placeData?: PlaceInfoProps[];
  curationData?: CurationProps[];
  className?: string;
}

export default function Slider({
  title,
  placeData,
  curationData,
  className,
}: SliderProps) {
  return (
    <div className={twMerge("w-full", className)}>
      <div className="text-black headline2 mb-[1.6rem]">{title}</div>
      <div className="flex overflow-x-scroll">
        {placeData &&
          placeData.map((data) => (
            <PlaceInfoRecord
              key={data.id}
              id={data.id}
              placeName={data.placeName}
              placeImg={data.placeImg}
              category={data.category}
              location={data.location}
              scrapped={data.scrapped}
              className="mr-[0.8rem]"
            />
          ))}
        {placeData &&
          "tags" in placeData &&
          placeData.map((data) => (
            <PlaceInfoMain
              key={data.id}
              id={data.id}
              placeName={data.placeName}
              placeImg={data.placeImg}
              category={data.category}
              location={data.location}
              scrapped={data.scrapped}
              tags={data.tags}
              className="w-[33.5rem] mr-[1.2rem]"
            />
          ))}
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
              className="w-[33.5rem] mr-[0.8rem]"
            />
          ))}
      </div>
    </div>
  );
}
