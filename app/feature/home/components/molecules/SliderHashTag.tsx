import { PlaceHomeSliderProps } from "@feature/place/components/PlaceHomeSlider/PlaceHomeSlider";

//Molecule
export default function SliderHashTag({
  mainText,
  subText,
}: PlaceHomeSliderProps) {
  return (
    <>
      <span className="text-primary-normal headline2"># </span>
      <span className="text-black headline2">{mainText}</span>
      <span className="text-text-gray-6 body1"> {subText}</span>
    </>
  );
}
