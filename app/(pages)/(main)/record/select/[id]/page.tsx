import RecordPageBookTemplate from "@feature/record/components/RecordPageBook/template/RecordPageBookTemplate";

//Page
export default async function RecordSelectPage({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: any;
}) {
  return (
    <div className="w-[100%] h-[100%]">
      <RecordPageBookTemplate
        id={params.id}
        type={searchParams.type}
        name={searchParams.name}
      />
    </div>
  );
}
