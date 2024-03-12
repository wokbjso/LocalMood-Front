import getScrappedCuration from "@feature/curation/queries/getScrappedCuration";
import CurationTabContent from "@feature/curation/components/CurationTabContent/CurationTabContent";
import getMyCuration from "@feature/curation/queries/getMyCuration";

export default async function CurationPage() {
  const myCuration = await getMyCuration();
  const scrappedCuration = await getScrappedCuration();

  return (
    <div className="Curation h-[100vh] overflow-hidden">
      <header>
        <div className="w-full h-[7.8rem] pt-[3.8rem] pr-[2rem] pb-[1.2rem] pl-[2rem]">
          <span className="headline1 text-black">큐레이션</span>
        </div>
      </header>
      <CurationTabContent
        myCuration={myCuration}
        scrappedCuration={scrappedCuration}
      />
    </div>
  );
}
