import AddFillIcon from "@/common/assets/icons/add/AddFillIcon";
import CloseBlackIcon from "@/common/assets/icons/close/CloseBlackIcon";
import Label from "@/common/components/ui/text/Label";
import NumberCountWithSlash from "@/common/components/ui/text/NumberCountWithSlash";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Resizer from "react-image-file-resizer";

interface PhotoUploadProps {
  placeType: string;
  cafeKeywordData: { [key: string]: string | Array<string> };
  restaurantKeywordData: { [key: string]: string | Array<string> };
  handleAddImage: (url: File) => void;
  handleDeleteImage: (index: number) => void;
}

//Organism
export default function SelectPhotoContent({
  placeType,
  cafeKeywordData,
  restaurantKeywordData,
  handleAddImage,
  handleDeleteImage,
}: PhotoUploadProps) {
  const fileInput = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<any[]>([]);

  const resizeFile = (file: any) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        280,
        280,
        "WEBP",
        92,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const resizedImage = await resizeFile(e.target.files[0]);
      handleAddImage(resizedImage as File);
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
      reader.readAsDataURL(resizedImage as File);
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
      <div className="flex-col items-start pt-[148px] px-[20px] gap-[12px]">
        <div className="flex items-start">
          <Label className="mb-[12px] mr-[6px] headline3-semibold">
            사진올리기
          </Label>
          <NumberCountWithSlash currentNum={image.length} totalNum={2} />
        </div>
        <div
          className={twMerge("flex w-full justify-between flex-wrap gap-[8px]")}
        >
          {image &&
            image.map((img: any, i: number) => (
              <div key={img + i} className="relative">
                <div
                  className="absolute z-10 top-[12px] right-[12px]"
                  onClick={() => handleImageDeleteClicked(i)}
                >
                  <CloseBlackIcon />
                </div>
                <div className="relative w-[42vw] h-[42vw] rounded-[10px]">
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
            <div className="flex justify-center items-center w-[42vw] h-[42vw] p-[6.2rem] border border-solid border-1px border-line-gray-3 rounded-[10px]">
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
              <div className="flex justify-center items-center w-[42vw] h-[42vw] p-[6.2rem] border border-solid border-1px border-line-gray-3 rounded-[10px]">
                <input
                  ref={fileInput}
                  type="file"
                  accept="image/*"
                  className="hidden w-full h-full"
                  onChange={handleImageUpload}
                />
                <div className="absolute flex items-center justify-center w-[40px] h-[40px] bg-background-gray-2 rounded-full">
                  <AddFillIcon onClick={handleAddImageClick} />
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  );
}
