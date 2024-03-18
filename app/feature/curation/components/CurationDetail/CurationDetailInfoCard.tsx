import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import Image from "next/image";
import { forwardRef } from "react";
import { CurationPlaceProps } from "@feature/curation/type";
import revalidateCurationDetail from "@feature/curation/actions/revalidateCurationDetail";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import PlaceInfoCardBottom from "@feature/place/components/PlaceInfoCardBottom/PlaceInfoCardBottom";
import SliderLayout from "@common/components/layout/SliderLayout/SliderLayout";

const CurationDetailInfoCard = forwardRef<
  HTMLDivElement,
  CurationPlaceProps & {
    curationId: number;
    handleDeleteToast: (state: boolean) => void;
    handleToastText: (text: string) => void;
  }
>(({ ...props }, ref) => {
  const purposeArray = props.purpose ? props.purpose.split(",") : [];
  const interiorArray = props.interior ? props.interior.split(",") : [];
  const moodArray = props.mood ? props.mood.split(",") : [];
  const bestMenuArray = props.bestMenu ? props.bestMenu.split(",") : [];

  const handleDeleteScrap = async () => {
    const res = await fetch("/api/curation/delete/space", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ curationId: props.curationId, spaceId: props.id }),
    });
    if (res.status === 200) {
      props.handleDeleteToast(true);
      props.handleToastText("스크랩이 해제되었습니다");
      revalidateCurationDetail();
    } else {
      alert("에러가 발생했습니다!");
      return;
    }
  };
  return (
    <>
      <div className="w-full pt-[13rem]" ref={ref}>
        <SliderLayout>
          <div className="flex gap-[0.8rem] mr-[0.8rem]">
            {props.imageUrls?.map((url, i) => (
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
        </SliderLayout>
        <div className="mb-[-9rem]">
          <div className="w-full pr-[1.9rem]">
            <div className="pt-[2rem] flex justify-between ">
              <div>
                <div className="flex items-center gap-[0.4rem] text-black headline2-semibold">
                  {props.name}
                  <div className="px-[0.6rem] py-[0.4rem]">
                    <LinkLayout routeUrl={`/place/${props.id}`}>
                      <ArrowIcon />
                    </LinkLayout>
                  </div>
                </div>
                <div className="flex items-center gap-[0.8rem] pt-[0.8rem]">
                  <div className="body3-semibold text-text-gray-6">
                    {props.type === "RESTAURANT" ? "음식점" : "카페"}
                  </div>
                  <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                  <div className="body3-medium text-text-gray-5">
                    {props.address}
                  </div>
                </div>
              </div>
              <ScrapFill onClick={handleDeleteScrap} />
            </div>
            <PlaceInfoCardBottom
              type={props.type}
              purpose={purposeArray}
              interior={interiorArray}
              mood={moodArray}
              bestMenu={bestMenuArray}
              keywordCategoryNum={3}
              bottomClassName="border-[0.1rem] border-line-gray-3 rounded-[8px] p-[1.6rem] flex-col"
            />
          </div>
        </div>
      </div>
    </>
  );
});

CurationDetailInfoCard.displayName = "CurationDetailInfoCard";

export default CurationDetailInfoCard;
