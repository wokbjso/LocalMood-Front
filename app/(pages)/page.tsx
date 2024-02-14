import Footer from "@common/components/layout/Footer/Footer";
import PlaceHomeSlider from "@feature/place/components/PlaceHomeSlider/PlaceHomeSlider";
import HomeBanner from "./components/HomeBanner";
import CurationHomePopular from "@feature/curation/components/CurationHomePopular/CurationHomePopular";
import GetRandomCuration from "@feature/curation/queries/getRandomCuration";
import GetRandomPlaces from "@feature/place/queries/getRandomPlaces";

export default async function Home() {
  const HOME_SLIDER_PURPOSE = [
    "연인과의 데이트",
    "친구와의 만남",
    "왁자지껄 떠들 수 있는",
    "대화에 집중할 수 있는",
  ];
  const randomPlace = await GetRandomPlaces();
  const randomCuration = await GetRandomCuration();
  return (
    <div className="w-full h-[100vh] overflow-auto pb-[12rem]">
      <HomeBanner
        textNormalFirst="나에게 딱 맞는 공간을"
        textBold="키워드"
        textNormalLast="로 찾아보세요"
        buttonLabel="키워드로 공간 찾기"
      />
      <PlaceHomeSlider
        mainText={HOME_SLIDER_PURPOSE[0]}
        subText="를 위한 공간"
        placeList={randomPlace[HOME_SLIDER_PURPOSE[0]]}
        className="mt-[4rem]"
      />
      <PlaceHomeSlider
        mainText={HOME_SLIDER_PURPOSE[1]}
        subText="을 위한 공간"
        placeList={randomPlace[HOME_SLIDER_PURPOSE[1]]}
      />
      <CurationHomePopular
        mainText="마포구 인기 큐레이션"
        subText="더보기"
        curationList={randomCuration}
      />
      <PlaceHomeSlider
        mainText={HOME_SLIDER_PURPOSE[2]}
        subText="공간"
        placeList={randomPlace[HOME_SLIDER_PURPOSE[2]]}
      />
      <PlaceHomeSlider
        mainText={HOME_SLIDER_PURPOSE[3]}
        subText="공간"
        placeList={randomPlace[HOME_SLIDER_PURPOSE[3]]}
      />
      <Footer />
    </div>
  );
}
