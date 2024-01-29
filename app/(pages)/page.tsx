import HomeHeader from "@common/components/layout/Header/HomeHeader";
import Footer from "@common/components/layout/Footer/Footer";
import PlaceHomeSlider from "@feature/place/components/PlaceHomeSlider/PlaceHomeSlider";
import HomeBanner from "./components/HomeBanner";
import CurationHomePopular from "@feature/curation/components/CurationHomePopular/CurationHomePopular";
import GetRandomCuration from "@feature/curation/queries/getRandomCuration";
import GetRandomPlaces from "@feature/place/queries/getRandomPlaces";

export default async function Home() {
  const PLACE_PURPOSE = [
    "연인과의 데이트",
    "친구와의 만남",
    "왁자지껄 떠들기 좋은",
    "대화에 집중할 수 있는",
  ];
  const randomPlace = await GetRandomPlaces();
  const PLACE_DUMMY = [
    {
      id: 1,
      name: "나이스워크투데이",
      imgUrl: [
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      ],
      type: "카페",
      address: "마포구 망원동",
      isScraped: false,
      keyword: ["통창뷰", "넓은 공간"],
    },
    {
      id: 2,
      name: "나이스워크투데이",
      imgUrl: [
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      ],
      type: "카페",
      address: "마포구 망원동",
      isScraped: true,
      keyword: ["통창뷰", "넓은 공간"],
    },
  ];
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
          curationList={await GetRandomCuration()}
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
