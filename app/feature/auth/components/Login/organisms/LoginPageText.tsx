"use client";

import Label from "@/common/components/ui/text/Label";
import UseGetBrowserHeight from "@/common/hooks/useGetBrowserHeight";
import { twMerge } from "tailwind-merge";

interface LoginPageTextProps {
  mainText1: string;
  mainText2: string;
  subText: string;
  className?: string;
}

//Organism
export default function LoginPageText({
  mainText1,
  mainText2,
  subText,
  className,
}: LoginPageTextProps) {
  const browserHeight = UseGetBrowserHeight();
  return (
    <div
      className={twMerge(
        "flex flex-col items-center",
        browserHeight < 500 ? "top-[36dvh]" : "top-[45dvh]",
        className
      )}
    >
      <Label className="headline2-semibold text-text-gray-8 mb-[0.6rem]">
        {subText}
      </Label>
      <p className="headline0 text-center">
        <Label className="text-primary-normal headline0"># </Label>
        {mainText1}
        <br /> {mainText2}
      </p>
    </div>
  );
}
