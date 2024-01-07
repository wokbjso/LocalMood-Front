"use client";
import CurationHeader from "@feature/curation/components/CurationHeader/CurationHeader";
import Tab from "@common/components/ui/tab/Tab";

export default function Curation() {
  const CurationTabSections = [
    {
      text: "내 큐레이션",
    },
    {
      text: "스크랩",
    },
  ];

  return (
    <div className="Curation">
      <div>
        <CurationHeader />
        <Tab sections={CurationTabSections} />
      </div>
    </div>
  );
}
