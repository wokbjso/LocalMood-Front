"use client";

import { myCurationModalInfo } from "@common/state/myCurationModal";
import MyCurationModal from "@feature/curation/components/MyCuration/organisms/MyCurationModal";
import useGetMyCuration from "@feature/curation/queries/useGetMyCuration";
import { useRecoilValue } from "recoil";

export default function MyCurationModalProvider() {
  // const { data: myCurationData, isFetching } = useGetMyCuration();

  const myCuration = useRecoilValue(myCurationModalInfo);
  return (
    <div></div>
    // <MyCurationModal
    //   open={myCuration.open}
    //   title="저장할 큐레이션"
    //   spaceId={myCuration.spaceId}
    //   myCurationData={myCurationData}
    //   isFetching={isFetching}
    // />
  );
}
