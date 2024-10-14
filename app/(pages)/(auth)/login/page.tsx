import LinkLayout from "@/common/components/layout/Link/LinkLayout";
import KakaoScript from "@/feature/auth/components/Login/script/KakaoScript";
import LoginLogo from "@/feature/auth/components/Login/molecules/LoginLogo";
import LoginPageText from "@/feature/auth/components/Login/organisms/LoginPageText";
import KakaoStartButton from "@/feature/auth/components/Login/organisms/KakaoStartButton";
import TextWithBorder from "@/feature/auth/components/Login/molecules/TextWithBorder";
import Button from "@/common/components/ui/buttons/Button/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
  openGraph: {
    images: ["/login-logo.png"],
  },
  description: "이메일 로그인, 혹은 카카오 로그인으로 서비스를 시작해보세요!",
  keywords: ["로컬무드", "localmood", "로그인", "마포구"],
};

//Page
export default function LoginPage() {
  return (
    // Template
    <div className="w-[100%] h-[100%]">
      <KakaoScript />
      <LoginLogo className="w-full h-[40dvh]" />
      <LoginPageText
        mainText1="키워드로 쉽고 빠르게"
        mainText2="찾아보세요!"
        subText="당신이 좋아할 그 공간,"
        className="w-full absolute"
      />
      <div className="absolute bottom-[4rem] w-full px-[2rem]">
        <KakaoStartButton text="카카오로 시작하기" />
        <LinkLayout routeUrl="/login/email">
          <Button variant="line" className="w-full">
            이메일로 시작하기
          </Button>
        </LinkLayout>
        <LinkLayout routeUrl="/" className="flex justify-center mt-[2rem]">
          <TextWithBorder text="로그인없이 둘러보기" />
        </LinkLayout>
      </div>
    </div>
  );
}
