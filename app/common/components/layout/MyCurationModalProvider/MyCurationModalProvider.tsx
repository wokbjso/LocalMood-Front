"use client";

import { myCurationInfo } from "@common/state/myCurationModal";
import MyCurationModal from "@feature/curation/components/CurationModal/MyCurationModal/MyCurationModal";
import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import { useRecoilValue } from "recoil";

export default function MyCurationModalProvider({
  myCurationData,
}: {
  myCurationData?: MyCurationResponse;
}) {
  const myCuration = useRecoilValue(myCurationInfo);
  return (
    <MyCurationModal
      open={myCuration.open}
      title="저장할 큐레이션"
      spaceId={myCuration.spaceId}
      myCurationData={myCurationData}
    />
  );
}
