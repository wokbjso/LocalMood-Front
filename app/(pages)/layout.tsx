import "../styles/global.css";
import Script from "next/script";
import KakaoScript from "@feature/auth/components/KakaoScript/KakaoScript";

export const metadata = {
  title: "로컬무드",
  description: "키워드로 내가 원하는 공간을 찾아보세요!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}&submodules=geocoder`}
      ></Script>
      <KakaoScript />
      <body>{children}</body>
    </html>
  );
}
