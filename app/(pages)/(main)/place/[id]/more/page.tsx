import BookIcon from "@common/assets/icons/book/BookIcon";
import BusinessIcon from "@common/assets/icons/business/BusinessIcon";
import ChatIcon from "@common/assets/icons/chat/ChatIcon";
import Heart from "@common/assets/icons/heart/HeartIcon";
import Divider from "@common/components/ui/divider/Divider";
import GraphGage from "@common/components/ui/graph/GraphGage/GraphGage";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import PlaceDetailMoreReviews from "@feature/place/components/PlaceDetail/PlaceDetailMoreReviews";
import GetPlaceReview from "@feature/place/queries/getPlaceReview";

export default async function PlaceDetailMore({
  params: { id },
}: {
  params: { id: string };
}) {
  const DUMMY_MORE_DETAIL = {
    placeName: "나이스워크투데이",
    purpose: [
      {
        comment: "연인과의 데이트",
        percentage: "43%",
        icon: Heart,
        color: "#F670C7",
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
      {
        id: 2,
        profile_img:
          "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
        user_name: "토트넘핫스퍼",
        review_date: "23.04.01",
        tags: {
          purpose: ["친구/가족과의 만남"],
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
        id: 3,
        profile_img:
          "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
        user_name: "토트넘핫스퍼",
        review_date: "23.04.01",
        tags: {
          purpose: ["작업/공부/책"],
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
  };
  const reviewData = await GetPlaceReview(id);
  console.log(reviewData);
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
      <PlaceDetailMoreReviews reviews={DUMMY_MORE_DETAIL.reviews} />
    </div>
  );
}
