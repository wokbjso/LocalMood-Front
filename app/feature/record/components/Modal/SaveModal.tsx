import AddIcon from "@common/assets/icons/add/AddIcon";
import CloseIcon from "@common/assets/icons/close/CloseIcon";
import LocationLine from "@common/assets/icons/location/LocationLine";
import Modal from "@common/components/ui/modal/Modal";
import CurationMakeModal from "@feature/curation/components/CurationMake/CurationMakeModal";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import GetMyCuration from "@feature/curation/queries/getMyCuration";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SaveModalProps {
  spaceId: number;
  handleModalFn: (state: boolean) => void;
}

export default function SaveModal({ spaceId, handleModalFn }: SaveModalProps) {
  const CURATION_DUMMY = [
    {
      id: 0,
      variant: "my" as "my" | "others" | undefined,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      mainText: "크리스마스 데이트 코스",
      onClick: () => {},
      places: 9,
      open: false,
    },
    {
      id: 1,
      variant: "my" as "my" | "others" | undefined,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      mainText: "맛집",
      onClick: () => {},
      places: 3,
      open: false,
    },
    {
      id: 2,
      variant: "my" as "my" | "others" | undefined,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      mainText: "카공",
      onClick: () => {},
      places: 6,
      open: true,
    },
  ];
  const [openMakeCuration, setOpenMakeCuration] = useState(false);
  const [curationMy, setCurationMy] = useState<MyCurationResponse>();
  const router = useRouter();
  const handleModalCloseClick = () => {
    handleModalFn(false);
  };
  const handleCurationClick = async (id: number) => {
    const res = await fetch(`/api/curation/add/place/${id}/${spaceId}`);
    //id 활용하여 해당 큐레이션에 공간 정보 전달 api 호출(client-side)
    router.push("/record");
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
                  src={curation.image[0]}
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
                    {/* {curation.open ? "공개" : "비공개"} */}
                    공개
                  </span>
                  <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                  <div className="flex items-center gap-[0.2rem] body3-semibold text-text-gray-6">
                    <LocationLine />
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