import { forwardRef, useEffect } from "react";
import { CurationPlaceProps } from "@/feature/curation/type";
import LinkLayout from "@/common/components/layout/Link/LinkLayout";
import PlaceInfoCardBottom from "@/feature/place/components/PlaceInfo/organisms/PlaceInfoCardBottom";
import { useSetRecoilState } from "recoil";
import { myCurationModalInfoSelector } from "@/common/state/myCurationModal";
import { toastInfoSelector } from "@/common/state/toast";
import { validateLoggedIn } from "@/common/utils/validate/validateLoggedIn";
import useCurationSpaceDelete from "@/feature/curation/queries/useCurationSpaceDelete";
import { queryFetchingSelector } from "@/common/state/queryFetching";
import ScrapFillIcon from "@/common/assets/icons/scrap/ScrapFillIcon";
import ScrapLineIcon from "@/common/assets/icons/scrap/ScrapLineIcon";
import { useInView } from "react-intersection-observer";
import { assignMultipleRefs } from "@/common/utils/dom/assign-multiple-refs";
import UseCurationDetailPlaceScrapCount from "@/feature/curation/hooks/CurationDetail/useCurationDetailPlaceScrapCount";
import TextWithDivider from "@/common/components/ui/text/TextWithDivider";
import CurationDetailPlaceNameWithArrow from "../molecules/CurationDetailPlaceNameWithArrow";
import CurationDetailPlaceImageSlider from "../molecules/CurationDetailPlaceImageSlider";

//Molecule
const CurationDetailPlaceCard = forwardRef<
  HTMLDivElement,
  CurationPlaceProps & {
    variant: string;
    curationId: number;
    index: number;
    handlePlaceScroll: (index: number) => void;
    isScrolling: boolean;
  }
>(({ ...props }, ref) => {
  const [inViewRef, inView] = useInView({
    threshold: 1,
  });

  const setMyCurationModal = useSetRecoilState(myCurationModalInfoSelector);
  const setToast = useSetRecoilState(toastInfoSelector);
  const setIsQueryFetching = useSetRecoilState(queryFetchingSelector);

  const { count, plusCount } = UseCurationDetailPlaceScrapCount();

  const { mutate: deleteCurationSpace } = useCurationSpaceDelete(count);

  const handleScrapState = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    if ((await validateLoggedIn()) === false) {
      location.replace("/login");
    } else {
      if (props.variant === "my" && count > 0) return;
      plusCount();
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

  useEffect(() => {
    if (inView && !props.isScrolling) {
      props.handlePlaceScroll(props.index);
    }
  }, [inView, props]);

  return (
    <div
      className="w-full pt-[13rem]"
      ref={(el) => assignMultipleRefs(el, [ref, inViewRef])}
    >
      <CurationDetailPlaceImageSlider imageUrls={props.imageUrls} />
      <div className="mb-[-9rem]">
        <div className="w-full pr-[1.9rem]">
          <LinkLayout routeUrl={`/place/${props.id}`}>
            <div className="pt-[2rem] flex justify-between ">
              <div>
                <CurationDetailPlaceNameWithArrow name={props.name} />
                <TextWithDivider
                  leftText={props.type === "RESTAURANT" ? "음식점" : "카페"}
                  rightText={props.address}
                  className="mt-[8px]"
                  leftTextClassName="body3-semibold"
                  rightTextClassName="body3-medium text-text-gray-5"
                  borderColor="#E0E0E0"
                />
              </div>
              {props.isScraped ? (
                <ScrapFillIcon onClick={handleScrapState} />
              ) : (
                <ScrapLineIcon onClick={handleScrapState} />
              )}
            </div>
          </LinkLayout>
          <PlaceInfoCardBottom
            type={props.type}
            purpose={props.purpose ? props.purpose.split(",") : []}
            interior={props.interior ? props.interior.split(",") : []}
            mood={props.mood ? props.mood.split(",") : []}
            bestMenu={props.bestMenu ? props.bestMenu.split(",") : []}
            keywordCategoryNum={3}
            bottomClassName="border-[0.1rem] border-line-gray-3 rounded-[8px] p-[1.6rem] flex-col"
          />
        </div>
      </div>
    </div>
  );
});

CurationDetailPlaceCard.displayName = "CurationDetailInfoCard";

export default CurationDetailPlaceCard;
