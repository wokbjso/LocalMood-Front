import RightArrow from "@common/assets/icons/arrow/arrow-right.svg";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import CurationHomeList from "@feature/curation/components/CurationHomeList/CurationHomeList";
import HomeHeader from "@common/components/layout/Header/HomeHeader";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import Button from "@common/components/ui/buttons/Button/Button";
import Slider from "@common/components/layout/Slider/Slider";
import LampIcon from "@common/assets/icons/lamp/LampIcon";
import Footer from "@common/components/layout/Footer/Footer";
import WineIcon from "@common/assets/icons/wine/Wine";
import ElectricCordIcon from "@common/assets/icons/electric-cord/ElectricCordIcon";
import PetIcon from "@common/assets/icons/pet/PetIcon";
import WindowIcon from "@common/assets/icons/window/WindowIcon";
import HeartIcon from "@common/assets/icons/heart/HeartIcon";
import MusicIcon from "@common/assets/icons/music/MusicIcon";
import PlaceHomeSlider from "@feature/place/components/PlaceHomeSlider/PlaceHomeSlider";

export default function Home() {
  const HEADER_KEYWORD = [
    { icon: HeartIcon, color: "#F670C7", text: "연인과의 데이트" },
    { icon: MusicIcon, color: "#8F73FD", text: "잔잔한 음악" },
    { icon: LampIcon, text: "따뜻한 조명" },
    { icon: WineIcon, text: "와인" },
    { icon: ElectricCordIcon, text: "콘센트 있음" },
    { icon: PetIcon, text: "애견동반 가능" },
    { icon: WindowIcon, text: "통창뷰" },
  ];
  const PLACE_DUMMY = [
    {
      id: 0,
      placeName: "나이스워크투데이",
      placeImg:
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
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
      placeImg:
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
      tags: {
        interior: ["통창뷰", "넓은 공간"],
      },
    },
  ];
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
    },
  ];
  return (
    <>
      <HomeHeader />
      <p className="header-light pb-[2.4rem] px-[2rem] pt-[5.4rem] bg-background-secondary-light">
        나에게 딱 맞는 공간을
        <br />
        <span className="header-main"> 키워드</span>로 찾아보세요
      </p>
      <div className="overflow-hidden">
        <ul className="flex no-wrap">
          <div className="header-slider1 flex pb-[2rem] bg-background-secondary-light">
            {HEADER_KEYWORD.map((keyword, i) => (
              <li key={keyword.text + i}>
                <Chip className="whitespace-nowrap px-[1.12rem] flex items-center h-[3.2rem] mr-[1rem]">
                  {<keyword.icon color={keyword.color} />}
                  <span className="pl-[0.4rem]">{keyword.text}</span>
                </Chip>
              </li>
            ))}
          </div>
          <div className="header-slider2 flex pb-[2rem] bg-background-secondary-light">
            {HEADER_KEYWORD.map((keyword, i) => (
              <li key={keyword.text + i}>
                <Chip className="whitespace-nowrap px-[1.12rem] flex items-center h-[3.2rem] mr-[1rem]">
                  {<keyword.icon color={keyword.color} />}
                  <span className="pl-[0.4rem]">{keyword.text}</span>
                </Chip>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div className="flex justify-center pb-[2rem] bg-background-secondary-light">
        {/* search 하는 페이지로 이동 시 키워드 선택 모달 바로 뜨도록 쿼리로 상태 전달 */}
        <LinkLayout
          routeUrl="/search"
          query={{ keyword_search: true }}
          className="w-full flex justify-center px-[2rem]"
        >
          <Button>키워드로 공간 찾기</Button>
        </LinkLayout>
      </div>
      <div className="pb-[12.3rem] pt-[4rem]">
        <PlaceHomeSlider mainText="연인과의 데이트" subText="를 위한 공간">
          <Slider placeData={PLACE_DUMMY} backgroundClassName="py-[1.6rem]" />
        </PlaceHomeSlider>
        <PlaceHomeSlider mainText="친구와의 만남" subText="을 위한 공간">
          <Slider placeData={PLACE_DUMMY} backgroundClassName="py-[1.6rem]" />
        </PlaceHomeSlider>
        <section className="mb-[5.6rem] pt-[2.8rem] pb-[2rem] px-[2rem] bg-background-gray-2">
          <div className="flex justify-between mb-[1.6rem]">
            <span className="headline2 text-black">마포구 인기 큐레이션</span>
            <div className="flex items-center headline2 text-black">
              <span className="mr-[1rem] text-text-gray-6 body2-semibold">
                더보기
              </span>
              <RightArrow />
            </div>
          </div>
          <CurationHomeList curationList={CURATION_DUMMY} />
        </section>
        <PlaceHomeSlider mainText="왁자지껄 떠들기 좋은" subText="공간">
          <Slider placeData={PLACE_DUMMY} backgroundClassName="py-[1.6rem]" />
        </PlaceHomeSlider>
        <PlaceHomeSlider mainText="대화에 집중할 수 있는" subText="공간">
          <Slider placeData={PLACE_DUMMY} backgroundClassName="py-[1.6rem]" />
        </PlaceHomeSlider>
      </div>
      <Footer />
    </>
  );
}
