"use client";

import SliderLayout from "@/common/components/layout/Slider/SliderLayout";
import Title from "@/common/components/ui/text/Title";
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
      <Title title={title} className="headline2" />
      <SliderLayout className="mt-[1.6rem] mb-[6rem]">{children}</SliderLayout>
    </div>
  );
}
