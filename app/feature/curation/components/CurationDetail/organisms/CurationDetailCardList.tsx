"use client";

import LocationFillIcon from "@common/assets/icons/location/location-fill.svg";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import CurationDetailInfoCard from "../molecules/CurationDetailInfoCard";
import { CurationDetailResponse } from "@feature/curation/queries/dto/curation-detail";
import { twMerge } from "tailwind-merge";
import MapIcon from "@common/assets/icons/map/map";
import { createRef, forwardRef, useEffect, useState } from "react";
import UseMap from "@common/components/ui/map/Map/useMap";

interface CurationDetailCardListProps {
  inView: boolean;
  curationId: number;
  curationDetail: CurationDetailResponse;
}

//Organism
const CurationDetailCardList = forwardRef<
  HTMLDivElement,
  CurationDetailCardListProps
>(({ ...props }, ref) => {
  const cardRefs = Array.from(
    { length: props.curationDetail.spaceDetails.length },
    () => createRef<HTMLDivElement>()
  );
  const { isOpened, openMap, closeMap } = UseMap();
  const [placeIndex, setPlaceIndex] = useState(0);
  const [placeData, setPlaceData] = useState<
    {
      address: string;
      name: string;
      type: string;
      purpose: string[];
      imgUrl: string;
    }[]
  >([]);
  const handleMapClick = () => {
    openMap();
  };

  const handlePlaceFilterClick = (index: number) => {
    setPlaceIndex(index);
    cardRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setPlaceData(
      props.curationDetail.spaceDetails.map((space) => {
        return {
          address: space.address,
          name: space.name,
          type: space.type,
          purpose: space.purpose.split(","),
          imgUrl: space.imageUrls[0],
        };
      })
    );
  }, [props.curationDetail]);
  return (
    <>
      {!props.inView && (
        <div className="w-[100%] absolute top-[4.8rem] z-10">
          <div className="flex bg-white z-10 gap-[0.8rem] pb-[0.8rem] pt-[0.6rem] pl-[2rem] overflow-x-scroll">
            {props.curationDetail.spaceDetails.map((item, i) => (
              <Filter
                key={i}
                photo={item.imageUrls && item.imageUrls[0]}
                label={item.name}
                selected={placeIndex === i}
                className={twMerge(
                  "whitespace-nowrap",
                  props.curationDetail.spaceDetails.length - 1 === i &&
                    "mr-[1.2rem]"
                )}
                onClick={() => handlePlaceFilterClick(i)}
              />
            ))}
          </div>
        </div>
      )}
      <div className="pb-[6.1rem] p-[2rem] pr-0 w-full">
        <div className="w-full items-start">
          <div className="flex items-center justify-between mb-[1.2rem] pr-[2rem]">
            <div className="flex items-center gap-[0.4rem]">
              <LocationFillIcon />
              <h3 className="text-black body2-medium">
                {props.curationDetail.spaceDetails.length}개의 공간
              </h3>
            </div>
            <button
              className="flex items-center gap-[0.4rem]"
              onClick={handleMapClick}
            >
              <MapIcon
                mapInfo={{
                  isOpened,
                  placeData,
                  closeMap,
                  className: "fixed top-[7rem] left-0 z-20",
                }}
              />
              <span className="body2-medium text-text-gray-6">지도로 보기</span>
            </button>
          </div>
          <div
            ref={ref}
            className="flex gap-[0.8rem] mb-[-10.6rem] overflow-x-scroll"
          >
            {props.curationDetail.spaceDetails.map((item, i) => (
              <Filter
                key={i}
                photo={item.imageUrls && item.imageUrls[0]}
                label={item.name}
                selected={placeIndex === i}
                className={twMerge(
                  "whitespace-nowrap",
                  props.curationDetail.spaceDetails.length - 1 === i &&
                    "mr-[1.2rem]"
                )}
                onClick={() => handlePlaceFilterClick(i)}
                // onClick 하면 get Data 변경
              />
            ))}
          </div>
        </div>
        {props.curationDetail.spaceDetails.map((space, i) => (
          <CurationDetailInfoCard
            key={space.name}
            variant={props.curationDetail.variant}
            curationId={props.curationId}
            {...space}
            ref={cardRefs[i]}
          />
        ))}
      </div>
    </>
  );
});

CurationDetailCardList.displayName = "CurationDetailCardList";

export default CurationDetailCardList;
