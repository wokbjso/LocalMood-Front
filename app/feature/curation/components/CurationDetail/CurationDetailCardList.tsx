"use client";

import LocationFillIcon from "@common/assets/icons/location/location-fill.svg";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import CurationDetailInfoCard from "./CurationDetailInfoCard";
import useCurationDetailCardList from "./useCurationDetailCardList";
import Toast from "@common/components/ui/toast/Toast";
import { useInView } from "react-intersection-observer";
import CurationTopAppBar from "../CurationTopAppBar/curationTopAppBar";
import { CurationDetailResponse } from "@feature/curation/queries/dto/curation-detail";
import { twMerge } from "tailwind-merge";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";

interface CurationDetailCardListProps {
  curationId: number;
  curationDetail: CurationDetailResponse;
  myCurationData: MyCurationResponse;
}

export default function CurationDetailCardList({
  curationId,
  curationDetail,
  myCurationData,
}: CurationDetailCardListProps) {
  const {
    cardRefs,
    openScrapDeleteToast,
    toastText,
    placeIndex,
    scrollHeight,
    handlers,
  } = useCurationDetailCardList(curationDetail.spaceDetails);
  const [inViewRef, inView] = useInView({
    threshold: 1,
  });
  const handlePlaceFilterClick = (index: number) => {
    handlers.changePlaceIndex(index);
    cardRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {!inView && (
        <div className="w-[100%] absolute top-0 z-10">
          <CurationTopAppBar
            id={curationId}
            curationDetail={curationDetail}
            text={curationDetail.title}
            variant={curationDetail.variant}
            className="bg-white z-10"
          />
          <div className="flex bg-white z-10 gap-[0.8rem] pb-[0.8rem] pt-[0.6rem] pl-[2rem] overflow-x-scroll">
            {curationDetail.spaceDetails.map((item, i) => (
              <Filter
                key={i}
                photo={item.imageUrls && item.imageUrls[0]}
                label={item.name}
                selected={placeIndex === i}
                className={twMerge(
                  "whitespace-nowrap",
                  curationDetail.spaceDetails.length - 1 === i && "mr-[1.2rem]"
                )}
                onClick={() => handlePlaceFilterClick(i)}
              />
            ))}
          </div>
        </div>
      )}
      <div className="pb-[6.1rem] p-[2rem] pr-0 w-full">
        <div className="w-full items-start">
          <div className="flex items-center gap-[0.4rem] mb-[1.2rem]">
            <LocationFillIcon />
            <p className="text-black body2-medium">
              {curationDetail.spaceDetails.length}개의 공간
            </p>
          </div>
          <div
            ref={inViewRef}
            className="flex gap-[0.8rem] mb-[-10.6rem] overflow-x-scroll"
          >
            {curationDetail.spaceDetails.map((item, i) => (
              <Filter
                key={i}
                photo={item.imageUrls && item.imageUrls[0]}
                label={item.name}
                selected={placeIndex === i}
                className={twMerge(
                  "whitespace-nowrap",
                  curationDetail.spaceDetails.length - 1 === i && "mr-[1.2rem]"
                )}
                onClick={() => handlePlaceFilterClick(i)}
                // onClick 하면 get Data 변경
              />
            ))}
          </div>
        </div>
        {curationDetail.spaceDetails.map((props, i) => (
          <CurationDetailInfoCard
            key={props.name}
            curationId={curationId}
            {...props}
            ref={cardRefs[i]}
            handleDeleteToast={handlers.changeOpenScrapDeleteToast}
            handleToastText={handlers.changeToastText}
            myCurationData={myCurationData}
          />
        ))}
      </div>
      {scrollHeight > 370 && (
        <div className="flex gap-[0.8rem] w-full bg-white pl-[2rem] py-[0.4rem] pb-[0.8rem] overflow-x-scroll fixed top-[5.4rem]">
          {curationDetail.spaceDetails.map((item, index) => (
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
