import NumberCountWithSlash from "@/common/components/ui/text/NumberCountWithSlash";

interface PlaceImageSliderCountProps {
  imgIndex: number;
}

//Molecule
export default function PlaceImageSliderCount({
  imgIndex,
}: PlaceImageSliderCountProps) {
  return (
    <div className="flex justify-center items-center absolute z-10 w-[3.9rem] h-[2rem] rounded-[1000px] bottom-[3.9rem] right-[2rem] bg-black opacity-[0.8]">
      <NumberCountWithSlash
        currentNum={imgIndex + 1}
        totalNum={2}
        className="text-white body3-medium"
      />
    </div>
  );
}
