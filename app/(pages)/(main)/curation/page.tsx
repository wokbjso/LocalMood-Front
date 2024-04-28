import getScrappedCuration from "@feature/curation/queries/getScrappedCuration";
import CurationTabContent from "@feature/curation/components/CurationInfo/organisms/CurationTabContent";
import getMyCuration from "@feature/curation/queries/getMyCuration";
import PageTopBar from "@common/components/ui/topBar/PageTopBar/PageTopBar";
import { Suspense } from "react";

//Page
export default async function CurationPage() {
  const myCuration = await getMyCuration();
  const scrappedCuration = await getScrappedCuration();
  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
      {/* Template */}
      <PageTopBar text="큐레이션" className="pl-[2rem]" />
      <Suspense fallback={<h1>Loading</h1>}>
        <CurationTabContent
          myCuration={myCuration}
          scrappedCuration={scrappedCuration}
        />
      </Suspense>
    </div>
  );
}
