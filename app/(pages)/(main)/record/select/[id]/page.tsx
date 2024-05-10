import RecordPageBookTemplate from "@/feature/record/components/RecordPageBook/template/RecordPageBookTemplate";
import { Metadata } from "next";

type Props = {
  params: { id: number };
  searchParams: any;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  return {
    title: `${searchParams.name} 기록`,
  };
}

//Page
export default async function RecordSelectPage({
  params,
  searchParams,
}: Props) {
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
