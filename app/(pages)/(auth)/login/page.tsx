import Image from "next/image";
import Button from "@common/components/ui/buttons/Button/Button";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import KakaoButton from "@common/components/ui/buttons/Kakao/KakaoButton";
import KakaoScript from "@feature/auth/components/KakaoScript/KakaoScript";

export default function Login() {
  return (
    <>
      <KakaoScript />
      <div className="flex flex-col items-center">
        <div className="relative h-[30rem] w-full mb-[6rem]">
          <Image src="/loginLogo.png" alt="로그인 이미지" fill sizes="100vw" />
        </div>
        <span className="headline2-semibold text-text-gray-8 mb-[0.6rem]">
          당신이 좋아할 그 공간,
        </span>
        <h1 className="headline0 w-[50%] text-center mb-[13.7rem]">
          <span className="text-primary-normal">#</span>키워드로 쉽고 빠르게
          찾아보세요!
        </h1>
        <div className="w-full px-[2rem]">
          <KakaoButton />
          <LinkLayout routeUrl="/login/email">
            <Button variant="line" className="w-full">
              이메일로 시작하기
            </Button>
          </LinkLayout>
        </div>
        <LinkLayout routeUrl="/" className="mt-[2rem] pb-[6.6rem]">
          <span className="text-text-gray-6 body2-semibold pb-[0.4rem] border-b-[1px] border-b-text-gray-6">
            로그인없이 둘러보기
          </span>
        </LinkLayout>
      </div>
    </>
  );
}
