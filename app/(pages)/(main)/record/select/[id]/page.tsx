import RecordPageBookTemplate from "@feature/record/components/RecordPageBook/template/RecordPageBookTemplate";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: number };
  searchParams: any;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${searchParams.name}이(가) 마음에 드셨나요? 기록을 남겨보세요!`,
    openGraph: {
      images: [...previousImages],
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
