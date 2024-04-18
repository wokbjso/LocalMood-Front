import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import CurationCardLight from "@feature/curation/components/CurationCardLight/CurationCardLight";
import GetRandomCuration from "@feature/curation/queries/getRandomCuration";

export default async function CurationPopularPage() {
  const randomCuration = await GetRandomCuration();
  return (
    <div className="w-[100%] h-[100%] overflow-auto">
      <ArrowBackTopBar color="#9E9E9E" />
      <div className="text-black headline1 px-[2rem]">마포구 인기 큐레이션</div>
      <section className="mt-[2.4rem] px-[2rem] pb-[12rem]">
        {randomCuration.map((curation: any) => (
          <CurationCardLight
            key={curation.author + curation.id}
            {...curation}
            className="mb-[2rem] w-full"
          />
        ))}
      </section>
    </div>
  );
}
