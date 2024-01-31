import NonCuration from "@common/assets/icons/illustration/CurationNoSeat.png";
import ArrowRight from "@common/assets/icons/arrow/arrow-right.svg";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import CurationTopAppBar from "@feature/curation/components/CurationTopAppBar/curationTopAppBar";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import Image from "next/image";
import ProfileIcon from "@common/assets/icons/profile/greenProfile.png";
import CurationPrivacyToggleButton from "@feature/curation/components/CurationButton/CurationPrivacyToggleButton";
import CurationDetailCardList from "@feature/curation/components/CurationDetail/CurationDetailCardList";
import GetCurationDetail from "@feature/curation/queries/getCurationDetail";

export default async function CurationDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const curationDetail = await GetCurationDetail(id);
  const formattedDate = new Date(curationDetail.createdDate).toLocaleDateString(
    "ko-KR",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  console.log(curationDetail);

  return (
    <div className="relative w-full pb-[18rem]">
      <div>
        <header className="h-[18.8rem] bg-background-secondary-normal">
          <CurationTopAppBar id={id} variant={curationDetail.variant} />
        </header>
        <div className="w-full -mt-[18.8rem] pt-[11.5rem]">
          <div className="w-full flex justify-center pb-[1.6rem] gap-[0.8rem]">
            {curationDetail.keyword
              ?.split(",")
              .map((tag: string, index: number) => (
                <Chip key={index} className="bg-white body2-medium">
                  <div className="flex items-center body2-medium">
                    <p className="text-primary-normal">#&nbsp;</p>
                    <p>{tag}</p>
                  </div>
                </Chip>
              ))}
          </div>
          <div className="w-full inline-flex flex-col items-center pb-[2.4rem]">
            <div className="w-[21.5rem] flex flex-col items-center">
              <div className="w-[5.6rem] h-[5.6rem]">
                <Image src={NonCuration} alt="NonCuration" />
              </div>
              <div className="max-w-[23.2rem] headline0 text-black text-center pt-[1.2rem] pb-[0.8rem]">
                {curationDetail.title}
              </div>
              {curationDetail.variant === "my" ? (
                <CurationPrivacyToggleButton id={id} />
              ) : (
                <div className="flex items-center gap-[1.2rem]">
                  <div className="flex items-center gap-[0.4rem]">
                    <div className="w-[1.6rem] h-[1.6rem]">
                      <Image src={ProfileIcon} alt="NonCuration" />
                    </div>
                    <div className="body3-medium text-text-gray-6">
                      {curationDetail.author}
                    </div>
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
        <div className="w-full border-2 border-line-gray-3"></div>
      </div>
      {/*저장된 장소(places)가 없을 때*/}
      {!curationDetail.spaceDetails && (
        <div>
          <div className="w-full inline-flex flex-col items-center pt-[18.8rem] gap-[1.2rem]">
            <div className="headline1-semibold text-black">
              아직 저장된 공간이 없습니다.
            </div>
            <div className="flex items-center gap-[0.4rem] body2-semibold text-text-gray-6">
              공간 탐색하기
              <LinkLayout routeUrl="/">
                <ArrowRight />
              </LinkLayout>
            </div>
          </div>
        </div>
      )}
      {/*저장된 장소(places)가 있을 때*/}
      {curationDetail.spaceDetails && (
        <CurationDetailCardList spaceDetails={curationDetail.spaceDetails} />
      )}
    </div>
  );
}
