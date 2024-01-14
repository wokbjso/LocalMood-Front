import Image from "next/image";
import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";
import ScrapIcon from "@common/assets/icons/scrap/scrap-fill.svg";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import { CurationDetailCardProps } from "@feature/curation/type";

export default function CuratoinDetailInfoCard({
  id,
  placeName,
  placePhoto,
  placeType,
  placeLocation,
  placeFor,
  placeInterior,
  placeMenu,
  placeMood,
  hashTags,
  scrapped,
  onClick,
}: CurationDetailCardProps) {
  return (
    <div className="pl-[2.1rem]">
      <div className="w-full flex flex-row overflow-x-scroll gap-[0.8rem]">
        {placePhoto?.map((url, index) => (
          <div
            key={index}
            className="w-[28rem] h-[28rem] bg-cover relative rounded-lg"
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "8px",
              background: `url(${url}) center/cover no-repeat`,
            }}
          />
        ))}
      </div>
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
                  {placeType}
                </div>
                <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                <div className="body3-medium text-text-gray-5">
                  {placeLocation}
                </div>
              </div>
            </div>
            <ScrapIcon />
          </div>
          <div className="w-full flex items-start p-[1.6rem] gap-[1.7rem] border-[1px] border-solid border-line-gray-3 rounded-t-lg">
            <div className="flex flex-col items-start pt-[0.5rem] gap-[2.4rem] text-text-gray-6 body2-medium">
              <div>방문목적 </div>
              {placeType === "카페" ? (
                <>
                  <div>인테리어</div>
                </>
              ) : (
                <>
                  <div>대표 메뉴</div>
                </>
              )}
              <div>공간 무드</div>
            </div>
            <div className="flex flex-col items-start gap-[0.8rem]">
              <div className="flex gap-[0.8rem]">
                {placeFor?.map((item, index) => (
                  <Chip key={index}>{item}</Chip>
                ))}
              </div>
              {placeType === "카페" ? (
                <>
                  <div className="flex gap-[0.8rem]">
                    {placeInterior?.map((item, index) => (
                      <Chip key={index}>{item}</Chip>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-[0.8rem]">
                    {placeMenu?.map((item, index) => (
                      <Chip key={index}>{item}</Chip>
                    ))}
                  </div>
                </>
              )}
              <div className="flex gap-[0.8rem]">
                {placeMood?.map((item, index) => (
                  <Chip key={index}>{item}</Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
