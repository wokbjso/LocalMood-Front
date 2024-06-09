"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { forwardRef } from "react";
import Label from "@/common/components/ui/text/Label";

interface PlaceFilterButtonProps {
  photo?: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

const PlaceFilterButton = forwardRef<HTMLButtonElement, PlaceFilterButtonProps>(
  ({ ...props }, ref) => {
    const filterClicked = () => {
      props.onClick && props.onClick();
    };

    return (
      <button
        className={twMerge(
          !props.photo
            ? "flex items-center bg-background-gray-2 px-[1.4rem] py-[1rem] rounded-[36px]"
            : "flex items-center border-[0.1rem] py-[0.4rem] pr-[1.2rem] pl-[0.4rem] rounded-[36px]",
          props.selected &&
            props.photo &&
            "bg-primary-selected border-[1.5px] border-primary-normal",
          props.selected && !props.photo && "bg-text-gray-8 ",
          props.className
        )}
        onClick={filterClicked}
        ref={ref}
      >
        {props.photo && (
          <div className="w-[3.2rem] h-[3.2rem] mr-[0.8rem] relative">
            <Image
              alt="필터 사진"
              src={props.photo}
              fill
              sizes="15vw,10vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              className="rounded-full object-cover"
            />
          </div>
        )}
        <Label
          className={twMerge(
            !props.photo ? "body2-medium" : "body3-medium",
            props.selected && !props.photo && "text-white"
          )}
        >
          {props.label}
        </Label>
      </button>
    );
  }
);

PlaceFilterButton.displayName = "PlaceFilter";

export default PlaceFilterButton;
