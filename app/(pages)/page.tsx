import Footer from "@common/components/layout/Footer/Footer";
import PlaceHomeSlider from "@feature/place/components/PlaceHomeSlider/PlaceHomeSlider";
import HomeBanner from "./HomeBanner";
import CurationHomePopular from "@feature/curation/components/CurationHomePopular/CurationHomePopular";
import GetRandomCuration from "@feature/curation/queries/getRandomCuration";

export default async function Home() {
  const randomCuration = await GetRandomCuration();
  return (
    <div className="w-[100%] h-[100%] overflow-y-auto overflow-x-hidden">
      <HomeBanner
        textNormalFirst="나에게 딱 맞는 공간을"
        textBold="키워드"
        textNormalLast="로 찾아보세요"
        buttonLabel="키워드로 공간 찾기"
      />
      <PlaceHomeSlider
        mainText="연인과의 데이트"
        subText="를 위한 공간"
        className="mt-[4rem]"
      />
      <PlaceHomeSlider mainText="친구와의 만남" subText="을 위한 공간" />
      <CurationHomePopular
        mainText="마포구 인기 큐레이션"
        subText="더보기"
        curationList={randomCuration}
      />
      <PlaceHomeSlider mainText="왁자지껄 떠들 수 있는" subText="공간" />
      <PlaceHomeSlider
        mainText="대화에 집중할 수 있는"
        subText="공간"
        className="pb-[12rem]"
      />
      <Footer />
    </div>
  );
}
