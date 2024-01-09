import BookIcon from "@common/assets/icons/book/BookIcon";
import BusinessIcon from "@common/assets/icons/business/BusinessIcon";
import ChatIcon from "@common/assets/icons/chat/ChatIcon";
import Heart from "@common/assets/icons/heart/Heart";
import GraphGage from "@common/components/ui/graph/GraphGage/GraphGage";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";

export default function PlaceDetailMore() {
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
  };
  return (
    <div>
      <BasicTopBar color="#9E9E9E" className="" />
      <section className="px-[2rem] mt-[1.2rem]">
        <div className="headline1 text-black">
          {DUMMY_MORE_DETAIL.placeName}의 공간기록
        </div>
        {DUMMY_MORE_DETAIL.purpose.map((li, i) => (
          <GraphGage
            key={li.comment}
            icon={<li.icon color={li.color} color2={li.color2} />}
            evaluation={li.comment}
            percentage={li.percentage}
            className={i === 0 ? "mt-[3.2rem] mb-[2.4rem]" : "mb-[2.4rem]"}
          />
        ))}
      </section>
    </div>
  );
}
