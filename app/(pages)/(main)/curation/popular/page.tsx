import ArrowBackTopBar from "@common/components/ui/topBar/ArrowBackTopBar/ArrowBackTopBar";
import CurationInfoCardLight from "@feature/curation/components/CurationInfo/molecules/CurationInfoCardLight";
import CurationPopularSection from "@feature/curation/components/CurationPopular/CurationPopularSection";
import GetRandomCuration from "@feature/curation/queries/getRandomCuration";

//Page
export default async function CurationPopularPage() {
  const randomCuration = await GetRandomCuration();
  return (
    <div className="w-[100%] h-[100%] overflow-auto">
      {/* Template */}
      <ArrowBackTopBar color="#9E9E9E" />
      <div className="text-black headline1 px-[2rem]">마포구 인기 큐레이션</div>
      <CurationPopularSection curationList={randomCuration} />
    </div>
  );
}
