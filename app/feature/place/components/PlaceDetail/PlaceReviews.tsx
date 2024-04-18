"use client";

import Filter from "@common/components/ui/buttons/Filter/Filter";
import Divider from "@common/components/ui/divider/Divider";
import PlaceReview from "../PlaceReview/PlaceReview";
import { useState } from "react";
import {
  PLACE_CAFE_PURPOSE,
  PLACE_RESTAURANT_PURPOSE,
} from "@feature/place/constants/place-tag-category";

interface PlaceReviewsProps {
  type: string;
  reviews: {
    [key: string]: {
      image: string[];
      name: string;
      type: string;
      address: string;
      author: string;
      createdAt: string;
      interior: string;
      mood: string;
      music: string;
      positiveEval: string;
      negativeEval: string;
      scrapped: boolean;
    }[];
  };
}

export default function PlaceReviews({ type, reviews }: PlaceReviewsProps) {
  const [reviewPurposeIndex, setReviewPurposeIndex] = useState(0);
  const handleReviewFilterClick = (index: number) => {
    setReviewPurposeIndex(index);
  };
  return (
    <>
      <div className="flex overflow-x-scroll whitespace-nowrap py-[1.6rem] pt-[2.4rem] pl-[2rem]">
        {type === "CAFE"
          ? PLACE_CAFE_PURPOSE.map((purpose, i) => (
              <Filter
                key={purpose}
                label={
                  reviews[PLACE_CAFE_PURPOSE[i]]
                    ? purpose + " " + reviews[PLACE_CAFE_PURPOSE[i]]?.length
                    : purpose + " " + 0
                }
                selected={reviewPurposeIndex === i}
                className="mr-[0.8rem]"
                onClick={() => handleReviewFilterClick(i)}
              />
            ))
          : PLACE_RESTAURANT_PURPOSE.map((purpose, i) => (
              <Filter
                key={purpose}
                label={
                  reviews[PLACE_RESTAURANT_PURPOSE[i]]
                    ? purpose +
                      " " +
                      reviews[PLACE_RESTAURANT_PURPOSE[i]]?.length
                    : purpose + " " + 0
                }
                selected={reviewPurposeIndex === i}
                className="mr-[0.8rem]"
                onClick={() => handleReviewFilterClick(i)}
              />
            ))}
      </div>
      <Divider className="bg-line-gray-3 h-[0.1rem]" />
      <section className="px-[2rem] pt-[2.4rem] min-h-[30vh]">
        {type === "CAFE"
          ? reviews[PLACE_CAFE_PURPOSE[reviewPurposeIndex]] &&
            reviews[PLACE_CAFE_PURPOSE[reviewPurposeIndex]].map((review, i) => {
              return (
                <PlaceReview
                  key={review.name + i}
                  purpose={PLACE_CAFE_PURPOSE[reviewPurposeIndex]}
                  {...review}
                />
              );
            })
          : reviews[PLACE_RESTAURANT_PURPOSE[reviewPurposeIndex]] &&
            reviews[PLACE_RESTAURANT_PURPOSE[reviewPurposeIndex]].map(
              (review, i) => {
                return (
                  <PlaceReview
                    key={review.name + i}
                    purpose={PLACE_RESTAURANT_PURPOSE[reviewPurposeIndex]}
                    {...review}
                  />
                );
              }
            )}
      </section>
    </>
  );
}
