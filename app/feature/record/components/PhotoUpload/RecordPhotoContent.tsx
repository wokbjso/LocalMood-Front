import AddFillIcon from "@common/assets/icons/add/AddFillIcon";
import Button from "@common/components/ui/buttons/Button/Button";
import CloseIcon from "@common/assets/icons/close/close-black.svg";
import PostUploadFile from "@common/utils/postUploadFile";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
interface PhotoUploadProps {
  placeType: string;
  spaceId: number;
  cafeKeywordData: { [key: string]: string | Array<string> };
  restaurantKeywordData: { [key: string]: string | Array<string> };
  handleAddImage: (url: File) => void;
  handleDeleteImage: (index: number) => void;
  handleIndicatorIndex: (index: number) => void;
}
export default function PhotoUpload({
  placeType,
  spaceId,
  cafeKeywordData,
  restaurantKeywordData,
  handleAddImage,
  handleDeleteImage,
  handleIndicatorIndex,
}: PhotoUploadProps) {
  console.log(cafeKeywordData);
  const fileInput = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any[]>([]);
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleAddImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          if (image.length === 2) {
            return;
          } else {
            setImage((prev: any) => {
              return [...prev, reader.result];
            });
          }
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAddImageClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleImageDeleteClicked = (index: number) => {
    handleDeleteImage(index);
    setImage(image.filter((_: any, i: number) => i != index));
  };
  return (
    <>
      <div className=" flex-col items-start pt-[14.8rem] px-[2rem] gap-[1.2rem]">
        <div className="flex items-start gap-[0.6rem] headline3-semibold">
          <div className="text-black mb-[1.2rem]">사진올리기</div>
          <div className="text-text-gray-6">
            {image.length}
            /2
          </div>
        </div>
        <div className="flex w-full justify-between flex-wrap">
          {image &&
            image.map((img: any, i: number) => (
              <div key={img + i} className="relative">
                <div
                  className="absolute z-10 top-[1.2rem] right-[1.2rem]"
                  onClick={() => handleImageDeleteClicked(i)}
                >
                  <CloseIcon />
                </div>
                <div className="relative w-[43vw] h-[43vw] rounded-[10px]">
                  <Image
                    src={img}
                    alt="방문 사진"
                    fill
                    sizes="50vw"
                    className="rounded-[10px]"
                  />
                </div>
              </div>
            ))}
          {placeType === "CAFE" && cafeKeywordData.files.length < 2 && (
            <div className="w-[16.4rem] h-[16.4rem] p-[6.2rem] border border-solid border-1px border-line-gray-3 rounded-[10px]">
              <input
                ref={fileInput}
                type="file"
                accept="image/*"
                className="hidden w-full h-full"
                onChange={handleImageUpload}
              />
              <AddFillIcon onClick={handleAddImageClick} />
            </div>
          )}
          {placeType === "RESTAURANT" &&
            restaurantKeywordData.files.length < 2 && (
              <div className="w-[16.4rem] h-[16.4rem] p-[6.2rem] border border-solid border-1px border-line-gray-3 rounded-[10px]">
                <input
                  ref={fileInput}
                  type="file"
                  accept="image/*"
                  className="hidden w-full h-full"
                  onChange={handleImageUpload}
                />
                <AddFillIcon onClick={handleAddImageClick} />
              </div>
            )}
        </div>
      </div>
    </>
  );
}
