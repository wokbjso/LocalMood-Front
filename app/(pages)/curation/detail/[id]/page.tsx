"use client";
import ArrowRight from "@common/assets/icons/arrow/arror-right.svg";
import { usePathname } from "next/navigation";
import CurationDetailTopBar from "@feature/curation/components/CurationDetail/CurationDetailTopBar";
import {
  curationMainPropsList,
  curationScrappedPropsList,
} from "@feature/curation/dummyList";
import CurationNoPlaces from "@feature/curation/components/CurationDetail/CurationNoPlaces";
import CurationDetailCard from "@feature/curation/components/CurationDetail/CurationDetailCard";

export default function CurationDetail(props: any) {
  const pathname = usePathname();
  const parts = pathname.split(/[\/_]/);
  const id = parts[3];
  const variant = parts[4];
  const selectedList =
    variant === "my" ? curationMainPropsList : curationScrappedPropsList;
  const selectedItem = selectedList.find(
    (item) => item.id === parseInt(id, 10)
  );
  const {
    mainText,
    variant: variantType,
    userImg,
    places,
    hashTags,
  } = selectedItem || {};

  return (
    <div className="relative w-full">
      <CurationDetailTopBar
        mainText={mainText}
        variant={variantType}
        userImg={userImg}
        places={places}
        hashTags={hashTags}
      />
      {/*저장된 장소(places)가 없을 때*/}
      {places === 0 && <CurationNoPlaces />}
      {/*저장된 장소(places)가 있을 때*/}
      {places !== 0 && <CurationDetailCard />}
    </div>
  );
}
