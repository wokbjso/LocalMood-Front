import PostSavePlaceAtCuration from "@feature/curation/queries/postSavePlaceAtCuration";
import Image from "next/image";
import Toast from "@common/components/ui/toast/Toast";
import revalidateScrapSpace from "@feature/place/actions/revalidateScrapSpace";
import revalidateMyCuration from "@feature/curation/actions/revalidateMyCuration";
import revalidateCurationDetail from "@feature/curation/actions/revalidateCurationDetail";
import CurationNoPhoto from "@common/assets/images/curationHomeNoImg.png";
import { CurationProps } from "@feature/curation/type";
import LocationLine from "@common/assets/icons/location/LocationLine";
import useSavePlaceModalMyCurationCard from "./useSavePlaceModalMyCurationCard";
import revalidatePlaceDetail from "@feature/place/actions/revalidatePlaceDetail";

interface SavePlaceModalMyCurationCardProps {
  curationData: Omit<CurationProps, "variant"> & { privacy: boolean };
  spaceId: number;
}

export default function SavePlaceModalMyCurationCard({
  curationData,
  spaceId,
}: SavePlaceModalMyCurationCardProps) {
  const { openSaveToast, toastText, handlers } =
    useSavePlaceModalMyCurationCard();
  const handleCurationClick = async (id: number) => {
    const res = await PostSavePlaceAtCuration(id, spaceId);
    if (res.status === 200) {
      handlers.changeOpenSaveToast(true);
      handlers.changeToastText("큐레이션에 장소가 추가되었습니다.");
      revalidateScrapSpace();
      revalidateMyCuration();
      revalidatePlaceDetail();
      revalidateCurationDetail();
    } else {
      alert("오류가 발생했습니다!");
    }
  };
  return (
    <>
      <div
        className="flex w-full"
        onClick={() => handleCurationClick(curationData.id)}
      >
        <div className="relative w-[6rem] h-[6rem]">
          <Image
            src={
              curationData.image && curationData.image.length > 0
                ? curationData.image[0]
                : CurationNoPhoto
            }
            alt="큐레이션 이미지"
            fill
            sizes="50vw,20vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            className="rounded-[8px]"
          />
        </div>
        <div className="flex flex-col justify-center ml-[1.2rem]">
          <h1 className="headline2-semibold mb-[0.8rem]">
            {curationData.title}
          </h1>
          <div className="flex items-center gap-[1rem]">
            <span className="body2-medium text-text-gray-6">
              {curationData.privacy ? "공개" : "비공개"}
            </span>
            <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
            <div className="flex items-center gap-[0.2rem] body3-semibold text-text-gray-6">
              <LocationLine color="#9E9E9E" />
              <div>{curationData.spaceCount}</div>
            </div>
          </div>
        </div>
      </div>
      <Toast open={openSaveToast} text={toastText} />
    </>
  );
}
