import useGetMyCuration from "@/feature/curation/queries/useGetMyCuration";
import CurationMakeButton from "../../CurationMake/molecules/CurationMakeButton";
import MyCurationCount from "../molecules/MyCurationCount";
import NoCurationText from "../molecules/NoCurationText";
import CurationInfoCardLight from "./CurationInfoCardLight";
import { CurationProps } from "@/feature/curation/type";
import { useSetRecoilState } from "recoil";
import { isModalOpenSelector } from "@/common/state/modal-open";

export default function MyCurationTabContent() {
  const { data: myCurationData } = useGetMyCuration();
  const setIsCurationMakeModalOpened = useSetRecoilState(
    isModalOpenSelector("makeCuration")
  );

  const handleMakeCurationClick = () => {
    setIsCurationMakeModalOpened(true);
  };

  return (
    <>
      <div className="flex items-center justify-between pb-[1.6rem] pt-[2rem]">
        <MyCurationCount
          count={myCurationData && myCurationData.curationCount}
        />
        <CurationMakeButton
          size="small"
          text="만들기"
          onClick={handleMakeCurationClick}
        />
      </div>
      {myCurationData && myCurationData?.curation.length > 0 ? (
        myCurationData?.curation.map((props: CurationProps) => (
          <div key={props.author + props.id} className="mb-[1.2rem]">
            <CurationInfoCardLight variant="my" {...props} />
          </div>
        ))
      ) : (
        <NoCurationText
          text="아직 생성한 큐레이션이 없습니다."
          className=" h-[57dvh]"
        />
      )}
    </>
  );
}
