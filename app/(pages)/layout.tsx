import RecoilRootLayout from "@common/components/layout/RecoilRootLayout/RecoilRootLayout";
import "../styles/global.css";
import ToastProvider from "@common/components/layout/ToastProvider/ToastProvider";

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
    <html lang="en" className="width-[100%] height-[100%]">
      <body className="w-[100%] h-[100%]">
        <main className="w-[100%] h-[100%] fixed overflow-hidden">
          <RecoilRootLayout>
            {children}
            <ToastProvider />
          </RecoilRootLayout>
        </main>
      </body>
    </html>
  );
}
