"use client";

import SliderLayout from "@common/components/layout/Slider/SliderLayout";
import { ReactNode } from "react";

interface RelatedCurationSliderProps {
  title: string;
  children: ReactNode;
}

//Molecule
export default function RelatedCurationSlider({
  title,
  children,
}: RelatedCurationSliderProps) {
  return (
    <div>
      <span className="text-black headline2">{title}</span>
      <SliderLayout className="mt-[1.6rem] mb-[6rem]">{children}</SliderLayout>
    </div>
  );
}
