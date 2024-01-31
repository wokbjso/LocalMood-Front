"use client";

import Filter from "@common/components/ui/buttons/Filter/Filter";
import Divider from "@common/components/ui/divider/Divider";
import PlaceReview from "../PlaceReview/PlaceReview";
import { useState } from "react";

interface PlaceDetailMoreReviewsProps {
  reviews: {
    id: number;
    profile_img: string;
    user_name: string;
    review_date: string;
    tags: { [key: string]: string[] };
    review_photos: string[];
    evaluation: {
      likes: string[];
      dislikes: string[];
    };
  }[];
}

export default function PlaceDetailMoreReviews({
  reviews,
}: PlaceDetailMoreReviewsProps) {
  const [reviewPurposeIndex, setReviewPurposeIndex] = useState(0);
  const handleReviewFilterClick = (index: number) => {
    setReviewPurposeIndex(index);
  };
  return (
    <>
      <div className="flex overflow-x-scroll whitespace-nowrap py-[1.6rem] pt-[2.4rem] pl-[2rem]">
        {/* {PLACE_PURPOSE.map((purpose, i) => (
          <Filter
            key={purpose}
            label={
              purpose +
              " " +
              reviews.filter((review) => review.tags.purpose[0] === purpose)
                .length
            }
            selected={reviewPurposeIndex === i}
            className="mr-[0.8rem]"
            onClick={() => handleReviewFilterClick(i)}
          />
        ))} */}
      </div>
      <Divider className="bg-line-gray-3 h-[0.1rem]" />
      <section className="px-[2rem] pt-[2.4rem]">
        {/* {reviews
          .filter(
            (review) =>
              review.tags.purpose[0] === PLACE_PURPOSE[reviewPurposeIndex]
          )
          .map((review) => {
            return (
              <PlaceReview
                key={review.id}
                id={review.id}
                profile_img={review.profile_img}
                user_name={review.user_name}
                review_date={review.review_date}
                tags={review.tags}
                review_photos={review.review_photos}
                evaluation={review.evaluation}
              />
            );
          })} */}
      </section>
    </>
  );
}
