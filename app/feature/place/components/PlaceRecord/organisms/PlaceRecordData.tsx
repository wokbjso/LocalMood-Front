"use client";

import Divider from "@/common/components/ui/divider/Divider";
import { useState } from "react";
import { PlaceRecordProps } from "@/feature/place/queries/dto/place-record";
import PlaceRecordDataFilter from "./PlaceRecordDataFilter";
import PlaceRecordDataList from "./PlaceRecordDataList";

export interface PlaceRecordDataProps {
  type: string;
  reviews: {
    [key: string]: PlaceRecordProps[];
  };
}

export default function PlaceRecordData({
  type,
  reviews,
}: PlaceRecordDataProps) {
  const [reviewPurposeIndex, setReviewPurposeIndex] = useState(0);
  const handleReviewFilterClick = (index: number) => {
    setReviewPurposeIndex(index);
  };
  return (
    <>
      <PlaceRecordDataFilter
        type={type}
        reviews={reviews}
        reviewPurposeIndex={reviewPurposeIndex}
        handleReviewFilterClick={handleReviewFilterClick}
        className="py-[1.6rem] pt-[2.4rem] pl-[2rem]"
      />
      <Divider className="bg-line-gray-3 h-[0.1rem]" />
      <PlaceRecordDataList
        type={type}
        reviews={reviews}
        reviewPurposeIndex={reviewPurposeIndex}
      />
    </>
  );
}
