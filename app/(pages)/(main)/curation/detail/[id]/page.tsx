import GetCurationDetail from "@feature/curation/queries/getCurationDetail";
import CurationDetail from "@feature/curation/components/CurationDetail/CurationDetail";
import Script from "next/script";

export default async function CurationDetailPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const curationDetail = await GetCurationDetail(id);
  return (
    <div className="w-[100%] h-[100%] overflow-auto pb-[18rem]">
      <CurationDetail id={id} curationDetail={curationDetail} />
    </div>
  );
}
