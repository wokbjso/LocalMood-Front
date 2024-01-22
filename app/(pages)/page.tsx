import HomeHeader from "@common/components/layout/Header/HomeHeader";
import Footer from "@common/components/layout/Footer/Footer";
import PlaceHomeSlider from "@feature/place/components/PlaceHomeSlider/PlaceHomeSlider";
import HomeBanner from "./components/HomeBanner";
import CurationHomePopular from "@feature/curation/components/CurationHomePopular/CurationHomePopular";

export default function Home() {
  //장소 get api 데이터로 대체(server side - fetch)
  const PLACE_DUMMY = [
    {
      id: 0,
      placeName: "나이스워크투데이",
      placeImg: [
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
      tags: {
        interior: ["통창뷰", "넓은 공간"],
      },
    },
    {
      id: 1,
      placeName: "나이스워크투데이",
      placeImg: [
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: true,
      tags: {
        interior: ["통창뷰", "넓은 공간"],
      },
    },
  ];
  //큐레이션 get api로 대체(server side - fetch)
  const CURATION_DUMMY = [
    {
      id: 0,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김현민",
      mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "크리스마스"],
      places: 4,
    },
    {
      id: 1,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김지원",
      mainText: "평일에 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "평일"],
      scrapped: true,
      places: 6,
    },
    {
      id: 2,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "김경민",
      mainText: "주말에 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["연인과의 데이트", "주말"],
      places: 6,
    },
    {
      id: 3,
      curationPhoto: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      userImg:
        "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
      userName: "최예원",
      mainText: "친구와 즐기기 좋은 마포구 데이트 코스",
      hashTags: ["친구와의 데이트", "마포구"],
      places: 10,
    },
  ];
  return (
    <>
      <HomeHeader />
      <HomeBanner />
      <div className="pb-[12.3rem] pt-[4rem]">
        <PlaceHomeSlider
          mainText="연인과의 데이트"
          subText="를 위한 공간"
          placeList={PLACE_DUMMY}
        ></PlaceHomeSlider>
        <PlaceHomeSlider
          mainText="친구와의 만남"
          subText="을 위한 공간"
          placeList={PLACE_DUMMY}
        />
        <CurationHomePopular
          mainText="마포구 인기 큐레이션"
          subText="더보기"
          curationList={CURATION_DUMMY}
        />
        <PlaceHomeSlider
          mainText="왁자지껄 떠들기 좋은"
          subText="공간"
          placeList={PLACE_DUMMY}
        />
        <PlaceHomeSlider
          mainText="대화에 집중할 수 있는"
          subText="공간"
          placeList={PLACE_DUMMY}
        />
      </div>
      <Footer />
    </>
  );
}
