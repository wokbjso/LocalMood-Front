import AddIcon from "@common/assets/icons/add/AddIcon";
import CloseIcon from "@common/assets/icons/close/CloseIcon";
import LocationLine from "@common/assets/icons/location/LocationLine";
import Modal from "@common/components/ui/modal/Modal";
import CurationMakeModal from "@feature/curation/components/CurationMake/CurationMakeModal";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import GetMyCuration from "@feature/curation/queries/getMyCuration";
import CurationNoPhoto from "@common/assets/images/curationHomeNoImg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PostSavePlaceAtCuration from "@feature/curation/queries/postSavePlaceAtCuration";
import revalidateMyCuration from "@feature/curation/utils/revalidateMyCuration";
import revalidateScrapSpace from "@feature/place/utils/revalidateScrapSpace";
import revalidateCurationDetail from "@feature/curation/utils/revalidateCurationDetail";

interface SaveModalProps {
  spaceId: number;
  handleModalFn: (state: boolean) => void;
}

export default function SaveModal({ spaceId, handleModalFn }: SaveModalProps) {
  const router = useRouter();
  const [openMakeCuration, setOpenMakeCuration] = useState(false);
  const [curationMy, setCurationMy] = useState<MyCurationResponse>();
  const handleModalCloseClick = () => {
    handleModalFn(false);
  };
  const handleCurationClick = async (id: number) => {
    const res = await PostSavePlaceAtCuration(id, spaceId);
    if (res.status === 200) {
      alert("큐레이션에 장소가 추가되었습니다.");
      revalidateMyCuration();
      revalidateScrapSpace();
      revalidateCurationDetail();
      handleModalFn(false);
      router.push("/curation");
    } else {
      alert("오류가 발생했습니다!");
    }
  };
  const handleMakeCurationClick = () => {
    setOpenMakeCuration(true);
  };
  const getCurationList = async () => {
    const myCuration = await GetMyCuration();
    setCurationMy(myCuration);
  };
  useEffect(() => {
    getCurationList();
  }, []);
  return (
    <>
      <Modal className="px-[2rem]">
        <div className="flex pt-[2.4rem] pr-[18rem] headline2-semibold">
          저장할 큐레이션
        </div>
        <CloseIcon
          className="absolute right-[2.4rem] top-[4rem]"
          onClick={handleModalCloseClick}
        />
        <div
          className="flex items-center gap-[1.2rem] mt-[2rem] body1-medium text-text-gray-8"
          onClick={handleMakeCurationClick}
        >
          <div className="w-[6rem] h-[6rem] bg-background-gray-2 rounded-lg flex p-[2.4rem]">
            <AddIcon />
          </div>
          <div>새 큐레이션 만들기</div>
        </div>
        <div className="flex flex-col items-start gap-[0.8rem] mt-[1.2rem]">
          {curationMy?.curation.map((curation) => (
            <section
              key={curation.id}
              className="flex w-full"
              onClick={() => handleCurationClick(curation.id)}
            >
              <div className="relative w-[6rem] h-[6rem]">
                <Image
                  src={
                    curation.image.length > 0
                      ? curation.image[0]
                      : CurationNoPhoto
                  }
                  alt="큐레이션 이미지"
                  fill
                  sizes="100vw"
                  className="rounded-[8px]"
                />
              </div>
              <div className="flex flex-col justify-center ml-[1.2rem]">
                <h1 className="headline2-semibold mb-[0.8rem]">
                  {curation.title}
                </h1>
                <div className="flex items-center gap-[1rem]">
                  <span className="body2-medium text-text-gray-6">
                    {curation.privacy ? "공개" : "비공개"}
                  </span>
                  <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                  <div className="flex items-center gap-[0.2rem] body3-semibold text-text-gray-6">
                    <LocationLine color="#9E9E9E" />
                    <div>{curation.spaceCount}</div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </Modal>
      {
        <CurationMakeModal
          isOpen={openMakeCuration}
          handleOpen={setOpenMakeCuration}
        />
      }
    </>
  );
}
