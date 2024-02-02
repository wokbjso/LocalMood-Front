import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import { PlaceInfoProps } from "@feature/place/type";
import PlaceInfoBottom from "@feature/place/components/PlaceInfoBottom/PlaceInfoBottom";
import Image from "next/image";
import Slider from "@common/components/layout/Slider/Slider";
import { ForwardedRef, forwardRef } from "react";
import { CurationPlaceProps } from "@feature/curation/type";
import DeleteSpaceScrap from "@feature/place/queries/deleteScrapSpace";
import revalidateMyCuration from "@feature/curation/utils/revalidateMyCuration";
import revalidateScrapSpace from "@feature/place/utils/revalidateScrapSpace";

const CurationDetailInfoCard = forwardRef(
  (
    {
      id,
      name,
      type,
      address,
      imageUrls,
      purpose,
      mood,
      interior,
      bestMenu,
    }: CurationPlaceProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const purposeArray = purpose ? purpose.split(",") : [];
    const interiorArray = interior ? interior.split(",") : [];
    const moodArray = mood ? mood.split(",") : [];
    const bestMenuArray = bestMenu ? bestMenu.split(",") : [];

    const handleDeleteScrap = async () => {
      // const res = await DeleteSpaceScrap(id);
      // if (res.status === 200) {
      //   alert("스크랩이 해제되었습니다.");
      //   revalidateScrapSpace();
      //   location.reload();
      // } else {
      //   alert("에러가 발생했습니다!");
      //   return;
      // }
    };

    return (
      <div className="w-full pt-[13rem]" ref={ref}>
        <Slider>
          <div className="flex gap-[0.8rem]" ref={ref}>
            {imageUrls?.map((url, i) => (
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
        <div className="mb-[-9rem]">
          <div className="w-full pr-[1.9rem]">
            <div className="pt-[2rem] flex justify-between ">
              <div>
                <div className="flex items-center gap-[0.4rem] text-black headline2-semibold">
                  {name}
                  <div className="px-[0.6rem] py-[0.4rem]">
                    <ArrowIcon />
                  </div>
                </div>
                <div className="flex items-center gap-[0.8rem] pt-[0.8rem]">
                  <div className="body3-semibold text-text-gray-6">
                    {type === "RESTAURANT" ? "음식점" : "카페"}
                  </div>
                  <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                  <div className="body3-medium text-text-gray-5">{address}</div>
                </div>
              </div>
              <ScrapFill onClick={handleDeleteScrap} />
            </div>
            <PlaceInfoBottom
              type={type}
              purpose={purposeArray}
              interior={interiorArray}
              mood={moodArray}
              bestMenu={bestMenuArray}
              keywordCategoryNum={3}
              bottomClassName="border-[0.1rem] border-line-gray-3 p-[1.6rem] flex-col"
            />
          </div>
        </div>
      </div>
    );
  }
);

CurationDetailInfoCard.displayName = "CurationDetailInfoCard";

export default CurationDetailInfoCard;
