"use client";
import ArrowRight from "@common/assets/icons/arrow/arror-right.svg";
import { usePathname, useRouter } from "next/navigation";
import CurationDetailTopBar from "@feature/curation/components/CurationDetail/CurationDetailTopBar";
import {
  curationMainPropsList,
  curationScrappedPropsList,
} from "@feature/curation/dummyList";

export default function CurationDetail(props: any) {
  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname.split(/[\/_]/);
  const id = parts[3];
  const variant = parts[4];
  const selectedList =
    variant === "my" ? curationMainPropsList : curationScrappedPropsList;
  const selectedItem = selectedList.find(
    (item) => item.id === parseInt(id, 10)
  );
  const { variant: variantType, places, hashTags } = selectedItem || {};

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div className="relative w-full">
      <CurationDetailTopBar
        variant={variantType}
        places={places}
        hashTags={hashTags}
      />
      <div className="w-full inline-flex flex-col items-center pt-[18.8rem] gap-[1.2rem]">
        <div className="headline1-semibold text-black">
          아직 저장된 공간이 없습니다.
        </div>
        <div
          className="flex items-center gap-[0.4rem] body2-semibold text-text-gray-6"
          onClick={navigateToHome}
        >
          공간 탐색하기
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
