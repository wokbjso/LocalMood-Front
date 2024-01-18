import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PlaceHomeSliderProps {
  mainText: string;
  subText: string;
  children?: ReactNode;
  className?: string;
}

export default function PlaceHomeSlider({
  mainText,
  subText,
  children,
  className,
}: PlaceHomeSliderProps) {
  return (
    <section className={twMerge("mb-[4rem] pl-[2rem]", className)}>
      <span className="text-primary-normal headline2"># </span>
      <span className="text-black headline2">{mainText}</span>
      <span className="text-text-gray-6 body1"> {subText}</span>
      {children}
    </section>
  );
}
