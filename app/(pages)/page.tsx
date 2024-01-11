import Heart from "@common/assets/icons/heart/Heart";
import Music from "@common/assets/icons/music/Music";
import RightArrow from "@common/assets/icons/arrow/arror-right.svg";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import CurationHomeList from "@feature/curation/components/CurationHomeList/CurationHomeList";
import HomeHeader from "@common/components/layout/Header/HomeHeader";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import Button from "@common/components/ui/buttons/Button/Button";
import Slider from "@common/components/layout/Slider/Slider";
import LampIcon from "@common/assets/icons/lamp/LampIcon";

export default function Home() {
  const HEADER_KEYWORD = [
    { icon: Heart, color: "#F670C7", text: "연인과의 데이트" },
    { icon: Music, color: "#8F73FD", text: "잔잔한 음악" },
    { icon: LampIcon, text: "따뜻한 조명" },
    { icon: Heart, color: "#F670C7", text: "연인과의 데이트" },
    { icon: Music, color: "#8F73FD", text: "잔잔한 음악" },
    { icon: LampIcon, text: "따뜻한 조명" },
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
      tags: [
        {
          category: "방문목적",
          detail: "연인과의 데이트",
        },
        {
          category: "방문목적",
          detail: "작업/공부",
        },
        {
          category: "인테리어",
          detail: "통창뷰",
        },
        {
          category: "인테리어",
          detail: "통창뷰",
        },
        {
          category: "공간무드",
          detail: "넓은 공간",
        },
      ],
    },
    {
      id: 1,
      placeName: "나이스워크투데이",
      placeImg:
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
      tags: [
        {
          category: "방문목적",
          detail: "연인과의 데이트",
        },
        {
          category: "방문목적",
          detail: "작업/공부",
        },
        {
          category: "인테리어",
          detail: "통창뷰",
        },
        {
          category: "공간무드",
          detail: "넓은 공간",
        },
      ],
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
      <p className="header-light  pb-[2.4rem] px-[2rem] pt-[5.4rem] bg-[#F5F8FF]">
        나에게 딱 맞는 공간을
        <br />
        <span className="header-main"> 키워드</span>로 찾아보세요
      </p>
      <div className="flex w-full overflow-x-scroll pb-[2rem] bg-[#F5F8FF]">
        {HEADER_KEYWORD.map((keyword) => (
          <Chip
            key={keyword.text}
            className="whitespace-nowrap px-[1.12rem] flex items-center h-[3.2rem] mr-[1rem]"
          >
            {<keyword.icon color={keyword.color} />}
            <span className="pl-[0.4rem]">{keyword.text}</span>
          </Chip>
        ))}
      </div>
      <div className="flex justify-center pb-[2rem] bg-[#F5F8FF]">
        <LinkLayout routeUrl="/search" query={{ keyword_search: true }}>
          <Button> 키워드로 검색하기</Button>
        </LinkLayout>
      </div>
      <div className="pb-[19.3rem] pt-[4rem]">
        <section className="mb-[4rem] pl-[2rem]">
          <span className="text-primary-normal headline2"># </span>
          <span className="text-black headline2">연인과의 데이트</span>
          <span className="text-text-gray-6 body1"> 를 위한 공간</span>
          <Slider placeData={PLACE_DUMMY} backgroundClassName="py-[1.6rem]" />
        </section>
        <section className="mb-[4rem] pl-[2rem]">
          <span className="text-primary-normal headline2"># </span>
          <span className="text-black headline2">친구와의 만남</span>
          <span className="text-text-gray-6 body1"> 을 위한 공간</span>
          <Slider placeData={PLACE_DUMMY} backgroundClassName="py-[1.6rem]" />
        </section>
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
        <section className="mb-[4rem] pl-[2rem]">
          <span className="text-primary-normal headline2"># </span>
          <span className="text-black headline2">왁자지껄 떠들기 좋은</span>
          <span className="text-text-gray-6 body1"> 공간</span>
          <Slider placeData={PLACE_DUMMY} backgroundClassName="py-[1.6rem]" />
        </section>
        <section className="mb-[4rem] pl-[2rem]">
          <span className="text-primary-normal headline2"># </span>
          <span className="text-black headline2">대화에 집중할 수 있는</span>
          <span className="text-text-gray-6 body1"> 공간</span>
          <Slider placeData={PLACE_DUMMY} backgroundClassName="py-[1.6rem]" />
        </section>
      </div>
    </>
  );
}
