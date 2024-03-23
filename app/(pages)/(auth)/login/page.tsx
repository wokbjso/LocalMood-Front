import Image from "next/image";
import Button from "@common/components/ui/buttons/Button/Button";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import KakaoButton from "@common/components/ui/buttons/Kakao/KakaoButton";
import KakaoScript from "@feature/auth/components/KakaoScript/KakaoScript";

export default function LoginPage() {
  return (
    <div className="w-[100%] h-[100%]">
      <KakaoScript />
      <div className="relative h-[30rem] w-full mb-[6rem]">
        <Image src="/loginLogo.png" alt="로그인 이미지" fill sizes="100vw" />
      </div>
      <div className="flex flex-col w-full items-center">
        <span className="headline2-semibold text-text-gray-8 mb-[0.6rem]">
          당신이 좋아할 그 공간,
        </span>
        <p className="headline0 text-center">
          <span className="text-primary-normal"># </span>키워드로 쉽고 빠르게
          <br /> 찾아보세요!
        </p>
      </div>
      <div className="absolute bottom-[6rem] w-full px-[2rem]">
        <KakaoButton />
        <LinkLayout routeUrl="/login/email">
          <Button variant="line" className="w-full">
            이메일로 시작하기
          </Button>
        </LinkLayout>
        <LinkLayout routeUrl="/" className="flex justify-center mt-[2rem]">
          <span className="text-text-gray-6 body2-semibold pb-[0.4rem] border-b-[1px] border-b-text-gray-6">
            로그인없이 둘러보기
          </span>
        </LinkLayout>
      </div>
    </div>
  );
}
