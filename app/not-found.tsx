import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
      <p className="headline1 mb-[14px]">요청하신 페이지를 찾을 수 없어요</p>
      <Link href="/">
        <p className="text-primary-normal headline2">
          로컬무드 홈으로 돌아가기
        </p>
      </Link>
    </div>
  );
}
