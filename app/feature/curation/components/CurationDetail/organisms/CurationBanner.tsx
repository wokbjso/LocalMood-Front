import NonCuration from "@common/assets/images/curationNoSeat.png";
import ProfileIcon from "@common/assets/images/greenProfile.png";
import Image from "next/image";
import PrivacyToggleButton from "../../MyCuration/molecules/PrivacyToggleButton";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import { formatDate } from "@common/utils/date/formatDate";
import { CurationDetailResponse } from "@feature/curation/queries/dto/curation-detail";
import HashTag from "@common/components/ui/text/HashTag";

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
      <div className="w-full flex justify-center pb-[1.6rem] gap-[0.8rem]">
        {keyword?.split(",").map((tag: string, index: number) => (
          <Chip key={index} className="bg-white body2-medium">
            <HashTag
              mainText={" " + tag}
              tagClassName="body2-medium"
              mainTextClassName="body2-medium"
            />
          </Chip>
        ))}
      </div>
      <div className="w-full flex flex-col items-center pb-[2.4rem]">
        <div className="flex flex-col items-center">
          <div className="w-[5.6rem] h-[5.6rem]">
            <Image src={NonCuration} alt="NonCuration" />
          </div>
          <div className="max-w-[23.2rem] headline0 text-black text-center pt-[1.2rem] pb-[0.8rem]">
            {title}
          </div>
          {variant === "my" ? (
            <PrivacyToggleButton id={id} privacy={privacy} />
          ) : (
            <div className="flex items-center gap-[1.2rem]">
              <div className="flex items-center gap-[0.4rem]">
                <div className="w-[1.6rem] h-[1.6rem]">
                  <Image src={ProfileIcon} alt="NonCuration" />
                </div>
                <div className="body3-medium text-text-gray-6">{author}</div>
              </div>
              <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
              <div className="body3-regular text-text-gray-6">
                {formattedDate}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
