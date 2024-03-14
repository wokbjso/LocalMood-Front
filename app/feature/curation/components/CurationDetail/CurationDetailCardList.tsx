"use client";

import LocationFillIcon from "@common/assets/icons/location/location-fill.svg";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import CurationDetailInfoCard from "./CurationDetailInfoCard";
import { CurationPlaceProps } from "@feature/curation/type";
import useCurationDetailCardList from "./useCurationDetailCardList";
import Toast from "@common/components/ui/toast/Toast";

interface CurationDetailCardListProps {
  curationId: number;
  spaceDetails: CurationPlaceProps[];
}

export default function CurationDetailCardList({
  curationId,
  spaceDetails,
}: CurationDetailCardListProps) {
  const {
    cardRefs,
    openScrapDeleteToast,
    toastText,
    placeIndex,
    scrollHeight,
    handlers,
  } = useCurationDetailCardList(spaceDetails);

  const handlePlaceFilterClick = (index: number) => {
    handlers.changePlaceIndex(index);
    cardRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="pb-[6.1rem] p-[2rem] pr-0 w-full">
        <div className="w-full items-start">
          <div className="flex items-center gap-[0.4rem] mb-[1.2rem]">
            <LocationFillIcon />
            <p className="text-black body2-medium">
              {spaceDetails.length}개의 공간
            </p>
          </div>
          <div className="flex gap-[0.8rem] mb-[-10.6rem] overflow-x-scroll">
            {spaceDetails.map((item, index) => (
              <Filter
                key={index}
                photo={item.imageUrls && item.imageUrls[0]}
                label={item.name}
                selected={placeIndex === index}
                className="whitespace-nowrap"
                onClick={() => handlePlaceFilterClick(index)}
                // onClick 하면 get Data 변경
              />
            ))}
          </div>
        </div>
        {spaceDetails.map((props, i) => (
          <CurationDetailInfoCard
            key={props.name}
            curationId={curationId}
            {...props}
            ref={cardRefs[i]}
            handleDeleteToast={handlers.changeOpenScrapDeleteToast}
            handleToastText={handlers.changeToastText}
          />
        ))}
      </div>
      {scrollHeight > 370 && (
        <div className="flex gap-[0.8rem] w-full bg-white pl-[2rem] py-[0.4rem] pb-[0.8rem] overflow-x-scroll fixed top-[5.4rem]">
          {spaceDetails.map((item, index) => (
            <Filter
              key={index}
              photo={item.imageUrls ? item.imageUrls[0] : undefined}
              label={item.name}
              selected={placeIndex === index}
              className="whitespace-nowrap"
              onClick={() => handlePlaceFilterClick(index)}
              // onClick 하면 get Data 변경
            />
          ))}
        </div>
      )}
      <Toast open={openScrapDeleteToast} text={toastText} />
    </>
  );
}
