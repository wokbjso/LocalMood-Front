interface PlaceImageSliderCountProps {
  imgIndex: number;
}

//Molecule
export default function PlaceImageSliderCount({
  imgIndex,
}: PlaceImageSliderCountProps) {
  return (
    <div className="flex justify-center items-center absolute w-[3.9rem] h-[2rem] rounded-[1000px] z-10 bottom-[3.9rem] right-[2rem] bg-black opacity-[0.8] text-white body3-medium">
      {imgIndex + 1}/2
    </div>
  );
}
