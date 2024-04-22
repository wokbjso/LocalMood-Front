import SliderLayout from "@common/components/layout/Slider/SliderLayout";
import { ReactNode } from "react";

interface PlaceRelatedSliderProps {
  title: string;
  children: ReactNode;
}

//Molecule
export default function PlaceRelatedSlider({
  title,
  children,
}: PlaceRelatedSliderProps) {
  return (
    <div>
      <span className="text-black headline2">{title}</span>
      <SliderLayout className="mt-[1.6rem] mb-[6rem]">{children}</SliderLayout>
    </div>
  );
}
