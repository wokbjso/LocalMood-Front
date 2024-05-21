import useGetMyCuration from "@/feature/curation/queries/useGetMyCuration";
import CurationMakeButton from "../../CurationMake/molecules/CurationMakeButton";
import MyCurationCount from "../molecules/MyCurationCount";
import NoCurationText from "../molecules/NoCurationText";
import CurationInfoCardLight from "./CurationInfoCardLight";
import useOpenCurationMakeModal from "@/feature/curation/hooks/CurationMake/useOpenCurationMakeModal";
import { CurationProps } from "@/feature/curation/type";

export default function MyCurationTabContent() {
  const { data: myCurationData } = useGetMyCuration();
  const { isModalOpen, openModal, closeModal } = useOpenCurationMakeModal();

  const handleMakeCurationClick = () => {
    openModal();
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
          curationMakeModalInfo={{
            open: isModalOpen,
            openedAt: "page",
            closeModal,
          }}
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
          className=" h-[57vh]"
        />
      )}
    </>
  );
}
