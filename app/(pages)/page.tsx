import HomeHeader from "@common/components/layout/Header/HomeHeader";
import Footer from "@common/components/layout/Footer/Footer";
import PlaceHomeSlider from "@feature/place/components/PlaceHomeSlider/PlaceHomeSlider";
import HomeBanner from "./components/HomeBanner";
import CurationHomePopular from "@feature/curation/components/CurationHomePopular/CurationHomePopular";
import GetRandomCuration from "@feature/curation/queries/getRandomCuration";
import GetRandomPlaces from "@feature/place/queries/getRandomPlaces";
import { getSession } from "@common/utils/getSession";

export default async function Home() {
  const PLACE_PURPOSE = [
    "연인과의 데이트",
    "친구와의 만남",
    "왁자지껄 떠들기 좋은",
    "대화에 집중할 수 있는",
  ];
  const randomPlace = await GetRandomPlaces();
  console.log(randomPlace);
  const randomCuration = await GetRandomCuration();
  const userInfo = getSession();
  return (
    <>
      <HomeHeader />
      <HomeBanner />
      {/* randomPlace 데이터 채워지면 교체 */}
      <div className="pb-[12.3rem] pt-[4rem]">
        <PlaceHomeSlider
          mainText={PLACE_PURPOSE[0]}
          subText="를 위한 공간"
          placeList={randomPlace[PLACE_PURPOSE[0]]}
        />
        <PlaceHomeSlider
          mainText={PLACE_PURPOSE[1]}
          subText="을 위한 공간"
          placeList={randomPlace[PLACE_PURPOSE[1]]}
        />
        <CurationHomePopular
          mainText="마포구 인기 큐레이션"
          subText="더보기"
          curationList={randomCuration}
        />
        <PlaceHomeSlider
          mainText={PLACE_PURPOSE[2]}
          subText="공간"
          placeList={randomPlace[PLACE_PURPOSE[2]]}
        />
        <PlaceHomeSlider
          mainText={PLACE_PURPOSE[3]}
          subText="공간"
          placeList={randomPlace[PLACE_PURPOSE[3]]}
        />
      </div>
      <Footer />
    </>
  );
}
