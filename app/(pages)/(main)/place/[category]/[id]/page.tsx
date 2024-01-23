import Image from "next/image";
import Divider from "@common/components/ui/divider/Divider";
import Slider from "@common/components/layout/Slider/Slider";
import PlaceDetailInfo from "@feature/place/components/PlaceDetail/PlaceDetailInfo";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import CurationScrapped from "@feature/curation/components/CurationScrapped/CurationScrapped";
import PlaceDetailTopBar from "@feature/place/components/PlaceDetail/PlaceDetailTopBar";
import PlaceDetailKeywordEvaluation from "@feature/place/components/PlaceDetail/PlaceDetailKeywordEvaluation";
import PlaceDetailKeywordSummary from "@feature/place/components/PlaceDetail/PlaceDetailKeywordSummary";

export default function PlaceDetail() {
  const DETAIL_DUMMY = {
    id: 0,
    placeName: "나이스워크투데이",
    placeImg: [
      "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
    ],
    category: "카페",
    location: "마포구 망원동",
    scrapped: false,
    tags: {
      purpose: ["연인과의 데이트", "가족모임"],
      mood: ["대화에 집중할 수 있는"],
      music: ["잔잔한 음악"],
    },
    evaluation: {
      likes: [
        { comment: "대표 메뉴가 맛있어요", percentage: "67%" },
        { comment: "직원이 친절해요", percentage: "27%" },
      ],
      dislikes: [
        { comment: "사람이 많아서 정신없어요", percentage: "45%" },
        { comment: "주차가 불편해요", percentage: "23%" },
      ],
    },
  };
  const SIMILAR_PLACE_DUMMY = [
    {
      id: 0,
      placeName: "나이스워크투데이",
      placeImg: [
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
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
    },
    {
      id: 2,
      placeName: "나이스워크투데이",
      placeImg: [
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
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
      scrapped: false,
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
      scrapped: false,
    },
  ];
  return (
    <div className="pb-[12rem]">
      <div className="w-full h-[30rem] mb-[1.5rem] relative">
        <Image src={DETAIL_DUMMY.placeImg[0]} alt="공간 상세 사진" fill />
      </div>
      <PlaceDetailTopBar
        id={DETAIL_DUMMY.id}
        scrapped={DETAIL_DUMMY.scrapped}
        className="absolute top-[4.7rem]"
      />
      <PlaceDetailInfo
        id={DETAIL_DUMMY.id}
        placeName={DETAIL_DUMMY.placeName}
        category={DETAIL_DUMMY.category}
        location={DETAIL_DUMMY.location}
        scrapped={DETAIL_DUMMY.scrapped}
      />
      <Divider className="h-[0.4rem] mt-[2rem] mb-[3.6rem] bg-line-gray-3" />
      <PlaceDetailKeywordSummary
        mainText="유저들이 기록한 키워드 요약"
        subText="이 공간을 가장 잘 설명하는 키워드에요"
        tags={DETAIL_DUMMY.tags}
      />
      <PlaceDetailKeywordEvaluation
        id={DETAIL_DUMMY.id}
        mainText="키워드 평가"
        category={DETAIL_DUMMY.category}
        likes={DETAIL_DUMMY.evaluation.likes}
        dislikes={DETAIL_DUMMY.evaluation.dislikes}
      />
      <Divider className="bg-line-gray-3 h-[0.4rem] mb-[4.8rem]" />
      <section className="pl-[2rem] w-full">
        <span className="text-black headline2">
          {DETAIL_DUMMY.placeName}와 비슷한 장소
        </span>
        <Slider className="mt-[1.6rem] mb-[6rem]">
          {SIMILAR_PLACE_DUMMY.map((data) => (
            <PlaceInfoMain
              key={data.id}
              id={data.id}
              size="small"
              placeName={data.placeName}
              placeImg={data.placeImg}
              category={data.category}
              location={data.location}
              scrapped={data.scrapped}
              className="w-[16.3rem] mr-[0.8rem]"
            />
          ))}
        </Slider>
        <span className="text-black headline2">
          {DETAIL_DUMMY.placeName}가 담긴 큐레이션
        </span>
        <Slider className="mt-[1.6rem] mb-[6rem]">
          {CURATION_DUMMY &&
            CURATION_DUMMY?.map((data) => (
              <CurationScrapped
                key={data.id}
                id={data.id}
                curationPhoto={data.curationPhoto}
                userImg={data.userImg}
                userName={data.userName}
                hashTags={data.hashTags}
                scrapped={data.scrapped}
                mainText={data.mainText}
                className="w-[33.5rem] mr-[0.8rem]"
              />
            ))}
        </Slider>
      </section>
    </div>
  );
}
