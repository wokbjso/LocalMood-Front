import BookIcon from "@common/assets/icons/book/BookIcon";
import BusinessIcon from "@common/assets/icons/business/BusinessIcon";
import ChatIcon from "@common/assets/icons/chat/ChatIcon";
import Heart from "@common/assets/icons/heart/HeartIcon";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import Divider from "@common/components/ui/divider/Divider";
import GraphGage from "@common/components/ui/graph/GraphGage/GraphGage";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import PlaceReview from "@feature/place/components/PlaceReview/PlaceReview";
import { PLACE_PURPOSE } from "@feature/place/constants/place-tag-category";

export default function PlaceDetailMore() {
  const NOW_PURPOSE = "연인과의 데이트";
  const DUMMY_MORE_DETAIL = {
    placeName: "나이스워크투데이",
    purpose: [
      {
        comment: "연인과의 데이트",
        percentage: "43%",
        icon: Heart,
        color: "#F670C7",
        reviews: [
          {
            id: 0,
            profile_img:
              "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
            user_name: "카페탐방",
            review_date: "23.04.01",
            tags: {
              purpose: ["연인과의 데이트"],
              interior: ["따뜻한 조명", "앤틱한"],
              mood: ["대화에 집중할 수 있는"],
              music: ["잔잔한 음악"],
            },
            review_photos: [
              "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
              "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
            ],
            evaluation: {
              likes: ["시그니처 음료가 맛있어요"],
              dislikes: ["화장실이 밖에 있어요"],
            },
          },
          {
            id: 1,
            profile_img:
              "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
            user_name: "카페탐방",
            review_date: "23.04.01",
            tags: {
              purpose: ["연인과의 데이트"],
              interior: ["따뜻한 조명", "앤틱한"],
              mood: ["대화에 집중할 수 있는"],
              music: ["잔잔한 음악"],
            },
            review_photos: [
              "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
              "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
            ],
            evaluation: {
              likes: ["시그니처 음료가 맛있어요"],
              dislikes: ["화장실이 밖에 있어요"],
            },
          },
        ],
      },
      {
        comment: "친구/가족과의 만남",
        percentage: "23%",
        icon: ChatIcon,
        color: "#FDB022",
      },
      {
        comment: "작업/공부/책",
        percentage: "21%",
        icon: BookIcon,
        color: "#A4BCFD",
        color2: "#5546AA",
      },
      {
        comment: "비즈니스",
        percentage: "13%",
        icon: BusinessIcon,
        color: "#0BA5EC",
        color2: "white",
      },
    ],
  };
  return (
    <div className="pb-[14.2rem]">
      <BasicTopBar color="#9E9E9E" className="" />
      <section className="px-[2rem] mt-[1.2rem]">
        <div className="headline1 text-black">
          {DUMMY_MORE_DETAIL.placeName}의 공간기록
        </div>
        <div className="pt-[1.2rem] pb-[4rem]">
          {DUMMY_MORE_DETAIL.purpose.map((li, i) => (
            <GraphGage
              key={li.comment}
              icon={<li.icon color={li.color} color2={li.color2} />}
              evaluation={li.comment}
              percentage={li.percentage}
              className={i === 0 ? "mt-[3.2rem] mb-[2.4rem]" : "mb-[2.4rem]"}
            />
          ))}
        </div>
      </section>
      <Divider className="bg-line-gray-3 h-[0.4rem]" />
      <div className="flex overflow-x-scroll whitespace-nowrap py-[1.6rem] pt-[2.4rem]">
        {PLACE_PURPOSE.map((purpose) => (
          <Filter
            key={purpose}
            label={purpose}
            className="mr-[0.8rem]"
          ></Filter>
        ))}
      </div>
      <Divider className="bg-line-gray-3 h-[0.1rem]" />
      <section className="px-[2rem] pt-[2.4rem]">
        {DUMMY_MORE_DETAIL.purpose.map((li) => {
          return (
            NOW_PURPOSE === li.comment &&
            li.reviews?.map((review) => (
              <PlaceReview
                key={review.id}
                id={review.id}
                profile_img={review.profile_img}
                user_name={review.user_name}
                review_date={review.review_date}
                tags={review.tags}
                review_photos={review.review_photos}
                evaluation={review.evaluation}
              />
            ))
          );
        })}
      </section>
    </div>
  );
}
