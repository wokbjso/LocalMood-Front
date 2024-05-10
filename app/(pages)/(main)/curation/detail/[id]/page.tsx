import GetCurationDetail from "@feature/curation/queries/getCurationDetail";
import CurationDetail from "@feature/curation/components/CurationDetail/template/CurationDetail";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: number };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const curationDetail = await GetCurationDetail(params.id);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `큐레이션: ${curationDetail.title}`,
    openGraph: {
      images: [...curationDetail.spaceDetails[0].imageUrls, ...previousImages],
    },
    description: "",
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
