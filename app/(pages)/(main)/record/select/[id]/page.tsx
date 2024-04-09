import RecordSelect from "@feature/record/components/RecordSelect/RecordSelect";

export default async function RecordSelectPage({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: any;
}) {
  return (
    <div className="w-[100%] h-[100%]">
      <RecordSelect
        id={params.id}
        type={searchParams.type}
        name={searchParams.name}
      />
    </div>
  );
}
