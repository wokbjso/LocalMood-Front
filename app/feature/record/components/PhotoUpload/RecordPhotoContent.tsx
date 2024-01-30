import AddFillIcon from "@common/assets/icons/add/AddFillIcon";
import Button from "@common/components/ui/buttons/Button/Button";
import PostUploadFile from "@common/utils/postUploadFile";
import PostUploadRecord from "@feature/record/queries/postUploadRecord";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

interface PhotoUploadProps {
  placeType: string;
  spaceId: number;
  cafeKeywordData: { [key: string]: string | Array<string> };
  restaurantKeywordData: { [key: string]: string | Array<string> };
  handleImage: (url: File) => void;
  handleIndicatorIndex: (index: number) => void;
}

export default function PhotoUpload({
  placeType,
  spaceId,
  cafeKeywordData,
  restaurantKeywordData,
  handleImage,
  handleIndicatorIndex,
}: PhotoUploadProps) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any>([]);
  console.log(restaurantKeywordData);
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleImage(e.target.files[0]);

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

  const modifyData = (data: any, imgFiles: string[]) => {
    return {
      reviewCreateDto: {
        ...data,
        positiveEval:
          data.positiveEval.length > 0 ? data.positiveEval.join(",") : "",
        negativeEval:
          data.negativeEval.length > 0 ? data.negativeEval.join(",") : "",
      },
      imageUploadDto: {
        files: imgFiles,
      },
    };
  };

  const handleRecordUploadClick = async () => {
    const imgFiles = await PostUploadFile(image);
    if (imgFiles) {
      const res = await PostUploadRecord(
        spaceId,
        placeType === "CAFE"
          ? modifyData(cafeKeywordData, imgFiles)
          : modifyData(restaurantKeywordData, imgFiles)
      );
      if (res.status === 200) {
        handleIndicatorIndex(3);
      } else {
        alert("오류가 발생했습니다!");
      }
    }
  };
  return (
    <>
      <div className="inline-flex flex-col items-start pt-[14.8rem] pl-[2rem] gap-[1.2rem]">
        <div className="flex items-start gap-[0.6rem] headline3-semibold">
          <div className="text-black">사진올리기</div>
          <div className="text-text-gray-6">
            {placeType === "CAFE"
              ? cafeKeywordData.files.length
              : restaurantKeywordData.files.length}
            /2
          </div>
        </div>
        <div className="flex flex-wrap gap-[0.7rem] pr-[2rem]">
          {image &&
            image.map((img: any, i: any) => (
              <div
                key={img + i}
                className="relative w-[16.4rem] h-[16.4rem] p-[6.2rem] rounded-[10px] border border-solid border-1px border-line-gray-3"
              >
                <Image
                  src={img}
                  alt="방문 사진"
                  fill
                  className="rounded-[10px]"
                />
              </div>
            ))}
          {placeType === "CAFE"
            ? cafeKeywordData.files.length < 2
            : restaurantKeywordData.files.length < 2 && (
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
        <div className="flex justify-center w-full fixed h-[15.5rem] bottom-0 left-0 bg-white">
          <Button onClick={handleRecordUploadClick}>기록올리기</Button>
        </div>
      </div>
    </>
  );
}
