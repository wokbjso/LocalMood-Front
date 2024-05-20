import Image from "next/image";
import CurationNoPhoto from "@/common/assets/images/curationHomeNoImg.png";
import { CurationProps } from "@/feature/curation/type";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@/common/state/toast";
import ImageWrapper from "@/common/components/ui/wrapper/ImageWrapper";
import TextWithDivider from "@/common/components/ui/text/TextWithDivider";
import SpaceCount from "@/common/components/ui/spaceCount/SpaceCount";
import Title from "@/common/components/ui/text/Title";

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

  const isSpaceAlreadyInCuration = curationData.spaceIds.includes(
    Number(spaceId)
  );

  const handleMyCurationCardClick = () => {
    if (isSpaceAlreadyInCuration) {
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
          {isSpaceAlreadyInCuration && <ImageWrapper text="저장됨" />}
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
          <Title
            title={curationData.title}
            className="headline2-semibold mb-[0.8rem]"
          />
          <div className="flex items-center">
            <TextWithDivider
              leftText={curationData.privacy ? "공개" : "비공개"}
              leftTextClassName="body2-medium"
              borderClassName="mx-[10px]"
              borderColor="#E0E0E0"
            />
            <SpaceCount
              spaceCount={curationData.spaceCount}
              iconColor="#9E9E9E"
              countTextClassName="text-text-gray-6"
            />
          </div>
        </div>
      </div>
    </>
  );
}
