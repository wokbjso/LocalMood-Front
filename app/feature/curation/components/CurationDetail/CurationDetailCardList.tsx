"use client";

import LocationFillIcon from "@common/assets/icons/location/location-fill.svg";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import CurationDetailInfoCard from "./CurationDetailInfoCard";
import { PlaceInfoProps } from "@feature/place/type";

interface CurationDetailCardListProps {
  place_list: PlaceInfoProps[];
}

export default function CurationDetailCardList({
  place_list,
}: CurationDetailCardListProps) {
  return (
    <div className="pb-[6.1rem] p-[2rem] pr-0 w-full">
      <div className="w-full items-start">
        <div className="flex items-center gap-[0.4rem] mb-[1.2rem]">
          <LocationFillIcon />
          <p className="text-black body2-medium">
            {place_list.length}개의 공간
          </p>
        </div>
        <div className="flex gap-[0.8rem] mb-[2.4rem] overflow-x-scroll">
          {place_list.map((item, index) => (
            <Filter
              key={index}
              photo={item.placeImg[0]}
              label={item.placeName}
              className="whitespace-nowrap"
              // onClick 하면 get Data 변경
            />
          ))}
        </div>
      </div>
      {place_list.map((props) => (
        <div key={props.placeName}>
          <CurationDetailInfoCard {...props} />
        </div>
      ))}
    </div>
  );
}
