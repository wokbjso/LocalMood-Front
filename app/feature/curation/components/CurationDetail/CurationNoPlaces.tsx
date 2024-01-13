import ArrowRight from "@common/assets/icons/arrow/arrow-right.svg";
import { useRouter } from "next/navigation";

export default function CurationNoPlaces() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div>
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
