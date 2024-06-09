"use client";

import SliderLayout from "@/common/components/layout/Slider/SliderLayout";
import Title from "@/common/components/ui/text/Title";
import { ReactNode } from "react";

interface RelatedSliderProps {
  title: string;
  children: ReactNode;
}

//Molecule
export default function RelatedSlider({ title, children }: RelatedSliderProps) {
  return (
    <div>
      <Title className="headline2">{title}</Title>
      <SliderLayout className="mt-[1.6rem] mb-[6rem]">{children}</SliderLayout>
    </div>
  );
}
