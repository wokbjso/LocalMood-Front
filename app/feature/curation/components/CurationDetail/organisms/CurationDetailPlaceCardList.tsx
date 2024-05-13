"use client";

import { CurationDetailResponse } from "@/feature/curation/queries/dto/curation-detail";
import { twMerge } from "tailwind-merge";
import { createRef, forwardRef, useEffect, useRef, useState } from "react";
import UseMap from "@/common/components/ui/map/Map/useMap";
import MapIconButton from "../molecules/MapIconButton";
import LocationCount from "../molecules/LocationCount";
import PlaceFilter from "../molecules/PlaceFilter";
import { assignMultipleRefs } from "@/common/utils/dom/assign-multiple-refs";
import CurationDetailPlaceCard from "./CurationDetailPlaceCard";

interface CurationDetailPlaceCardListProps {
  inView: boolean;
  curationId: number;
  curationDetail: CurationDetailResponse;
}

//Organism
const CurationDetailPlaceCardList = forwardRef<
  HTMLDivElement,
  CurationDetailPlaceCardListProps
>(({ ...props }, ref) => {
  const cardRefs = Array.from(
    { length: props.curationDetail.spaceDetails.length },
    () => createRef<HTMLDivElement>()
  );
  const placeFilterRefs = Array.from(
    { length: props.curationDetail.spaceDetails.length },
    () => createRef<HTMLButtonElement>()
  );
  const firstPlaceFilterRef = useRef<HTMLDivElement>(null);

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
  const [clickScrolling, setClickScrolling] = useState(false);
  const handleMapClick = () => {
    if (placeData.length > 0) openMap();
    else alert("저장된 공간이 없습니다");
  };

  const handlePlaceFilterClick = (index: number) => {
    if (
      firstPlaceFilterRef.current &&
      firstPlaceFilterRef.current.scrollLeft !== 0
    ) {
      firstPlaceFilterRef.current.scrollLeft = 0;
    }
    setClickScrolling(true);
    setPlaceIndex(index);
    placeFilterRefs[index].current?.scrollIntoView();
    cardRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlaceScroll = (index: number) => {
    setPlaceIndex(index);
    placeFilterRefs[index].current?.scrollIntoView();
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (clickScrolling) {
      timeoutId = setTimeout(() => {
        setClickScrolling(false);
      }, 800);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [clickScrolling]);

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
            {props.curationDetail.spaceDetails.map((item, i) => {
              return (
                <PlaceFilter
                  key={item.id}
                  photo={item.imageUrls && item.imageUrls[0]}
                  label={item.name}
                  selected={placeIndex === i}
                  className={twMerge(
                    "whitespace-nowrap",
                    props.curationDetail.spaceDetails.length - 1 === i &&
                      "mr-[1.2rem]"
                  )}
                  ref={placeFilterRefs[i]}
                  onClick={() => handlePlaceFilterClick(i)}
                />
              );
            })}
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
            ref={(el) => assignMultipleRefs(el, [ref, firstPlaceFilterRef])}
            className="flex gap-[0.8rem] mb-[-10.6rem] overflow-x-scroll"
          >
            {props.curationDetail.spaceDetails.map((item, i) => (
              <PlaceFilter
                key={item.id}
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
        {props.curationDetail.spaceDetails.map((space, i) => (
          <CurationDetailPlaceCard
            key={space.name}
            variant={props.curationDetail.variant}
            curationId={props.curationId}
            {...space}
            index={i}
            handlePlaceScroll={handlePlaceScroll}
            clickScrolling={clickScrolling}
            ref={cardRefs[i]}
          />
        ))}
      </div>
    </>
  );
});

CurationDetailPlaceCardList.displayName = "CurationDetailCardList";

export default CurationDetailPlaceCardList;
