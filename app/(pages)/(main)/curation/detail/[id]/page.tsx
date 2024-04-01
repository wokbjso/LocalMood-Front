import GetCurationDetail from "@feature/curation/queries/getCurationDetail";
import getMyCuration from "@feature/curation/queries/getMyCuration";
import CurationDetail from "@feature/curation/components/CurationDetail/CurationDetail";

export default async function CurationDetailPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const curationDetail = await GetCurationDetail(id);
  const myCurationData = await getMyCuration();
  return (
    <div className="w-[100%] h-[100%] overflow-auto pb-[18rem]">
      <CurationDetail
        id={id}
        curationDetail={curationDetail}
        myCurationData={myCurationData}
      />
    </div>
  );
}
