import RecordPageBookTemplate from "@feature/record/components/RecordPageBook/template/RecordPageBookTemplate";
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
    openGraph: {
      images: ["/record.png"],
    },
    description: `${searchParams.name}에 대한 기록을 직접 남겨보세요!`,
    keywords: [
      "로컬무드",
      "localmood",
      `${searchParams.name}`,
      "공간기록",
      "마포구",
    ],
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
