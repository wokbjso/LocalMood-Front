import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import GetRandomCuration from "@feature/curation/queries/getRandomCuration";

export default async function CurationPopular() {
  const randomCuration = await GetRandomCuration();
  return (
    <div className="pb-[12rem]">
      <header>
        <BasicTopBar color="#9E9E9E" />
        <div className="text-black headline1 px-[2rem]">
          마포구 인기 큐레이션
        </div>
        <section className="mt-[2.4rem] px-[2rem]">
          {randomCuration.map((curation: any) => (
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
