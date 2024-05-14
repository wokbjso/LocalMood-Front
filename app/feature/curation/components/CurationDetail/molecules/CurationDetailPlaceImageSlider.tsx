import SliderLayout from "@/common/components/layout/Slider/SliderLayout";
import Image from "next/image";

interface CurationDetailPlaceImageSliderProps {
  imageUrls?: string[];
}

//Molecule
export default function CurationDetailPlaceImageSlider({
  imageUrls,
}: CurationDetailPlaceImageSliderProps) {
  return (
    <SliderLayout>
      <div className="flex gap-[0.8rem] mr-[0.8rem]">
        {imageUrls?.map((url, i) => (
          <div key={url + i} className="relative w-[28rem] h-[28rem]">
            <Image
              src={url}
              alt="장소 사진"
              fill
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              className="rounded-[8px] object-cover"
            />
          </div>
        ))}
      </div>
    </SliderLayout>
  );
}
