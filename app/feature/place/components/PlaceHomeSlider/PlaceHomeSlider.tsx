import { ReactNode } from "react";

interface PlaceHomeSliderProps {
  mainText: string;
  subText: string;
  children?: ReactNode;
}

export default function PlaceHomeSlider({
  mainText,
  subText,
  children,
}: PlaceHomeSliderProps) {
  return (
    <section className="mb-[4rem] pl-[2rem]">
      <span className="text-primary-normal headline2"># </span>
      <span className="text-black headline2">{mainText}</span>
      <span className="text-text-gray-6 body1"> {subText}</span>
      {children}
    </section>
  );
}
