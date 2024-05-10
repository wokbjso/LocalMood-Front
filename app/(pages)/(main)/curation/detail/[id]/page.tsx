import GetCurationDetail from "@feature/curation/queries/getCurationDetail";
import CurationDetail from "@feature/curation/components/CurationDetail/template/CurationDetail";
import { Metadata } from "next";

type Props = {
  params: { id: number };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const curationDetail = await GetCurationDetail(params.id);

  return {
    title: `${curationDetail.title} 큐레이션`,
    openGraph: {
      images:
        curationDetail.spaceDetails.length === 0
          ? ["/localmood.png"]
          : [...curationDetail.spaceDetails[0].imageUrls],
    },
    description: `${curationDetail.title} 큐레이션을 둘러보세요!`,
    keywords: [
      "로컬무드",
      "localmood",
      "큐레이션",
      `${curationDetail.title}`,
      "마포구",
    ],
  };
}

export default async function CurationDetailPage({ params: { id } }: Props) {
  const curationDetail = await GetCurationDetail(id);
  return (
    <div className="w-[100%] h-[100%] overflow-auto pb-[18rem]">
      <CurationDetail id={id} curationDetail={curationDetail} />
    </div>
  );
}
