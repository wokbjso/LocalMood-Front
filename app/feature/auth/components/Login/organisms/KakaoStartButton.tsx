"use client";

import KakaoIcon from "@common/assets/icons/kakao/KakaoIcon";
import Button from "../../../../../common/components/ui/buttons/Button/Button";

interface KakaoStartButtonProps {
  text: string;
}

//Organism
export default function KakaoStartButton({ text }: KakaoStartButtonProps) {
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const host =
    process?.env.NODE_ENV === "development"
      ? "localhost:3000"
      : "localmood.co.kr";
  const redirectUri = `${protocol}://${host}/login/kakao`;
  const kakaoLogin = () => {
    location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${redirectUri}`;
  };
  return (
    <Button
      className="relative flex w-full justify-center items-center mb-[1.2rem] bg-kakao"
      onClick={kakaoLogin}
    >
      <KakaoIcon className="absolute left-[1.2rem]" />
      <span className="body2-semibold text-black">{text}</span>
    </Button>
  );
}
