import getMyCuration from "@feature/curation/queries/getMyCuration";
import RecordSelect from "@feature/record/components/RecordSelect/RecordSelect";

export default async function RecordSelectPage({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: any;
}) {
  const myCuration = await getMyCuration();
  return (
    <div className="w-[100%] h-[100%]">
      <RecordSelect
        id={params.id}
        type={searchParams.type}
        name={searchParams.name}
        myCuration={myCuration}
      />
    </div>
  );
}
