import NonCuration from "@common/assets/icons/illustration/CurationNoSeat.png";
import ArrowRight from "@common/assets/icons/arrow/arrow-right.svg";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import CurationTopAppBar from "@feature/curation/components/CurationTopAppBar/curationTopAppBar";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import Image from "next/image";
import ProfileIcon from "@common/assets/icons/profile/greenProfile.png";
import CurationPrivacyToggleButton from "@feature/curation/components/CurationButton/CurationPrivacyToggleButton";
import CurationDetailCardList from "@feature/curation/components/CurationDetail/CurationDetailCardList";

export default function CurationDetail() {
  //api get 으로 가져오는 data로 대체

  const CURATION_INFO = {
    id: 0,
    variant: "my",
    user_name: "김현민",
    curation_name: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
    hash_tags: ["연인과의 데이트", "크리스마스"],
  };

  const curationDetailCardList = [
    {
      id: 0,
      placeName: "디벙크",
      placeImg: [
        "https://media.istockphoto.com/id/540233806/ko/%EC%82%AC%EC%A7%84/%EA%B5%AC%EC%9A%B4-%EC%87%A0%EA%B3%A0%EA%B8%B0-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC.jpg?s=612x612&w=0&k=20&c=dDQxLsHVAzgJ1FQmiZMQeELPRyx9MlTyJKF7SwSV3n8=",
        "https://media.istockphoto.com/id/1332101410/ko/%EC%82%AC%EC%A7%84/%EC%9C%A0%EB%A6%AC%EC%97%90-%EC%8F%9F%EC%95%84%EC%A7%80%EB%8A%94-%EB%A0%88%EB%93%9C-%EC%99%80%EC%9D%B8%EC%9D%98-%EC%9B%80%EC%A7%81%EC%9E%84%EC%9D%84-%EB%8F%99%EA%B2%B0%ED%95%A9%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=moSOn9po9OAyJq30-_AVBCVCHxfPnUg6wliONyEAaGg=",
        "https://media.istockphoto.com/id/1332101410/ko/%EC%82%AC%EC%A7%84/%EC%9C%A0%EB%A6%AC%EC%97%90-%EC%8F%9F%EC%95%84%EC%A7%80%EB%8A%94-%EB%A0%88%EB%93%9C-%EC%99%80%EC%9D%B8%EC%9D%98-%EC%9B%80%EC%A7%81%EC%9E%84%EC%9D%84-%EB%8F%99%EA%B2%B0%ED%95%A9%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=moSOn9po9OAyJq30-_AVBCVCHxfPnUg6wliONyEAaGg=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
      tags: {
        purpose: ["연인과의 데이트", "작업/공부/책"],
        interior: ["통창뷰", "넓은 공간"],
        mood: ["모던한", "앤틱한"],
      },
    },
    {
      id: 1,
      placeName: "나이스워크투데이",
      placeImg: [
        "https://media.istockphoto.com/id/1398630614/ko/%EC%82%AC%EC%A7%84/%EA%B5%AC%EC%9A%B4-%EB%A1%A4%EB%B9%B5%EC%97%90-%EB%B2%A0%EC%9D%B4%EC%BB%A8-%EC%B9%98%EC%A6%88%EB%B2%84%EA%B1%B0.jpg?s=612x612&w=0&k=20&c=VNy5uFGP5cL5cjnC9Z_kK5h8ciu4ckw45P-1NqBH9hg=",
        "https://media.istockphoto.com/id/1197176660/ko/%EC%82%AC%EC%A7%84/%ED%99%88%EB%A9%94%EC%9D%B4%EB%93%9C-%ED%94%84%EB%A0%8C%EC%B9%98-%ED%94%84%EB%9D%BC%EC%9D%B4.jpg?s=612x612&w=0&k=20&c=_oD5ojTjO0ohZ1-z1s-kgcRvJrnOsgzQa5N-ZAoR7V8=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
      tags: {
        purpose: ["연인과의 데이트", "작업/공부/책"],
        interior: ["통창뷰", "넓은 공간"],
        mood: ["모던한", "앤틱한"],
      },
    },
    {
      id: 2,
      placeName: "금복식당",
      placeImg: [
        "https://media.istockphoto.com/id/855749956/ko/%EC%82%AC%EC%A7%84/%EB%A0%88%EB%AA%AC-%EC%A1%B0%EA%B0%81%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%9A%B4%EB%90%9C-%EB%8F%84%EB%AF%B8-%EC%83%9D%EC%84%A0.jpg?s=612x612&w=0&k=20&c=XSYfi8iwsIG3Z7H7ylRpQeJdeg5n4pD7kn08XxacMmc=",
        "https://media.istockphoto.com/id/155372859/ko/%EC%82%AC%EC%A7%84/%EC%9D%B8%EB%AA%85%EB%B3%84-%EA%B3%A0%EA%B8%B0%EC%9E%A1%EC%9D%B4.jpg?s=612x612&w=0&k=20&c=oGwsokbGjGTTuBqkXYcAljfGUeKRed_VV_8QmMldlHQ=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
      tags: {
        purpose: ["연인과의 데이트", "작업/공부/책"],
        interior: ["통창뷰", "넓은 공간"],
        mood: ["모던한", "앤틱한"],
      },
    },
    {
      id: 3,
      placeName: "맥도날드",
      placeImg: [
        "https://media.istockphoto.com/id/458737115/ko/%EC%82%AC%EC%A7%84/mcdonalds-%ED%8C%BB%EB%A7%90.jpg?s=612x612&w=0&k=20&c=nWHXncfC7EDWF8ZVWX8Hpvu5RkdrA5YV1P2MrkcKKCU=",
        "https://media.istockphoto.com/id/1062831310/ko/%EC%82%AC%EC%A7%84/%EC%96%B4%EB%91%90%EC%9A%B4-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%96%BC%EC%9D%8C-%EC%8A%A4%ED%94%8C%EB%9E%98%EC%8B%9C%EC%99%80-%EC%9C%A0%EB%A6%AC%EC%97%90-%EC%B2%AD%EB%9F%89-%EC%9D%8C%EB%A3%8C%EB%A5%BC-%EB%B6%93%EB%8A%94-%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=F2c6_btYvOwHtYR91AnH9XFfV3To9ZuKRXMyJiwQSRs=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
      tags: {
        purpose: ["연인과의 데이트", "작업/공부/책"],
        interior: ["통창뷰", "넓은 공간"],
        mood: ["모던한", "앤틱한"],
      },
    },
  ];

  return (
    <div className="relative w-full pb-[18rem]">
      <div>
        <header className="h-[18.8rem] bg-background-secondary-normal">
          <CurationTopAppBar
            id={CURATION_INFO.id}
            variant={CURATION_INFO.variant}
            mainText={CURATION_INFO.curation_name}
          />
        </header>
        <div className="w-full -mt-[18.8rem] pt-[11.5rem]">
          <div className="w-full flex justify-center pb-[1.6rem] gap-[0.8rem]">
            {CURATION_INFO.hash_tags?.map((tag, index) => (
              <Chip key={index} className="bg-white">
                <div className="flex">
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
                {CURATION_INFO.curation_name}
              </div>
              {CURATION_INFO.variant === "my" ? (
                <CurationPrivacyToggleButton id={CURATION_INFO.id} />
              ) : (
                <div className="flex items-center gap-[1.2rem]">
                  <div className="flex items-center gap-[0.4rem]">
                    <div className="w-[1.6rem] h-[1.6rem]">
                      <Image src={ProfileIcon} alt="NonCuration" />
                    </div>
                    <div className="body3-medium text-text-gray-6">
                      {CURATION_INFO.user_name}
                    </div>
                  </div>
                  <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                  <div className="body3-regular text-text-gray-6">
                    2023.02.13
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full border-2 border-line-gray-3"></div>
      </div>
      {/*저장된 장소(places)가 없을 때*/}
      {!curationDetailCardList && (
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
      {curationDetailCardList && (
        <CurationDetailCardList place_list={curationDetailCardList} />
      )}
    </div>
  );
}
