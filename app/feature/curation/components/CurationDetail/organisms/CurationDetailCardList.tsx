"use client";

import Filter from "@common/components/ui/buttons/Filter/Filter";
import CurationDetailInfoCard from "./CurationDetailInfoCard";
import { CurationDetailResponse } from "@feature/curation/queries/dto/curation-detail";
import { twMerge } from "tailwind-merge";
import { createRef, forwardRef, useEffect, useState } from "react";
import UseMap from "@common/components/ui/map/Map/useMap";
import MapIconButton from "../molecules/MapIconButton";
import LocationCount from "../molecules/LocationCount";

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
    if (placeData.length > 0) openMap();
    else alert("저장된 공간이 없습니다");
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
            <LocationCount
              locationCount={props.curationDetail.spaceDetails.length}
            />
            <MapIconButton
              mapInfo={{
                isOpened,
                zoom: 13,
                placeData,
                closeMap,
                className: "fixed top-[7rem] left-0 z-20",
              }}
              onClick={handleMapClick}
            />
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
