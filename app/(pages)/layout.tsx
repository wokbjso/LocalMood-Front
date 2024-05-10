import "../styles/global.css";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { Metadata, Viewport } from "next";
import { twMerge } from "tailwind-merge";
import RecoilRootLayout from "@/common/components/layout/Recoil/RecoilRootLayout";
import ReactQueryProviders from "@/common/components/layout/QueryClientProvider/ReactQueryProvider";
import ToastProvider from "@/common/components/layout/Provider/ToastProvider";
import QueryFetchingProvider from "@/common/components/layout/Provider/QueryFetchingProvider";
const MyCurationModalProvider = dynamic(
  () => import("@/common/components/layout/Provider/MyCurationModalProvider")
);
const DetectDevice = dynamic(
  () => import("@/common/components/layout/DetectDevice/DetectDevice"),
  { ssr: false }
);

const globalFont = localFont({
  src: [
    {
      path: "../common/assets/fonts/pretendard/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../common/assets/fonts/pretendard/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../common/assets/fonts/pretendard/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../common/assets/fonts/pretendard/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--pretandard-variable",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.localmood.co.kr"),
  title: "로컬무드: 키워드로 찾는 마포구 인기 장소",
  openGraph: {
    images: ["/localmood.png"],
  },
  description: "키워드로 내가 원하는 마포구 장소를 쉽게 찾아보세요!",
  keywords: [
    "로컬무드",
    "localmood",
    "검색",
    "키워드",
    "큐레이션",
    "스크랩",
    "마포구",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="width-[100%] height-[100%]">
      <body className={twMerge("w-[100%] h-[100%]", globalFont.variable)}>
        <main className="w-[100%] h-[100%] fixed overflow-hidden">
          <ReactQueryProviders>
            <RecoilRootLayout>
              <DetectDevice>{children}</DetectDevice>
              <MyCurationModalProvider />
              <ToastProvider />
              <QueryFetchingProvider />
            </RecoilRootLayout>
          </ReactQueryProviders>
        </main>
      </body>
    </html>
  );
}
