"use client";
import ArrowRight from "@common/assets/icons/arrow/arror-right.svg";
import { useRouter } from "next/navigation";
import CurationDetailTopBar from "@feature/curation/components/CurationDetail/CurationDetailTopBar";

export default function CurationDetail(props: any) {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div className="relative w-full">
      <CurationDetailTopBar />
      <div className="w-full inline-flex flex-col items-center pt-[18.8rem] gap-[1.2rem]">
        <div className="headline1-semibold text-black">
          아직 저장된 공간이 없습니다.
        </div>
        <div
          className="flex items-center gap-[0.4rem] body2-semibold text-text-gray-6"
          onClick={navigateToHome}
        >
          공간 탐색하기
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
