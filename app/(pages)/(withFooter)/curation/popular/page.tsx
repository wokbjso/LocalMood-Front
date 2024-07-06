import ArrowBackTopBar from "@/common/components/ui/topBar/ArrowBackTopBar";
import CurationInfoCardLight from "@/feature/curation/components/CurationInfo/organisms/CurationInfoCardLight";
import GetRandomCuration from "@/feature/curation/queries/getRandomCuration";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const randomCuration = await GetRandomCuration();

  return {
    title: "마포구 인기 큐레이션",
    openGraph: {
      images: randomCuration[0].image && [
        ...randomCuration[0].image.slice(0, 2),
      ],
    },
    description: "현재 마포구 인기 큐레이션을 확인해보세요!",
    keywords: ["로컬무드", "localmood", "키워드", "마포구"],
  };
}

//Page
export default async function CurationPopularPage() {
  const randomCuration = await GetRandomCuration();
  return (
    <div className="w-[100%] h-[100%] overflow-auto">
      {/* Template */}
      <ArrowBackTopBar color="#9E9E9E" />
      <div className="text-black headline1 px-[2rem]">마포구 인기 큐레이션</div>
      <section className="mt-[2.4rem] px-[2rem] pb-[12rem]">
        {randomCuration.map((curation) => (
          <CurationInfoCardLight
            key={curation.author + curation.id}
            {...curation}
            className="mb-[2rem] w-full"
          />
        ))}
      </section>{" "}
    </div>
  );
}
