import "../styles/global.css";
import RecoilRootLayout from "@common/components/layout/Recoil/RecoilRootLayout";
import ToastProvider from "@common/components/layout/Provider/ToastProvider";
const MyCurationModalProvider = dynamic(
  () => import("@common/components/layout/Provider/MyCurationModalProvider")
);
import getMyCuration from "@feature/curation/queries/getMyCuration";
import { Viewport } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

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

export const metadata = {
  title: "로컬무드",
  description: "키워드로 내가 원하는 공간을 찾아보세요!",
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
  const myCurationData = await getMyCuration();
  return (
    <html lang="en" className="width-[100%] height-[100%]">
      <body className={twMerge("w-[100%] h-[100%]", globalFont.variable)}>
        <main className="w-[100%] h-[100%] fixed overflow-hidden">
          <RecoilRootLayout>
            {children}
            <MyCurationModalProvider myCurationData={myCurationData} />
            <ToastProvider />
          </RecoilRootLayout>
        </main>
      </body>
    </html>
  );
}
