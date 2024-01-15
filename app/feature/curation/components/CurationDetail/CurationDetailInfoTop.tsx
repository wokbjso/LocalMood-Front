import LocationFillIcon from "@common/assets/icons/location/location-fill.svg";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import { curationDetailCardList } from "@feature/curation/dummyList";

export default function CurationDetailInfoTop() {
  return (
    <div className="w-full items-start p-[2rem]">
      <div className="w-full h-[7.2rem] inline-flex flex-col">
        <div className="flex items-center gap-[0.4rem]  pb-[1.2rem]">
          <div className="w-[2rem] h-[2rem]">
            <LocationFillIcon />
          </div>
          <div className="text-black body2-medium">
            {curationDetailCardList.length}개의 공간
          </div>
        </div>
        <div className="flex gap-[0.8rem] overflow-x-scroll w-full">
          {curationDetailCardList.map((item, index) => (
            <Filter
              key={index}
              photo={item.placePhoto}
              label={item.placeName}
              className="whitespace-nowrap"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
