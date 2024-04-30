import getScrappedCuration from "@feature/curation/queries/getScrappedCuration";
import CurationTabContent from "@feature/curation/components/CurationInfo/organisms/CurationTabContent";
import PageTopBar from "@common/components/ui/topBar/PageTopBar/PageTopBar";

//Page
export default async function CurationPage() {
  const scrappedCuration = await getScrappedCuration();
  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
      {/* Template */}
      <PageTopBar text="큐레이션" className="pl-[2rem]" />
      <CurationTabContent scrappedCuration={scrappedCuration} />
    </div>
  );
}
