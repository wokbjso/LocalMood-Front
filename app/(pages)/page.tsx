import RightArrow from "@common/assets/icons/arrow/arrow-right.svg";
import CurationHomeList from "@feature/curation/components/CurationHomeList/CurationHomeList";
import HomeHeader from "@common/components/layout/Header/HomeHeader";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import Slider from "@common/components/layout/Slider/Slider";
import Footer from "@common/components/layout/Footer/Footer";
import PlaceHomeSlider from "@feature/place/components/PlaceHomeSlider/PlaceHomeSlider";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import HomeBanner from "./components/HomeBanner";

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
      scrapped: false,
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
        <PlaceHomeSlider mainText="연인과의 데이트" subText="를 위한 공간">
          <Slider className="mt-[1.6rem]">
            {PLACE_DUMMY.map((data) => (
              <PlaceInfoMain
                key={data.id}
                {...data}
                tagsCategoryNum={0}
                className="w-[33.5rem] mr-[1.2rem]"
              />
            ))}
          </Slider>
        </PlaceHomeSlider>
        <PlaceHomeSlider mainText="친구와의 만남" subText="을 위한 공간">
          <Slider className="mt-[1.6rem]">
            {PLACE_DUMMY.map((data) => (
              <PlaceInfoMain
                key={data.id}
                {...data}
                tagsCategoryNum={0}
                className="w-[33.5rem] mr-[1.2rem]"
              />
            ))}
          </Slider>
        </PlaceHomeSlider>
        <section className="mb-[5.6rem] pt-[2.8rem] pb-[2rem] px-[2rem] bg-background-gray-2">
          <div className="flex justify-between mb-[1.6rem]">
            <span className="headline2 text-black">마포구 인기 큐레이션</span>
            <div className="flex items-center headline2 text-black">
              <LinkLayout routeUrl="/curation/popular">
                <span className="mr-[1rem] text-text-gray-6 body2-semibold">
                  더보기
                </span>
              </LinkLayout>

              <RightArrow />
            </div>
          </div>
          <CurationHomeList curationList={CURATION_DUMMY} />
        </section>
        <PlaceHomeSlider mainText="왁자지껄 떠들기 좋은" subText="공간">
          <Slider className="mt-[1.6rem]">
            {PLACE_DUMMY.map((data) => (
              <PlaceInfoMain
                key={data.id}
                {...data}
                tagsCategoryNum={0}
                className="w-[33.5rem] mr-[1.2rem]"
              />
            ))}
          </Slider>
        </PlaceHomeSlider>
        <PlaceHomeSlider mainText="대화에 집중할 수 있는" subText="공간">
          <Slider className="mt-[1.6rem]">
            {PLACE_DUMMY.map((data) => (
              <PlaceInfoMain
                key={data.id}
                {...data}
                tagsCategoryNum={0}
                className="w-[33.5rem] mr-[1.2rem]"
              />
            ))}
          </Slider>
        </PlaceHomeSlider>
      </div>
      <Footer />
    </>
  );
}
