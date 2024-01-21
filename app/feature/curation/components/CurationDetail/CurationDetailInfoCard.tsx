import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import { PlaceInfoProps } from "@feature/place/type";
import PlaceInfoBottom from "@feature/place/components/PlaceInfoBottom/PlaceInfoBottom";
import Image from "next/image";
import Slider from "@common/components/layout/Slider/Slider";

export default function CurationDetailInfoCard({
  id,
  placeName,
  placeImg,
  category,
  location,
  scrapped,
  tags,
  tagsCategoryNum,
  className,
  imgClassName,
  onClick,
}: PlaceInfoProps) {
  return (
    <div className="w-full">
      <Slider>
        <div className="flex gap-[0.8rem]">
          {placeImg?.map((url, i) => (
            <div key={url + i} className="relative w-[28rem] h-[28rem]">
              <Image
                src={url}
                alt="장소 사진"
                fill
                sizes="90vw"
                className="rounded-[8px]"
              />
            </div>
          ))}
        </div>
      </Slider>
      <div>
        <div className="w-full  pr-[1.9rem] pb-[4rem]">
          <div className="pt-[2rem] pb-[1.6rem] flex justify-between ">
            <div>
              <div className="flex items-center gap-[0.4rem] text-black headline2-semibold">
                {placeName}
                <div className="px-[0.6rem] py-[0.4rem]">
                  <ArrowIcon />
                </div>
              </div>
              <div className="flex items-center gap-[0.8rem] pt-[0.8rem]">
                <div className="body3-semibold text-text-gray-6">
                  {category}
                </div>
                <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                <div className="body3-medium text-text-gray-5">{location}</div>
              </div>
            </div>
            <ScrapFill />
          </div>
          <PlaceInfoBottom
            tags={tags}
            tagsCategoryNum={3}
            bottomClassName="border-[0.1rem] border-line-gray-3 p-[1.6rem]"
          />
        </div>
      </div>
    </div>
  );
}
