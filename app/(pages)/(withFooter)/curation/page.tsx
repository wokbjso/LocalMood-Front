import getScrappedCuration from "@/feature/curation/queries/getScrappedCuration";
import CurationTabContent from "@/feature/curation/components/CurationInfo/organisms/CurationTabContent";
import PageTopBar from "@/common/components/ui/topBar/PageTopBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "큐레이션",
  openGraph: {
    images: ["/localmood.png"],
  },
  description:
    "나만의 큐레이션을 생성하여 맘에 드는 장소를 스크랩 & 다른 유저의 큐레이션을 스크랩 해보세요!",
  keywords: ["로컬무드", "localmood", "인기 큐레이션", "마포구"],
};

//Page
export default async function CurationPage() {
  const scrappedCuration = await getScrappedCuration();
  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
      {/* Template */}
      <PageTopBar text="큐레이션" className="pl-[2rem]" />
      <CurationTabContent scrappedCuration={scrappedCuration} />
    </div>
  );
}
