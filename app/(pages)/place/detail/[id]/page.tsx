import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapFill from "@common/assets/icons/scrap/scrap-fill.svg";
import Line from "@common/assets/icons/line/line.svg";
import Heart from "@common/assets/icons/heart/Heart";
import Image from "next/image";
import Divider from "@common/components/ui/divider/Divider";
import UserDouble from "@common/assets/icons/user/UserDouble";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import GraphUpDownVote from "@common/components/ui/graph/GraphUpDownVote/GraphUpDownVote";
import Button from "@common/components/ui/buttons/Button/Button";
import Slider from "@common/components/layout/Slider/Slider";

export default function PlaceDetail() {
  const DETAIL_DUMMY = {
    id: 0,
    placeName: "나이스워크투데이",
    placeImg:
      "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
    category: "카페",
    location: "마포구 망원동",
    scrapped: false,
    tags: {
      "방문 목적": ["연인과의 데이트", "가족모임"],
      "공간 무드": ["대화에 집중할 수 있는"],
      "배경 음악": ["잔잔한 음악"],
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
    {
      id: 2,
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
    <div className="pb-[27rem]">
      <div className="w-full h-[30rem] mb-[1.5rem] relative">
        <Image src={DETAIL_DUMMY.placeImg} alt="공간 상세 사진" fill />
      </div>
      <div className="flex-col px-[2rem] relative">
        {!DETAIL_DUMMY.scrapped ? (
          <ScrapLine className="absolute cursor-pointer right-[2rem] top-[0.5rem]" />
        ) : (
          <ScrapFill className="absolute cursor-pointer right-[2rem] top-[0.5rem]" />
        )}
        <div className="headline2 mb-[0.8rem]">{DETAIL_DUMMY.placeName}</div>
        <div className="flex">
          <span className="body2-semibold text-text-gray-6">
            {DETAIL_DUMMY.category}
          </span>
          <Line className="mx-[0.8rem]" />
          <span className="body2-medium text-text-gray-5">
            {DETAIL_DUMMY.location}
          </span>
        </div>
      </div>
      <Divider className="h-[0.4rem] mt-[2rem] mb-[3.6rem] bg-line-gray-3" />
      <div className="px-[2rem]">
        <p className="headline2 mb-[0.8rem] text-black">
          유저들이 기록한 키워드 요약
        </p>
        <p className="body3-medium text-text-gray-6">
          이 공간을 가장 잘 설명하는 키워드에요
        </p>
      </div>
      <div className="bg-background-secondary-light mt-[1.6rem] p-[2rem]">
        <span className="body2-medium text-text-gray-6">방문 목적</span>
        <div className="flex justify-between mt-[0.8rem] mb-[1.6rem]">
          <div className="w-[48%] flex flex-col items-center p-[1.2rem] bg-white rounded-[8px]">
            <Heart color="#F670C7" />
            <div className="mt-[0.8rem]">
              <span className="body1 text-primary-normal"># </span>
              <span className="body1 text-black">
                {DETAIL_DUMMY.tags["방문 목적"][0]}
              </span>
            </div>
          </div>
          <div className="w-[48%] flex flex-col items-center p-[1.2rem] bg-white rounded-[8px]">
            <UserDouble color="#9B8AFB" />
            <div className="mt-[0.8rem]">
              <span className="body1 text-primary-normal"># </span>
              <span className="body1 text-black">
                {DETAIL_DUMMY.tags["방문 목적"][1]}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-[0.8rem]">
          <span className="body2-medium text-text-gray-6 mr-[1.8rem]">
            공간 무드
          </span>
          <Chip className="bg-white">
            <span className="body2-medium text-primary-normal"># </span>
            <span className="body2-medium">
              {DETAIL_DUMMY.tags["공간 무드"][0]}
            </span>
          </Chip>
        </div>
        <div>
          <span className="body2-medium text-text-gray-6 mr-[1.8rem]">
            배경 음악
          </span>
          <Chip className="bg-white">
            <span className="body2-medium text-primary-normal"># </span>
            <span className="body2-medium">
              {DETAIL_DUMMY.tags["배경 음악"][0]}
            </span>
          </Chip>
        </div>
      </div>
      <div className="pt-[3.6rem] px-[2rem] pb-[3rem]">
        <div className="text-black headline2 mb-[1.2rem]">키워드 평가</div>
        <div className="mb-[2rem]">
          <div>
            {DETAIL_DUMMY.evaluation.likes.map((li, i) => (
              <GraphUpDownVote
                key={li.comment}
                evaluation={li.comment}
                percentage={li.percentage}
                like={true}
                className={i === 0 ? "mb-[0.4rem]" : ""}
              />
            ))}
          </div>
          <div className="flex flex-col items-end">
            {DETAIL_DUMMY.evaluation.dislikes.map((li, i) => (
              <GraphUpDownVote
                key={li.comment}
                evaluation={li.comment}
                percentage={li.percentage}
                like={false}
                className={i === 0 ? "mb-[0.4rem]" : ""}
              />
            ))}
          </div>
        </div>
        <Button variant="line">기록 전체 보기</Button>
      </div>
      <Divider className="bg-line-gray-3 h-[0.4rem] mb-[4.8rem]" />
      <div className="pl-[2rem]">
        <Slider
          title="나이스워크투데이와 비슷한 장소"
          placeData={SIMILAR_PLACE_DUMMY}
          className="mb-[6rem]"
        />
        <Slider
          title="나이스워크투데이가 담긴 큐레이션"
          curationData={CURATION_DUMMY}
          className="mb-[6rem]"
        />
      </div>
    </div>
  );
}
