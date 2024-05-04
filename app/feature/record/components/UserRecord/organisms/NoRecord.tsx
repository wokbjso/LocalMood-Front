import ArrowRightIcon from "@common/assets/icons/arrow/ArrowRightIcon";
import Link from "next/link";

export default function NoRecord() {
  return (
    <div className="h-[60%] flex flex-col items-center justify-center">
      <p className="text-black headline1 mb-[1.2rem]">
        아직 기록을 남긴 공간이 없습니다
      </p>
      <div className="flex items-center">
        <span className="text-text-gray-6 body2-semibold mr-[0.4rem]">
          공간 기록하러 가기
        </span>
        <Link
          href={{
            pathname: "/record",
          }}
        >
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
