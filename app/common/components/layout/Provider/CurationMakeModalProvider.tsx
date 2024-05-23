"use client";

import { isModalOpenSelector } from "@/common/state/handleModalOpen";
import CurationMakeModal from "@/feature/curation/components/CurationMake/organisms/CurationMakeModal";
import { useRecoilState } from "recoil";

export default function CurationMakeModalProvider() {
  const [isMakeCurationModalOpened, setIsMakeCurationModalOpened] =
    useRecoilState(isModalOpenSelector("makeCuration"));

  const handleMakeCurationModalClose = () => {
    setIsMakeCurationModalOpened(false);
  };

  return (
    <CurationMakeModal
      isOpen={isMakeCurationModalOpened}
      closeModal={handleMakeCurationModalClose}
    />
  );
}
