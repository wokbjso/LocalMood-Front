import "../styles/global.css";

export const metadata = {
  title: "Localmood",
  description: "키워드로 내가 원하는 공간을 찾아보세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
