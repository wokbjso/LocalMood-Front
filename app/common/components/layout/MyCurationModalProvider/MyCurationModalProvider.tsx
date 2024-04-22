"use client";

import { myCurationModalInfo } from "@common/state/myCurationModal";
import MyCurationModal from "@feature/curation/components/MyCuration/organisms/MyCurationModal";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import { useRecoilValue } from "recoil";

export default function MyCurationModalProvider({
  myCurationData,
}: {
  myCurationData?: MyCurationResponse;
}) {
  const myCuration = useRecoilValue(myCurationModalInfo);
  return (
    <MyCurationModal
      open={myCuration.open}
      title="저장할 큐레이션"
      spaceId={myCuration.spaceId}
      myCurationData={myCurationData}
    />
  );
}
