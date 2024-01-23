import AddIcon from "@common/assets/icons/add/add-icon.svg";
import CloseIcon from "@common/assets/icons/close/CloseIcon";
import LocationLine from "@common/assets/icons/location/LocationLine";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface RecordCurationProps {
  onClose: () => void;
}

export default function SaveModal({ onClose }: RecordCurationProps) {
  const router = useRouter();
  const [showCurationMake, setShowCurationMake] = useState(false);
  const handleCurationClick = () => {
    router.push("/record");
  };
  const handleCurationMakeClick = () => {
    setShowCurationMake(true);
  };
  return (
    <div>
      <div className={showCurationMake ? "bg-black opacity-0" : ""}>
        <div className="bg-white">
          <div className="w-full h-[41.6rem] px-[2rem] flex-col items-center shrink-0  pb-[39.5rem] overflow-auto">
            <div className="w-full pt-[2rem] inline-flex items-start justify-between">
              <div className="flex pt-[2.4rem] pr-[18rem] headline2-semibold">
                저장할 큐레이션
              </div>
              <CloseIcon onClick={onClose} />
            </div>
            <div className="pt-[2rem] inline-flex flex-col items-start gap-[1.2rem]">
              <div className="flex items-center gap-[1.2rem] body1-medium text-text-gray-8">
                <div
                  className="w-[6rem] h-[6rem] bg-background-gray-2 rounded-lg flex p-[2.4rem]"
                  onClick={handleCurationMakeClick}
                >
                  <AddIcon />
                </div>
                <div>새 큐레이션 만들기</div>
              </div>
              <div
                className="flex items-center gap-[1.2rem]"
                onClick={handleCurationClick}
              >
                <div className="w-[6rem] h-[6rem] bg-background-gray-2 rounded-lg flex"></div>
                <div className="flex flex-col items-start gap-[0.8rem]">
                  <div className="headline2-semibold">
                    크리스마스 데이트 코스
                  </div>
                  <div className="flex items-center gap-[1rem]">
                    <div className="body2-medium text-text-gray-6">공개</div>
                    <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                    <div className="flex items-center gap-[0.2rem] body3-semibold text-text-gray-6">
                      <LocationLine />
                      <div>12</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex items-center gap-[1.2rem]"
                onClick={handleCurationClick}
              >
                <div className="w-[6rem] h-[6rem] bg-background-gray-2 rounded-lg flex"></div>
                <div className="flex flex-col items-start gap-[0.8rem]">
                  <div className="headline2-semibold">큐레이션2</div>
                  <div className="flex items-center gap-[1rem]">
                    <div className="body2-medium text-text-gray-6">비공개</div>
                    <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                    <div className="flex items-center gap-[0.2rem] body3-semibold text-text-gray-6">
                      <LocationLine />
                      <div>12</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex items-center gap-[1.2rem]"
                onClick={handleCurationClick}
              >
                <div className="w-[6rem] h-[6rem] bg-background-gray-2 rounded-lg flex"></div>
                <div className="flex flex-col items-start gap-[0.8rem]">
                  <div className="headline2-semibold">큐레이션3</div>
                  <div className="flex items-center gap-[1rem]">
                    <div className="body2-medium text-text-gray-6">공개</div>
                    <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                    <div className="flex items-center gap-[0.2rem] body3-semibold text-text-gray-6">
                      <LocationLine />
                      <div>12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {showCurationMake && (
        <CurationMake onClose={() => setShowCurationMake(false)} />
      )} */}
    </div>
  );
}
