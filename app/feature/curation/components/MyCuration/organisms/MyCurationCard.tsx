import Image from "next/image";
import CurationNoPhoto from "@/common/assets/images/curationHomeNoImg.png";
import { CurationProps } from "@/feature/curation/type";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@/common/state/toast";
import ImageWrapper from "@/common/components/ui/wrapper/ImageWrapper";
import LocationLineIcon from "@/common/assets/icons/location/LocationLineIcon";

interface MyCurationCardProps {
  spaceId: number;
  curationData: Omit<CurationProps, "variant"> & {
    privacy: boolean;
    spaceIds: number[];
  };
  onClick?: () => void;
}

//Molecule
export default function MyCurationCard({
  spaceId,
  curationData,
  onClick,
}: MyCurationCardProps) {
  const setToast = useSetRecoilState(toastInfoSelector);

  const isSpaceAlreadyInCuration = () => {
    if (curationData.spaceIds.includes(Number(spaceId))) return true;
    else return false;
  };

  const handleMyCurationCardClick = () => {
    if (isSpaceAlreadyInCuration()) {
      setToast({
        open: true,
        text: "장소가 이미 저장되어 있습니다",
      });
      return;
    }
    onClick && onClick();
  };

  return (
    <>
      <div className="flex w-full" onClick={handleMyCurationCardClick}>
        <div className="relative w-[6rem] h-[6rem]">
          {isSpaceAlreadyInCuration() && <ImageWrapper text="저장됨" />}
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
              <LocationLineIcon color="#9E9E9E" />
              <div>{curationData.spaceCount}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
