import "@styles/tailwind.css";
import "@styles/font.css";
import Footer from "@common/layout/Footer/Footer";

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
