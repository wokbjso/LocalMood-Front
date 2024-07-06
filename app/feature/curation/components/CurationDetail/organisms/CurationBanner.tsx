import NonCuration from "@/common/assets/images/curationNoSeat.png";
import ProfileIcon from "@/common/assets/images/greenProfile.png";
import Image from "next/image";
import PrivacyToggleButton from "../../MyCuration/molecules/PrivacyToggleButton";
import { formatDate } from "@/common/utils/date/format-date";
import { CurationDetailResponse } from "@/feature/curation/queries/dto/curation-detail";
import TextWithDivider from "@/common/components/ui/text/TextWithDivider";
import Title from "@/common/components/ui/text/Title";
import CurationBannerHashTags from "./CurationBannerHashTags";

//Organism
export default function CurationBanner({
  id,
  createdDate,
  keyword,
  title,
  variant,
  privacy,
  author,
}: Pick<
  CurationDetailResponse,
  "createdDate" | "keyword" | "title" | "variant" | "privacy" | "author"
> & { id: number }) {
  const formattedDate = formatDate(createdDate);

  return (
    <div className="w-full -mt-[18.8rem] pt-[11.5rem]">
      <CurationBannerHashTags keyword={keyword} />
      <div className="w-full flex flex-col items-center pb-[2.4rem]">
        <div className="w-[5.6rem] h-[5.6rem]">
          <Image src={NonCuration} alt="NonCuration" />
        </div>
        <Title className="max-w-[23.2rem] break-keep text-center pt-[1.2rem] pb-[0.8rem] headline0">
          {title}
        </Title>
        {variant === "my" ? (
          <PrivacyToggleButton id={id} privacy={privacy} />
        ) : (
          <div className="flex items-center gap-[4px]">
            <div className="w-[1.6rem] h-[1.6rem]">
              <Image src={ProfileIcon} alt="NonCuration" />
            </div>
            <TextWithDivider
              leftText={author}
              rightText={formattedDate}
              leftTextClassName="body3-medium"
              rightTextClassName="body3-regular text-text-gray-6"
              borderColor="#E0E0E0"
              borderClassName="mx-[12px]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
