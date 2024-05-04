import Image from "next/image";
import { forwardRef, useState } from "react";
import { CurationPlaceProps } from "@feature/curation/type";
import LinkLayout from "@common/components/layout/Link/LinkLayout";
import PlaceInfoCardBottom from "@feature/place/components/PlaceInfo/molecules/PlaceInfoCardBottom";
import SliderLayout from "@common/components/layout/Slider/SliderLayout";
import { useSetRecoilState } from "recoil";
import { myCurationModalInfoSelector } from "@common/state/myCurationModal";
import { toastInfoSelector } from "@common/state/toast";
import { validateLoggedIn } from "@common/utils/validate/validateLoggedIn";
import useCurationSpaceDelete from "@feature/curation/queries/useCurationSpaceDelete";
import { queryFetchingSelector } from "@common/state/queryFetching";
import ArrowRightIcon from "@common/assets/icons/arrow/ArrowRightIcon";
import ScrapFillIcon from "@common/assets/icons/scrap/ScrapFillIcon";
import ScrapLineIcon from "@common/assets/icons/scrap/ScrapLineIcon";

//Molecule
const CurationDetailInfoCard = forwardRef<
  HTMLDivElement,
  CurationPlaceProps & {
    variant: string;
    curationId: number;
  }
>(({ ...props }, ref) => {
  const setMyCurationModal = useSetRecoilState(myCurationModalInfoSelector);
  const setToast = useSetRecoilState(toastInfoSelector);
  const setIsQueryFetching = useSetRecoilState(queryFetchingSelector);

  const [count, setCount] = useState(0);

  const { mutate: deleteCurationSpace } = useCurationSpaceDelete(count);

  const purposeArray = props.purpose ? props.purpose.split(",") : [];
  const interiorArray = props.interior ? props.interior.split(",") : [];
  const moodArray = props.mood ? props.mood.split(",") : [];
  const bestMenuArray = props.bestMenu ? props.bestMenu.split(",") : [];

  const handleScrapState = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    if ((await validateLoggedIn()) === false) {
      location.replace("/login");
    } else {
      if (count > 0) return;
      setCount((prev) => prev + 1);
      if (props.variant === "my") {
        setIsQueryFetching(true);
        deleteCurationSpace({
          curationId: props.curationId,
          spaceId: props.id,
        });
      } else {
        setToast({
          open: true,
          text: "저장할 큐레이션을 선택해주세요",
        });
        setMyCurationModal({
          open: true,
          spaceId: props.id,
        });
      }
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
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  className="rounded-[8px] object-cover"
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
                      <ArrowRightIcon />
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
              {props.isScraped ? (
                <ScrapFillIcon onClick={handleScrapState} />
              ) : (
                <ScrapLineIcon onClick={handleScrapState} />
              )}
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
