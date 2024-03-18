import getScrappedCuration from "@feature/curation/queries/getScrappedCuration";
import CurationTabContent from "@feature/curation/components/CurationTabContent/CurationTabContent";
import getMyCuration from "@feature/curation/queries/getMyCuration";
import PageTopBar from "@common/components/ui/topBar/PageTopBar/PageTopBar";

export default async function CurationPage() {
  const myCuration = await getMyCuration();
  const scrappedCuration = await getScrappedCuration();

  return (
    <div className="w-[100%] h-[100%] overflow-auto">
      <PageTopBar text="큐레이션" className="pl-[2rem]" />
      <CurationTabContent
        myCuration={myCuration}
        scrappedCuration={scrappedCuration}
      />
    </div>
  );
}
