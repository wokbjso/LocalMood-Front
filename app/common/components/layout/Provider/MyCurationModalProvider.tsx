"use client";

import { myCurationModalInfo } from "@/common/state/my-curation-modal";
import MyCurationModal from "@/feature/curation/components/MyCuration/organisms/MyCurationModal";
import { useRecoilValue } from "recoil";

export default function MyCurationModalProvider() {
  const myCuration = useRecoilValue(myCurationModalInfo);
  return (
    <MyCurationModal
      open={myCuration.open}
      title="저장할 큐레이션"
      spaceId={myCuration.spaceId}
    />
  );
}
