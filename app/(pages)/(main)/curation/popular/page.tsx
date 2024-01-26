import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";

export default function CurationPopular() {
  //popular curation get api 로 가져오는 데이터로 대체
  const POPULAR_CURATION = [
    {
      id: 0,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김현민",
      title: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "크리스마스"],
      spaceCount: 4,
    },
    {
      id: 1,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김지원",
      title: "평일에 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "평일"],
      spaceCount: 6,
    },
    {
      id: 2,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "김경민",
      title: "주말에 즐기기 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "주말"],
      spaceCount: 6,
    },
    {
      id: 3,
      image: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      author: "최예원",
      title: "친구와 즐기기 좋은 마포구 데이트 코스",
      keyword: ["친구와의 데이트", "마포구"],
      spaceCount: 10,
    },
  ];
  return (
    <div className="pb-[12rem]">
      <header>
        <BasicTopBar color="#9E9E9E" />
        <div className="text-black headline1 px-[2rem]">
          마포구 인기 큐레이션
        </div>
        <section className="mt-[2.4rem] px-[2rem]">
          {POPULAR_CURATION.map((curation) => (
            <CurationMain
              key={curation.author + curation.id}
              {...curation}
              className="mb-[2rem] w-full"
            />
          ))}
        </section>
      </header>
    </div>
  );
}
