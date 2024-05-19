import Link from "next/link";
import Text from "./common/components/ui/text/Text";
import Title from "./common/components/ui/text/Title";

export default function NotFound() {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
      <Title
        title="요청하신 페이지를 찾을 수 없어요"
        className="mb-[14px] headline1"
      />
      <Link href="/">
        <Text text="로컬무드 홈으로 돌아가기" className="text-primary-normal" />
      </Link>
    </div>
  );
}
